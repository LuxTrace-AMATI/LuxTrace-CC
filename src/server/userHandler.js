// Import the PostgreSQL service or client library
const postgresService = require('../services/postgresService');

const createUser = async (req, h) => {
    const { username, password } = req.payload;
    try {
        // Call the service to create a new user in PostgreSQL
        await postgresService.createUser({ username, password });
        // Return a success response
        return h.response({ message: 'User created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

const listUsers = async (req, h) => {
    try {
        // Call the service to list users from PostgreSQL
        const users = await postgresService.listUsers();
        // Return the list of users
        return h.response(users).code(200);
    } catch (error) {
        console.error(error);
        // Return an error response
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createUser, listUsers };
