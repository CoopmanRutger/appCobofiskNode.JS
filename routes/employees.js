var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  repos.getEmployees(rows => res.json(rows))
});

module.exports = router;
