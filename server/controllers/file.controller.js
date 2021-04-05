var stream = require('stream');

const db = require('../config/db.config.js');
const File = db.files;

// returns the id of the photo after uploaded
exports.uploadFile = (req, res) => {
	File.create({
		type: req.file.mimetype,
		name: req.file.originalname,
		data: req.file.buffer
	}).then((value) => {
		res.json({msg: value.dataValues.id});
		console.log(value);
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}

exports.listAllFiles = (req, res) => {
	File.findAll({attributes: ['id', 'name']}).then(files => {
	  res.json(files);
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}

exports.downloadFile = (req, res) => {
	File.findById(req.params.id).then(file => {
		//var fileContents = Buffer.from(file.data, "base64");
		//var readStream = new stream.PassThrough();
		//readStream.end(fileContents);
		res.set('Content-disposition', 'attachment; filename=' + file.name);
		res.set('Content-Type', file.type);
		res.status(200)
		.json({
			status: 'success',
			data: new Buffer(file.data).toString('base64'),
			message: 'Downloaded item'
		});
		//readStream.pipe(res);
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}