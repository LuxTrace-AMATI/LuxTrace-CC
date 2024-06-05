// Import the PostgreSQL service or client library
const postgresService = require('../services/postgresService');

const createBatchProduction = async (req, h) => {
    const { batch_id, product_id, batch_amount, batch_process_name, batch_process_stage, batch_date, batch_status } = req.payload;
    try {
        // Call the service to create a new batch production in PostgreSQL
        await postgresService.createBatchProduction({ batch_id, product_id, batch_amount, batch_process_name, batch_process_stage, batch_date, batch_status });
        // Return a success response
        return h.response({ message: 'Batch production created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

const listBatchProduction = async (req, h) => {
    try {
        // Call the service to list batch productions from PostgreSQL
        const batches = await postgresService.listBatchProduction();
        // Return the list of batch productions
        return h.response(batches).code(200);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createBatchProduction, listBatchProduction };