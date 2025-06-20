const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Basic routes
app.get("/", (req, res) => {
  res.send("Hello From Node.js");
});

app.get("/contact", (req, res) => {
  res.send("The Contact Page");
});

app.get("/about", (req, res) => {
  res.send("The About Page");
});

app.get("/*", (req, res) => {
  res.status(404).send("Not Found");
});

const PORT = process.env.PORT || 3000;

// Add error handling for the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.on("error", (error) => {
  console.error("Server error:", error);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});
