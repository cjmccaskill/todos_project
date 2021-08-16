const { Schema, model } = require("../db/connection");

// Create schema
const TodoSchema = new Schema({
  reminder: String,
  completed: Boolean,
});
// Create model
const Todo = model("Todo", TodoSchema);
// Export model
module.exports = Todo;
