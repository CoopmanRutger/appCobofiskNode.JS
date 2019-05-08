var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    repos.getStores(rows => res.json(rows))
});

router.get('/:id', function (req, res) {
    console.log(req.params.id);
    repos.getStoresById(req.params.id, rows => res.json(rows[0]))
});

router.get('/:id/products', function (req, res) {
    repos.getProductByStoreId(req.params.id, rows => res.json(rows))
});

router.get('/:id/deliveryNotes', function (req, res) {
    repos.getDeliveryNotesByStoreId(req.params.id, rows => res.json(rows))
});

router.get('/:id/employees', function (req, res) {
    console.log(req.params.id);
    repos.getEmployeesByStoreId(req.params.id, rows => res.json(rows))
});

module.exports = router;
