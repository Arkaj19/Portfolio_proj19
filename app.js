const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public", "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/:portfolio", (req, res) => {
  const { portfolio } = req.params;
  res.render("index.ejs", { portfolio });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
