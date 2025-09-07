const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // reference to User model
    required: true,
  },
}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
