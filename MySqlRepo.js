const dbConfig = {
    host: 'localhost',
    port: 33060,
    user: 'homestead',
    password: 'secret',
    database: 'project'
}
const mysql = require('mysql')

// Employees
function getEmployees(handler) {
    executeQuery("select * from employees", (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}


function addEmployee(handler, {storeId, name, age, duty, username, password}) {
    executeQuery("INSERT INTO employees (storeId, name, age, duty, username, password)" 
                + "VALUES (" + storeId + ", " + name + ", " + age + ", " + duty + ", "+ username + ", " + password + ")", (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}


// Products
function getProducts(handler) {
    executeQuery("select * from products", (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}

function getProductById(handler, id) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * from products where id=" + id, (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}

function getProductByStoreId(handler, storeId) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * from products where storeId=" + storeId, (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}


// Delivery notes
function getDeliveryNotes(handler) {
    executeQuery("select * from deliveryNotes", (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}

function getDeliveryNotesById(handler, id) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * from deliveryNotes where id=" + id, (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}

function getDeliveryNotesByStoreId(handler, storeId) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * from deliveryNotes where storeId=" + storeId, (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}

function getProductsByDeliveryNoteId(handler, id) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * FROM products WHERE id in (SELECT productid FROM deliveryNotes WHERE id =" + id, (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}


function getProductsByStoreId(handler, storeId) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * FROM products WHERE id in (SELECT productid FROM deliveryNotes WHERE storeId =" + storeId, (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}



// Stores
function getStores(handler) {
    executeQuery("select * from stores", (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}

function getStoresById(handler, id) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * from stores where id=" + id, (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}

function getEmployeesByStoreId(handler, storeId) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * from employees where storeId=" + storeId, (err, rows, fields) => {
        if (err) throw err
        handler(rows)
    })
}


function executeQuery(query, handler) {
    const connection = mysql.createConnection(dbConfig)
    connection.connect()
    connection.query(query, handler)
    connection.end()
}


module.exports = {
    //get
    getEmployees,
    
    getProducts,
    getProductById,

    getDeliveryNotes,
    getDeliveryNotesById,
    getProductsByDeliveryNoteId,

    getStores,
    getStoresById, 
    getProductByStoreId,
    getDeliveryNotesByStoreId,
    getEmployeesByStoreId,

     //post
     addEmployee,
}