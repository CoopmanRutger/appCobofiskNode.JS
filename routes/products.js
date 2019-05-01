var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    repos.getProducts(rows => res.json(rows))
  });
  
// per product ->http://localhost:3000/products/byId/1
router.get('/:id', function (req, res) { 
    console.log(req.params.id);
  repos.getProductById(rows => res.json(rows), req.params.id)
});


module.exports = router;
