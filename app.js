const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");

// Routes
const indexRouter = require("./routes/index");

const app = express();
const port = process.env.PORT || 8000;

// Express settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
