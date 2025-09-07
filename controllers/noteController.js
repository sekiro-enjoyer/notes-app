const Note = require("../models/noteModel");

// Create Note
const createNote = async (req, res) => {
  try {
    const note = new Note({
      text: req.body.text,
      user: req.user.id, // comes from JWT
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Notes for logged-in user
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createNote, getNotes };
