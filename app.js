const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const navLinks = ["Home", "Features", "Pricing", "About", "Contact"];

app.get("/nav", (req, res) => {
  res.render("index", { navLinks });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
