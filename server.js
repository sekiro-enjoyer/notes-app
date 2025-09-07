const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const noteRoutes = require("./routes/noteRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
