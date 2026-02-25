const mongoose =require("mongoose");


function connectTDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
       console.log("Database connected successfully");
    })
}

module.exports = connectTDB;