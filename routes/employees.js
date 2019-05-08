var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  repos.getEmployees(rows => res.json(rows))
});
router.post('/add', function (req, res) { 
  console.log(req.body);
  let name = req.body.name;
  let age = req.body.age;
  let duty = req.body.duty;
  let storeId = req.body.storeId;
  let username = req.body.username;
  let password = req.body.password;
  let startedOn = req.body.startedOn;
  // res.send("tcheck postrequest");

  repos.addEmployee({storeId, name, age, duty, username, password, startedOn}, rows => res.json(rows))
});


module.exports = router;