# category-product-crud

Node.js Machine Test

This project is a Node.js application with EJS as the view engine and an RDBMS database. It provides CRUD operations for Category and Product masters, with server-side pagination for the product list.

Features

Category Master

Add, Edit, Delete, and View Categories.

Product Master

Add, Edit, Delete, and View Products.

Products are associated with Categories.

Server-Side Pagination

The product list retrieves only the records for the current page from the database.

Tech Stack

Backend: Node.js (Express.js)

View Engine: EJS

Database: MySQL (or any other RDBMS)

ORM: Sequelize

Requirements

Node.js: v16+ (or the latest LTS version)

MySQL: Installed and running

Setup Instructions

1. Clone the Repository
git clone <repository-url>
cd node-machine-test

2. Backend Setup

Install Dependencies
npm install

Configure Database

Update the database configuration in config/dbConfig.js:
const sequelize = new Sequelize('your-database-name', 'your-username', 'your-password', {
  host: 'localhost',
  dialect: 'mysql',
});

Run the Server

Sync the database and start the server:
npm start

The server will run on http://localhost:5000.

API Endpoints

Category APIs
Method

Endpoint

Description

GET

/categories

Fetch all categories

POST

/categories

Create a new category

PUT

/categories/:id

Update a category by ID

DELETE

/categories/:id

Delete a category by ID




Product APIs
Method

Endpoint

Description

GET

/products

Fetch products with pagination

POST

/products

Create a new product

PUT

/products/:id

Update a product by ID

DELETE

/products/:id

Delete a product by ID

Pagination Parameters (for GET /products):

page: Page number (default: 1)

size: Number of records per page (default: 10)

Ensure the backend server (http://localhost:5000) is running before accessing the application.

http://localhost:3000/categories
http://localhost:3000/products
