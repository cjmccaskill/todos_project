require("dotenv").config();
const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;
const config = { useUnifiedTopology: true, useNewUrlParser: true };

// Connect to db
mongoose.connect(DATABASE_URL, config);

// Event messages
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongod running?"));
db.on("connected", () => console.log(`👍🏼 - mongo is connected`));
db.on("disconnected", () => console.log(`👋🏼 - mongo disconnected`));

module.exports = mongoose;
