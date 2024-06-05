// Import the PostgreSQL service or client library
const postgresService = require('../services/postgresService');

const createMaterial = async (req, h) => {
    const { material_name, material_type, material_description, material_amount, material_order_date, Supplier_id } = req.payload;
    try {
        // Call the service to create a new material in PostgreSQL
        await postgresService.createMaterial({ material_name, material_type, material_description, material_amount, material_order_date, Supplier_id });
        // Return a success response
        return h.response({ message: 'Material created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

const listMaterial = async (req, h) => {
    try {
        // Call the service to list materials from PostgreSQL
        const materials = await postgresService.listMaterial();
        // Return the list of materials
        return h.response(materials).code(200);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createMaterial, listMaterial };
