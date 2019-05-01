var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    repos.getStores(rows => res.json(rows))
  });
  
router.get('/:id', function (req, res) { 
    console.log(req.params.id);
  repos.getStoresById(rows => res.json(rows), req.params.id)
});

// producten per winkel -> winkel stock
router.get('/:id/products', function (req, res) {
    repos.getProductByStoreId(rows => res.json(rows), req.params.id)
  });

// in winkel detail, bestelbonnen
router.get('/:id/deliveryNotes', function (req, res) { 
    repos.getDeliveryNotesByStoreId(rows => res.json(rows), req.params.id)
  });

  // winkel werknemers
router.get('/:id/employees', function (req, res) { 
    console.log(req.params.id);
  repos.getEmployeesByStoreId(rows => res.json(rows), req.params.id)
  });

module.exports = router;
