const { BigQuery } = require('@google-cloud/bigquery');
const bigquery = new BigQuery();

const createMaterial = async (material) => {
    const query = `
        INSERT INTO your_dataset.Material (material_id, material_name, material_type, material_description, material_amount, material_order_date, supplier_id)
        VALUES (@material_id, @material_name, @material_type, @material_description, @material_amount, @material_order_date, @supplier_id)
    `;
    const options = {
        query: query,
        params: material,
    };
    await bigquery.query(options);
};

const listMaterial = async () => {
    const query = `SELECT * FROM your_dataset.Material`;
    const [rows] = await bigquery.query(query);
    return rows;
};

const createProduct = async (product) => {
    const query = `
        INSERT INTO your_dataset.Products (product_id, product_name, product_description, product_amount, material_id, product_date_created)
        VALUES (@product_id, @product_name, @product_description, @product_amount, @material_id, @product_date_created)
    `;
    const options = {
        query: query,
        params: product,
    };
    await bigquery.query(options);
};

const listProduct = async () => {
    const query = `SELECT * FROM your_dataset.Products`;
    const [rows] = await bigquery.query(query);
    return rows;
};

module.exports = { createMaterial, listMaterial, createProduct, listProduct };
