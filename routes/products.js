const express = require('express');
const { Product, Category } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const offset = (page - 1) * size;

    const totalProducts = await Product.count();
    const totalPages = Math.ceil(totalProducts / size);

    const products = await Product.findAll({
      include: [{ model: Category }],
      limit: size,
      offset,
    });

    const categories = await Category.findAll(); // Fetch for dropdown

    res.render('products', { 
      products, 
      categories, 
      currentPage: page, 
      totalPages, 
      size 
    });
  } catch (error) {
    res.status(500).send('Error fetching products.');
  }
});

router.post('/', async (req, res) => {
  const { ProductName, CategoryId } = req.body;

  try {
    const newProduct = await Product.create({ ProductName, CategoryId });
    res.status(201).json({ message: 'Product created successfully', newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { ProductName, CategoryId } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.ProductName = ProductName;
    product.CategoryId = CategoryId;
    await product.save();

    res.json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id, {
      include: [{ model: Category }],
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
});

module.exports = router;
