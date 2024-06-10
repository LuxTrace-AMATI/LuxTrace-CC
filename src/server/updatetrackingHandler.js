// Import the PostgreSQL service or client library
const postgresService = require('../services/postgresService');

const createTracking = async (req, h) => {
    const { tracking_id, delivery_id, tracking_description, tracking_date, tracking_timestamp } = req.payload;
    try {
        // Call the service to create a new tracking entry in PostgreSQL
        await postgresService.createTracking({ tracking_id, delivery_id, tracking_description, tracking_date, tracking_timestamp });
        // Return a success response
        return h.response({ message: 'Tracking entry created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

const listTracking = async (req, h) => {
    try {
        // Call the service to list tracking entries from PostgreSQL
        const trackingEntries = await postgresService.listTracking();
        // Return the list of tracking entries
        return h.response(trackingEntries).code(200);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createTracking, listTracking };
