var express = require('express');
var router = express.Router();
let upload = require('../config/multer.config.js');
const fileWorker = require('../controllers/file.controller.js');
const itemWorker = require('../controllers/queries.js');


/* items */

router.get('/api/item/:key', itemWorker.getItem);
router.post('/api/item', itemWorker.createItem);
router.put('/api/item/:id', itemWorker.updateItem);
router.delete('/api/item/:id', itemWorker.removeItem);

/* files */

router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);
router.get('/api/file/info', fileWorker.listAllFiles);
router.get('/api/file/:id', fileWorker.downloadFile);
 

module.exports = router;