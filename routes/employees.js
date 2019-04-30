var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  repos.getEmployees(rows => res.json(rows))
});

  
router.get('/byStoreId/:storeId', function (req, res) { 
  console.log(req.params.storeId);
repos.getProductByStoreId(rows => res.json(rows), req.params.storeId)
});

module.exports = router;
