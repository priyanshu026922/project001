const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://priyanshu026:T2eJBvVKXmY8gMeT@cluster0.foljv.mongodb.net/");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const Todo=mongoose.model('todos',todoSchema);

module.exports={
    todo:Todo
}