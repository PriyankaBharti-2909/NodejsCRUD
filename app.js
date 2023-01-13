const express = require('express');
const mongoose = require('mongoose');
const conn = require('./connection/conn');
const bodyparser = require('body-parser');
conn();
const app = express();
const User = require("./user")
const port = 5000;
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())






app.get('/', (req, res) => {
    res.send("Welcome to API Sessions");
})

//CRUD OPERATIONS
//GET/POST/PUT/DELETE
//POST-- CREATING THE DATA IN DATABASE


app.delete("/api/student/:id", async (req, res) => {
    //Delete the data using Put method

    try{
        const user = await User.deleteOne({_id : req.params.id});
        
        res.status(200).json({
        status:"success",
           user
        })
      
    }
    catch(e){
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    } 


}
)
     






app.put("/api/student/:id", async (req, res) => {
    //Update the data using Put method

    try{
        const user = await User.updateOne({_id : req.params.id}, req.body);
        res.status(200).json({
        status:"success",
           user
        })
      
    }
    catch(e){
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    } 


}
)
     






app.get("/api/student", async (req, res) => {
    //Object Destrutcturing

    try {
        const { name = "", page = 1, pagesize = 5 } = req.query;
        let users;
        if (name === "") {
            users = await User.find()
        } else {
            users = await User.find({ name: name })
        }
        // const users= await User.find({_id: req.params.id})
        res.status(200).json({
            status: "success",
            users
        })
    }
    catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})














app.get("/api/student/:id", async (req, res) => {
    //Logical nesting :Get a specific users using id

    try {
        const users = await User.find({ _id: req.params.id })
        res.status(201).json({
            status: "success",
            users
        })
    }
    catch {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})












app.get("/api/student", async (req, res) => {
    //fetching the data

    try {
        const users = await User.find()
        res.status(201).json({
            status: "success",
            users
        })
    }
    catch {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})



app.post("/api/student", async (req, res) => {
    //write the code to create the data in database and send the data

    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: "success",
            user
        })
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }




    // console.log(req.body);
    // res.send("ok")
});
app.get("*", (req, res) => {
    res.status(404).send("API IS NOT FOUND");
})




//Read all the users
// app.get("/api/v1/users",(req,res)=>{
//     try{
//         const users=await User.find()
//         res.status(200).json({
//             status: "success",
//             users
//         })
//     }catch(e){
// res.status(200).status(500).json({
//     status:"Failed",
//     message:""
// })
//     }
// })

// app.post("/api/v1/users",(req,res)=>{

//     //write to create data in databases
// try{
//     const user=await User.create(req.body);
//     res.status.json({
//         status:"success"
//     })
// }
// catch(e){
//     res.status(200).status(500).json({
//         status:"Failed",
//         message:""
//     })

// }

// app.get("*",(req, res)=>{
//     res.status(404).send("API IS NOT FOUND");
// })




app.listen(port, () => console.log(`Example app listening on port ${port}!`))