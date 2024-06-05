// postgresService.js

const { Pool } = require('pg');


// Create a PostgreSQL connection pool
const pool = new Pool({
    user: 'amati-backend',
    host: '',
    database: 'postgres',
    password: '',
    port: 5432, // Default PostgreSQL port
});

// Close the database connection

const closeConnection = async () => {

    await pool.end();

};

//User Functions
const createUser = async ({ username, password}) => {
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

//Material Functions
const createMaterial = async ({ material_name, material_type, material_description, material_amount, material_order_date, Supplier_id }) => {
    const query = `
        INSERT INTO materials (material_name, material_type, material_description, material_amount, material_order_date, Supplier_id)
        VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const values = [material_name, material_type, material_description, material_amount, material_order_date, Supplier_id];
    await pool.query(query, values);
};

const listMaterial = async () => {
    const query = `
        SELECT * FROM materials
    `;
    const { rows } = await pool.query(query);
    return rows;
};

//Productions Functions
const createProduct = async ({ product_id, product_name, product_description, product_amount, material_id, product_date_created}) => {
    const query = `
    INSERT INTO products (product_id, product_name, product_description, product_amount, material_id, product_date_created)
    VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const values = [product_id, product_name, product_description, product_amount, material_id, product_date_created];
    await pool.query(query, values);
};

const listProduct = async () => {
    const query = `
    SELECT * FROM products
    `;
    const { rows } = await pool.query(query);
    return rows;
};

//Batch Production Functions
const createBatchProduction = async ({ batch_id, product_id, batch_amount, batch_process_name, batch_process_stage, batch_date, batch_status }) => {
    const query = `
    INSERT INTO batchproductions (batch_id, product_id, batch_amount, batch_process_name, batch_process_stage, batch_date, batch_status)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [batch_id, product_id, batch_amount, batch_process_name, batch_process_stage, batch_date, batch_status];
    await pool.query(query, values);
};

const listBatchProduction = async () => {
    const query = `
    SELECT * FROM  batchproductions
    `;
    const { rows } = await pool.query(query);
    return rows;
};

//Supplier Functions
const createSupplier = async ({ supplier_id, supplier_name, supplier_description, supplier_address, supplier_contact }) => {
    const query = `
    INSERT INTO suppliers (supplier_id, supplier_name, supplier_description, supplier_address, supplier_contact)
    VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [supplier_id, supplier_name, supplier_description, supplier_address, supplier_contact];
    await prototype.query(query, values);
};

const listSupplier = async () => {
    const query = `
    SELECT * FROM suppliers
    `;
    const { rows } = await pool.query(query);
    return rows;
};

//Delivery Functions
const createDelivery = async ({ delivery_id, products_id, delivery_product_amount, delivery_courier, delivery_store_destination, delivery_distance, delivery_date, delivery_time, delivery_reception, delivery_status }) => {
    const query = `
    INSERT INTO deliveries (delivery_id, products_id, delivery_product_amount, delivery_courier, delivery_store_destination, delivery_distance, delivery_date, delivery_time, delivery_reception, delivery_status)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;
    const values = [delivery_id, products_id, delivery_product_amount, delivery_courier, delivery_store_destination, delivery_distance, delivery_date, delivery_time, delivery_reception, delivery_status];
    await pool.query(query, values);
};

const listDelivery = async () => {
    const query = `
    SELECT * FROM deliveries
    `;
    const { rows } = await pool.query(query);
    return rows;
};

//Update Tracking Functions
const createTracking = async ({ tracking_id, delivery_id, tracking_description, tracking_date, tracking_timestamp }) => {
    const query = `
    INSERT INTO tracking (tracking_id, delivery_id, tracking_description, tracking_date, tracking_timestamp)
    VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [tracking_id, delivery_id, tracking_description, tracking_date, tracking_timestamp];
    await pool.query(query, values);
};

const listTracking = async () => {
    const query = `
    SELECT * FROM tracking
    `;
    const { rows } = await pool.query(query);
    return rows;
};

//Store Functions
const createStore = async ({ store_id, delivery_id, store_name, store_address, store_distance_from_warehouse, store_signoff, store_reception }) => {
    const query = `
    INSERT INTO stores (store_id, delivery_id, store_name, store_address, store_distance_from_warehouse, store_signoff, store_reception)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [store_id, delivery_id, store_name, store_address, store_distance_from_warehouse, store_signoff, store_reception];
    await pool.query(query, values);
};

const listStores = async () => {
    const query = `
    SELECT * FROM stores
    `;
    const { rows } = await pool.query(query);
    return rows;
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
    listUsers
};
