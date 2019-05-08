const dbConfig = {
    host: 'localhost',
    port: 33060,
    user: 'homestead',
    password: 'secret',
    database: 'project'
}
const mysql = require('mysql')

// Employees
function getEmployees(callback) {
    executeQuery("select * from employees", {}, callback);
}

function addEmployee({storeId, name, age, duty, username, password, startedOn}, callback) {
    console.log(storeId, name, age, duty, username, password, startedOn);

    executeQuery("INSERT INTO employees (storeId, name, age, duty, username, password, created_at)" 
                + " VALUES (? ,? ,? ,? ,? ,?,? )", 
                [storeId, name ,age ,duty ,username ,password, startedOn], callback)
}

// Products
function getProducts(callback) {
    executeQuery("select * from products", {}, callback);
}

function getProductById(id, callback) {
    executeQuery('SELECT * FROM products WHERE id = ? ' , [id], callback);
}

function getProductByStoreId(storeId, callback) {
    executeQuery("select * from products where storeId=?", [storeId], callback);
}

// Delivery notes
function getDeliveryNotes(callback) {
    executeQuery("select * from deliveryNotes", {}, callback);
}

function getDeliveryNotesById(id, callback) {
    executeQuery("select * from deliveryNotes where id=?", [id], callback);
}

function getDeliveryNotesByStoreId(storeId, callback) {
    executeQuery("select * from deliveryNotes where storeId=?", [storeId], callback);
}

function getProductsByDeliveryNoteId(id, callback) {
    executeQuery("SELECT * FROM products WHERE id in (SELECT productid FROM deliveryNotes WHERE id =?)", [id], callback);
}

function getProductsByStoreId(storeId, callback) {
    executeQuery("select * FROM products WHERE id in (SELECT productid FROM deliveryNotes WHERE storeId =?)" , [storeId], callback);
}

// Stores
function getStores(callback) {
    executeQuery("select * from stores", {}, callback);
}

function getStoresById(id, callback) {
    executeQuery("select * from stores where id=?", [id], callback);
}

function getEmployeesByStoreId(storeId, callback) {
    executeQuery("select * from employees where storeId=?", [storeId], callback);
}

function executeQuery(query, params, callback) {
    console.log("executeQuery");
    const connection = mysql.createConnection(dbConfig)

    connection.connect(err => {
        console.log("connected");
        if (err) throw err;
        connection.query(query, params, (err, result) => {
            console.log("query");
            if (err) throw err;
            callback(result);
            connection.end();
            });
    })
}


module.exports = {
    //get
    getEmployees,
    
    getProducts,
    getProductById,
    getProductByStoreId,

    getDeliveryNotes,
    getDeliveryNotesById,
    getProductsByDeliveryNoteId,

    getStores,
    getStoresById, 
    getProductsByStoreId,
    getDeliveryNotesByStoreId,
    getEmployeesByStoreId,

     //post
     addEmployee,
}