const express = require('express');
const Task = require('../module/task');

const router = express.Router();

// Create a new task
router.post('/task', async (req, res) => {
  try {
    const { title, description, completed } = req.body; // Include description
    const newTask = new Task({ title, description, completed });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/task', async (req, res) => {
    try {
      const task = await Task.find();
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.put('/task/:id', async (req, res) => {
    try {
      const { title, description, completed } = req.body; 
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { title, description, completed },
        { new: true }
      );
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.delete('/task/:id', async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = router;