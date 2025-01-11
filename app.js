require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sequelize } = require('./models'); // Ensure models are set up correctly
// Routes
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');


const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));



app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

// Test the DB connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.error('Error connecting to the database:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
