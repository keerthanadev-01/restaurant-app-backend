const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

// POST - save feedback
app.post("/feedback", (req, res) => {
  const { name, email, message, rating } = req.body;

  messages.push({
    id: Date.now(),
    name,
    email,
    message,
    rating,
  });

  res.json({ success: true });
});

// GET - admin reads feedback
app.get("/feedback", (req, res) => {
  res.json(messages);
});

// 🔴 IMPORTANT: Use dynamic port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
