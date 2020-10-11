var express = require('express');
var router = express.Router();

var db = require('../queries');
/* GET home page. */

router.get('/api/item/:id', db.getSingleItem);
router.get('/api/item', db.createItem);
router.get('/api/item/:id', db.updateItem);
router.get('/api/item/:id', db.removeItem);


module.exports = router;