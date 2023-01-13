const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectId=Schema.ObjectId;

const userSchema=new Schema({
name: {type: String, required: true},
currentclass:Number,
//gender:{type: String, enum:["Male", "Female"], default: "Male"},
division: {type: String}


} ,{timestamps: true});

const userModel=mongoose.model('user', userSchema);

module.exports=userModel;