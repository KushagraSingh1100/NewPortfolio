require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Message = require("./model/messageModel");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const messages = await Message.create({ name, email, message });
    res.status(200).json({ messages });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT, () => {
      console.log("listening to port:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
