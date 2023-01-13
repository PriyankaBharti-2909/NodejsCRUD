const { default: mongoose } = require("mongoose");

async function getconnection(){
    await mongoose.connect('mongodb://localhost/restapi');
}
module.exports=getconnection;