var express = require('express');
var router = express.Router();
let upload = require('../config/multer.config.js');
const fileWorker = require('../controllers/file.controller.js');
let path = __basedir + '/views/';

var db = require('../queries');
/* GET home page. */

router.get('/api/item/:key', db.getItem);
router.post('/api/item', db.createItem);
router.put('/api/item/:id', db.updateItem);
router.delete('/api/item/:id', db.removeItem);

router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);
router.post('/api/file/multiple/upload', upload.array('files', 4), fileWorker.uploadMultipleFiles); 
router.get('/api/file/:id', fileWorker.downloadFile);
 

module.exports = router;