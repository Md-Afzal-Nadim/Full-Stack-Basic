const mongoose = require('mongoose');




const ModelNotes = mongoose.model("notes",noteSchema);

module.exports = ModelNotes
