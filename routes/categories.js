const express = require('express');
const { Category } = require('../models');
const router = express.Router();

// Get all categories
router.get('/', async (req, res) => {
  const categories = await Category.findAll();
  res.render('categories', { categories });
});

// Add a category
router.post('/', async (req, res) => {
  const { CategoryName } = req.body;
  await Category.create({ CategoryName });
  res.redirect('/categories');
});

// Update a category
router.post('/edit/:id', async (req, res) => {
  const { CategoryName } = req.body;
  await Category.update({ CategoryName }, { where: { CategoryId: req.params.id } });
  res.redirect('/categories');
});

// Delete a category
router.post('/delete/:id', async (req, res) => {
  await Category.destroy({ where: { CategoryId: req.params.id } });
  res.redirect('/categories');
});

module.exports = router;
