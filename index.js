const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello From Node.js");
});
app.get("/contact", (req, res) => {
  res.send("The Contact Page");
});

app.get("/about", (req, res) => {
  res.send("The About Page");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
