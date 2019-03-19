var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    repos.getProducts(rows => res.json(rows))
  });
  
router.get('/byId/:userId', function (req, res) { 
    console.log(req.params.userId);
  repos.getProductById(rows => res.json(rows), req.params.userId)
});

router.get('/byName/:productName', function (req, res) {
    repos.getProductsByName(rows => res.json(rows), req.params.productName)
  });
  
router.get('/byBrand/:productBrand', function (req, res) {
    repos.getProductsByBrand(rows => res.json(rows), req.params.productBrand)
  });


module.exports = router;
