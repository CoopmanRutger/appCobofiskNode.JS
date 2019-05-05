var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  repos.getEmployees(rows => res.json(rows))
});

// todo : post werknemer toevoegen!
router.post('/add', function (req, res) { 
  console.log("post");
  console.log(req.body);
  let name = req.body.name;
  let age = req.body.age;
  let job = req.body.job;
  let storeId = req.body.storeId;
  let username = req.body.username;
  let password = req.body.password;
  res.end("yes");

  console.log(name, age, job, storeId, username, password);

repos.addEmployee({storeId, name, age, job, username, password}, rows => res.json(rows))
});



module.exports = router;
