const { Pool } = require('pg');

// Create a PostgreSQL connection pool using environment variables
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'postgres',
    database: process.env.DB_DATABASE || 'amati',
    password: process.env.DB_PASSWORD || 'changeme',
    port: process.env.DB_PORT || 5432 // Default PostgreSQL port
});

// Close the database connection
const closeConnection = async () => {
    await pool.end();
};

// User Functions
const createUser = async ({ username, password }) => {
    const query = `
        INSERT INTO users (username, password)
        VALUES ($1, $2)
    `;
    const values = [username, password];
    try {
        await pool.query(query, values);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const listUsers = async () => {
    const query = `
        SELECT * FROM users
    `;
    try {
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Material Functions
const createMaterial = async ({ material_name, material_type, material_description, material_amount, material_order_date, Supplier_id }) => {
    const query = `
        INSERT INTO materials (material_name, material_type, material_description, material_amount, material_order_date, Supplier_id)
        VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const values = [material_name, material_type, material_description, material_amount, material_order_date, Supplier_id];
    try {
        await pool.query(query, values);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const listMaterial = async () => {
    const query = `
        SELECT * FROM materials
    `;
    try {
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Product Functions
const createProduct = async ({ product_id, product_name, product_description, product_amount, material_id, product_date_created }) => {
    const query = `
        INSERT INTO products (product_id, product_name, product_description, product_amount, material_id, product_date_created)
        VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const values = [product_id, product_name, product_description, product_amount, material_id, product_date_created];
    try {
        await pool.query(query, values);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const listProduct = async () => {
    const query = `
        SELECT * FROM products
    `;
    try {
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Batch Production Functions
const createBatchProduction = async ({ batch_id, product_id, batch_amount, batch_process_name, batch_process_stage, batch_date, batch_status }) => {
    const query = `
        INSERT INTO batchproductions (batch_id, product_id, batch_amount, batch_process_name, batch_process_stage, batch_date, batch_status)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [batch_id, product_id, batch_amount, batch_process_name, batch_process_stage, batch_date, batch_status];
    try {
        await pool.query(query, values);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const listBatchProduction = async () => {
    const query = `
        SELECT * FROM batchproductions
    `;
    try {
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Supplier Functions
const createSupplier = async ({ supplier_id, supplier_name, supplier_description, supplier_address, supplier_contact }) => {
    const query = `
        INSERT INTO suppliers (supplier_id, supplier_name, supplier_description, supplier_address, supplier_contact)
        VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [supplier_id, supplier_name, supplier_description, supplier_address, supplier_contact];
    try {
        await pool.query(query, values);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const listSupplier = async () => {
    const query = `
        SELECT * FROM suppliers
    `;
    try {
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Delivery Functions
const createDelivery = async ({ delivery_id, products_id, delivery_product_amount, delivery_courier, delivery_store_destination, delivery_distance, delivery_date, delivery_time, delivery_reception, delivery_status }) => {
    const query = `
        INSERT INTO deliveries (delivery_id, products_id, delivery_product_amount, delivery_courier, delivery_store_destination, delivery_distance, delivery_date, delivery_time, delivery_reception, delivery_status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;
    const values = [delivery_id, products_id, delivery_product_amount, delivery_courier, delivery_store_destination, delivery_distance, delivery_date, delivery_time, delivery_reception, delivery_status];
    try {
        await pool.query(query, values);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const listDelivery = async () => {
    const query = `
        SELECT * FROM deliveries
    `;
    try {
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Tracking Functions
const createTracking = async ({ tracking_id, delivery_id, tracking_description, tracking_date, tracking_timestamp }) => {
    const query = `
        INSERT INTO tracking (tracking_id, delivery_id, tracking_description, tracking_date, tracking_timestamp)
        VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [tracking_id, delivery_id, tracking_description, tracking_date, tracking_timestamp];
    try {
        await pool.query(query, values);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const listTracking = async () => {
    const query = `
        SELECT * FROM tracking
    `;
    try {
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Store Functions
const createStore = async ({ store_id, delivery_id, store_name, store_address, store_distance_from_warehouse, store_signoff, store_reception }) => {
    const query = `
        INSERT INTO stores (store_id, delivery_id, store_name, store_address, store_distance_from_warehouse, store_signoff, store_reception)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [store_id, delivery_id, store_name, store_address, store_distance_from_warehouse, store_signoff, store_reception];
    try {
        await pool.query(query, values);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const listStores = async () => {
    const query = `
        SELECT * FROM stores
    `;
    try {
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { 
    createMaterial, 
    listMaterial,
    createProduct,
    listProduct,
    createBatchProduction,
    listBatchProduction,
    createSupplier,
    listSupplier,
    createDelivery,
    listDelivery,
    createTracking,
    listTracking,
    createStore,
    listStores,
    createUser,
    listUsers,
    closeConnection
};
