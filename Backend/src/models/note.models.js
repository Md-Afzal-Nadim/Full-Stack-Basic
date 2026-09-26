const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    title:String,
    
})

const ModelNotes = mongoose.model("notes",noteSchema);

module.exports = ModelNotes;