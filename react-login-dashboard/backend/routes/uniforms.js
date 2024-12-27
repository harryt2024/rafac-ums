const express = require('express');
const router = express.Router();
const Uniform = require('../models/Uniform'); // Make sure the Uniform model exists

// Route to add a uniform
router.post('/uniforms', async (req, res) => {
  try {
    const newUniform = new Uniform(req.body);
    await newUniform.save();
    res.status(201).json(newUniform);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all uniforms
router.get('/uniforms', async (req, res) => {
  try {
    const uniforms = await Uniform.find();
    res.status(200).json(uniforms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
