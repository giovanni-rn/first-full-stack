// express
const express = require("express");
const app = express();

// body parser for json
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// cors
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

// routes
const routes = require("./routes.js");
app.use("/api", routes);

// server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
