const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors=require("cors");
app.use(express.json());
app.use(cors({
     origin: [
    "http://localhost:5173",       
    "https://todo-yc92.onrender.com"
  ]
}));

app.post("/todo", async function (req, res) {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);

    if (!parsedPayLoad.success) {
      res.status(411).json({
        msg: "wrong inputs given"
      });
      return;
    }

    await todo.create({
      title: parsedPayLoad.data.title,
      description: parsedPayLoad.data.description,
      completed: false,
    })

    res.json({ 
        msg: "todo created" 
    })

});


app.get("/todos",async function(req,res){
   const todos=await todo.find({});
     res.json(todos);
})


//update in mongodb
app.put("/completed", async function(req, res) {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);

  if (!parsedPayLoad.success) {
    res.status(411).json({ msg: "wrong inputs given" });
    return;
  }

  await todo.updateOne({
     _id: req.body.id 
    },
     { 
      completed: true 
     });

  res.json({ msg: "todo marked done" });
});

app.listen(process.env.PORT || 3000);
