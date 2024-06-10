// Import the PostgreSQL service or client library
const postgresService = require('../services/postgresService');

const createStore = async (req, h) => {
    const { store_id, delivery_id, store_name, store_address, store_distance_from_warehouse, store_signoff, store_reception } = req.payload;
    try {
        // Call the service to create a new store entry in PostgreSQL
        await postgresService.createStore({ store_id, delivery_id, store_name, store_address, store_distance_from_warehouse, store_signoff, store_reception });
        // Return a success response
        return h.response({ message: 'Store entry created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

const listStores = async (req, h) => {
    try {
        // Call the service to list store entries from PostgreSQL
        const stores = await postgresService.listStores();
        // Return the list of store entries
        return h.response(stores).code(200);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createStore, listStores };
