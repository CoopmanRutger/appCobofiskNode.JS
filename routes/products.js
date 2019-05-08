var express = require("express");
var repos = require("../MySqlRepo");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res) {
  repos.getProducts(rows => res.json(rows));
});

router.get("/:id", function(req, res) {
  console.log(req.params.id);
repos.getProductById(req.params.id, rows => res.json(rows[0]));
});

module.exports = router;
