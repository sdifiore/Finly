const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.set("view engine", "ejs");
app.set("views", "./views");

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
  res.render("index", { message: "The Contact Page" });
});

app.get("/about", (req, res) => {
  res.render("index", { message: "The About Page" });
});

app.get("/*", (req, res) => {
  res.status(404).render("index", { message: "Not Found" });
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
