const Todo = require("../models/todo");
const { Router } = require("express");

// Create router
const router = Router();

// Index route - return all todos from db
router.get("/", async (req, res) => {
  res.json(await Todo.find({}).catch((error) => res.status(400).json(error)));
});

// Show route - (get) return a single todo by :id
router.get("/:id", async (req, res) => {
  res.json(
    await Todo.findById(req.params.id).catch((error) =>
      res.status(400).json(error)
    )
  );
});

// Create route - (post) a new todo
router.post("/", async (req, res) => {
  res.json(
    await Todo.create(req.body).catch((error) => res.status(400).json(error))
  );
});

// Update route = (put) update a todo from db
router.put("/:id", async (req, res) => {
  res.json(
    await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(
      (error) => res.status(400).json(error)
    )
  );
});

// Destroy route - delete an item by :id
router.delete("/:id", async (req, res) => {
  res.json(
    await Todo.findByIdAndRemove(req.params.id).catch((error) =>
      res.status(400).json(error)
    )
  );
});

// Export router
module.exports = router;
