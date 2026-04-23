const express = require("express");
const app = express();

const PORT = 8080;

// Root endpoint
app.get("/", (req, res) => {
res.send("Hello Sandeep Gudimetla from DevOps Project");
});

// Health check endpoint
app.get("/health", (req, res) => {
res.status(200).json({
status: "UP"
});
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

app.get("/version", (req, res) => {
  res.send("v1.0");
});