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
  res.render("index", { message: "Hello From Node.js" });
});

app.get("/contact", (req, res) => {
  res.render("index", { message: "The Contact Page" });
});

app.get("/about", (req, res) => {
  res.render("index", { message: "The About Page" });
});

app.use((req, res) => {
  res.status(404).render("index", { message: "Not Found" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
