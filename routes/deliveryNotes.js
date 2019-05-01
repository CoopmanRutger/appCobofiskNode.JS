var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    repos.getDeliveryNotes(rows => res.json(rows))
  });

 //  bestelbon
router.get('/:id', function (req, res) { 
    console.log(req.params.id);
  repos.getDeliveryNotesById(rows => res.json(rows), req.params.id)
});

// producten per bestelbonnen
router.get('/:id/products', function (req, res) {
    repos.getProductsByDeliveryNoteId(rows => res.json(rows), req.params.id)
  });

module.exports = router;
