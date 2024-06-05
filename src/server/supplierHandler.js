// Import the PostgreSQL service or client library
const postgresService = require('../services/postgresService');

const createSupplier = async (req, h) => {
    const { supplier_id, supplier_name, supplier_description, supplier_address, supplier_contact } = req.payload;
    try {
        // Call the service to create a new supplier in PostgreSQL
        await postgresService.createSupplier({ supplier_id, supplier_name, supplier_description, supplier_address, supplier_contact });
        // Return a success response
        return h.response({ message: 'Supplier created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
}; 

const listSupplier = async (req, h) => {
    try {
        // Call the service to list suppliers from PostgreSQL
        const suppliers = await postgresService.listSupplier();
        // Return the list of suppliers
        return h.response(suppliers).code(200);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createSupplier, listSupplier };
