require("dotenv").config();
const mongoose=require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));
  
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
