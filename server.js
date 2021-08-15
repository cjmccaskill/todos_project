require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

// Create app obj
const app = express();

//  Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes & Routers
app.get("/", (req, res) => {
  res.send("You have 👊🏼 it the default route... nothing to 👀 here.");
});

// Server started
app.listen(PORT, () => {
  console.log(`🤙🏼 Server is listening on port: ${PORT}`);
});
