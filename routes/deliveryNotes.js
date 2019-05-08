var express = require('express');
var repos = require('../MySqlRepo');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    repos.getDeliveryNotes(rows => res.json(rows))
  });

 //  bestelbon
router.get('/:id', function (req, res) { 
  repos.getDeliveryNotesById(req.params.id, rows => res.json(rows[0]))
});

// producten per bestelbonnen
router.get('/:id/products', function (req, res) {
    repos.getProductsByDeliveryNoteId(req.params.id, rows => res.json(rows))
  });

module.exports = router;        
