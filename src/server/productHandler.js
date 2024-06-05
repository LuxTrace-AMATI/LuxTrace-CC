// Import the PostgreSQL service or client library
const postgresService = require('../services/postgresService');

const createProduct = async (req, h) => {
    const { product_id, product_name, product_description, product_amount, material_id, product_date_created } = req.payload;
    try {
        // Call the service to create a new product in PostgreSQL
        await postgresService.createProduct({ product_id, product_name, product_description, product_amount, material_id, product_date_created });
        // Return a success response
        return h.response({ message: 'Product created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

const listProduct = async (req, h) => {
    try {
        // Call the service to list products from PostgreSQL
        const products = await postgresService.listProduct();
        // Return the list of products
        return h.response(products).code(200);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createProduct, listProduct };
