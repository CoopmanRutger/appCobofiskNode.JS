const dbConfig = {
    host: 'localhost',
    port: 33060,
    user: 'homestead',
    password: 'secret',
    database: 'project'
}

const mysql = require('mysql')

function getEmployees(handler) {
    executeQuery("select * from employees", (err, rows, fields) => {
        if (err) throw err

        handler(rows)
    })
}

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

function getProductsByName(handler, name) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * from products where name like '%" + name + "%'" , (err, rows, fields) => {
        if (err) throw err

        handler(rows)
    })
}

function getProductsByBrand(handler, brand) {
    //todo: beveiligen parmeter ? 
    executeQuery("select * from products where merk like '%" + brand + "%'", (err, rows, fields) => {
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
    getEmployees,
    getProducts,
    getProductById,
    getProductsByName,
    getProductsByBrand
}