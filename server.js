const express = require("express");

const app = express();
const PORT = 3000;

// Simple route to test
app.get("/", (req, res) => {
  res.send("✅ Server is working! You are on localhost:3000");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
