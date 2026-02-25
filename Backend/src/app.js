/* server create karna */


const express=require('express');
const ModelNotes = require("./models/note.models");
const cors=require('cors');//cors ka use karenge backend se frontend ko connect karne ke liye
const app=express();
const path=require('path')//user hamare api par call karega jisse hamne creat hi nahi kiya hai to user ko responece me html file milega

app.use(express.json());
app.use(cors())//bakend se frontend ko connect karne ke liye cors ka use karenge

 app.use(express.static("./public"))//ye line hamare public folder ko static banayega jisse user hamare api par call karega jisse hamne creat hi nahi kiya hai to user ko responece me html file milega

/* post/api/notes */
/* create new notes and save data in database */
app.post("/api/notes", async (req,res)=>{
    const {title,description}=req.body;

   const Note = await ModelNotes.create({
        title,
        description
    })
    res.status(201).json({
      message:"Note created successfully",
      Note
    })
})


/* get/api/notes */
/* sare data to mongodb se nikalega aur user ko dekhayega*/

app.get("/api/notes",async(req,res)=>{
  const Note =await ModelNotes.find()

  res.status(200).json({
    message:"All Notes",
    Note
  })
})

/* delete/api/notes/:id */

app.delete("/api/notes/:id",async(req,res)=>{
  const id=req.params.id;

  const Note= await ModelNotes.findByIdAndDelete(id)

  res.status(200).json({
    message:"Note deleted successfully",
  })  
})

/* update/api/notes/:id */
app.patch("/api/notes/:id", async (req,res) => {
  const id = req.params.id;
  const {title,description } = req.body;

 const Note =await ModelNotes.findByIdAndUpdate(id, {title,description})

  res.status(200).json({
    message: "Note updated successfully",
  })
})

app.use("*name", (req,res)=>{ //ye line hamare api par call karega jisse hamne creat hi nahi kiya hai to user ko responece me html file milega
  res.sendFile(path.join(__dirname, "..","./public/index.html"))
  })




module.exports = app;