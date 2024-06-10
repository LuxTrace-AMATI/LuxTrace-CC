// Import the PostgreSQL service or client library
const postgresService = require('../services/postgresService');

const createDelivery = async (req, h) => {
    const { delivery_id, products_id, delivery_product_amount, delivery_courier, delivery_store_destination, delivery_distance, delivery_date, delivery_time, delivery_reception, delivery_status } = req.payload;
    try {
        // Call the service to create a new delivery in PostgreSQL
        await postgresService.createDelivery({ delivery_id, products_id, delivery_product_amount, delivery_courier, delivery_store_destination, delivery_distance, delivery_date, delivery_time, delivery_reception, delivery_status });
        // Return a success response
        return h.response({ message: 'Delivery created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

const listDelivery = async (req, h) => {
    try {
        // Call the service to list deliveries from PostgreSQL
        const deliveries = await postgresService.listDelivery();
        // Return the list of deliveries
        return h.response(deliveries).code(200);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createDelivery, listDelivery };
