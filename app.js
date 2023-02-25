const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "docker/.env") });

const express = require("express");

// Routes
const indexRouter = require("./routes/index");

const app = express();
const port = process.env.PORT || 8000;

// livereload
if (app.get("env") === "development") {
  const livereload = require("livereload");

  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(
    path.join(__dirname, "views"),
    path.join(__dirname, "frontend/src")
  );
  const connectLivereload = require("connect-livereload");
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLivereload());
}

// Express settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
