const userHandler = require('./userHandler');
const materialHandler = require('./materialHandler');
const productHandler = require('./productHandler');
const batchproductionHandler = require('./batchproductionHandler');
const supplierHandler = require('./supplierHandler');
const deliveryHandler = require('./deliveryHandler');
const updatetrackingHandler = require('./updatetrackingHandler');
const storeHandler = require('./storeHandler');
const { handler } = require('@hapi/hapi/lib/cors');


const routes = [
    {
        method: 'POST',
        path: '/create-user',
        handler: userHandler.createUser,
    },
    {
        method: 'GET',
        path: '/list-user',
        handler: userHandler.listUsers
    },
    {
        method: 'POST',
        path: '/create-material',
        handler: materialHandler.createMaterial,
    },
    {
        method: 'GET',
        path: '/list-material',
        handler: materialHandler.listMaterial,
    },
    {
        method: 'POST',
        path: '/create-product',
        handler: productHandler.createProduct,
    },
    {
        method: 'GET',
        path: '/list-product',
        handler: productHandler.listProduct,
    },
    {
        method: 'POST',
        path: '/create-batch-production',
        handler: batchproductionHandler.createBatchProduction,
    },
    {
        method: 'GET',
        path: '/list-batch-production',
        handler: batchproductionHandler.listBatchProduction,
    },
    {
        method: 'POST',
        path: '/create-supplier',
        handler: supplierHandler.createSupplier,
    },
    {
        method: 'GET',
        path: '/list-supplier',
        handler: supplierHandler.listSupplier,
    },
    {
        method: 'POST',
        path: '/create-delivery',
        handler: deliveryHandler.createDelivery,
    },
    {
        method: 'GET',
        path: '/list-delivery',
        handler: deliveryHandler.listDelivery,
    },
    {
        method: 'POST',
        path: '/create-tracking',
        handler: updatetrackingHandler.createTracking,
    },
    {
        method: 'GET',
        path: '/list-tracking',
        handler: updatetrackingHandler.listTracking,
    },
    {
        method: 'POST',
        path: '/create-store',
        handler: storeHandler.createStore,
    },
    {
        method: 'GET',
        path: '/list-stores',
        handler: storeHandler.listStores,
    },
];

module.exports = routes;
