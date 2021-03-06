var promise = require('bluebird');
const config = require("../config.json");

var options = {
    promiseLib: promise
};
var pgp = require('pg-promise')(options);

// postgres connection string
var connectionString = config.server.pgConnection;
var db = pgp(connectionString);

function getAllItems(req, res, next) {
    db.many("select * from items")
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved alll items'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getItem(req, res, next) {
    var itemKey = req.params.key;
    console.log(itemKey);
    db.many("select * from items where itemName = $1", itemKey)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved item'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createItem(req, res, next) {
    req.body.price = parseInt(req.body.price);
    console.log(req.body.imageIDs);
    db.none('insert into items(itemName, price, category, descriptions, imageIDs)' +
            'values(${name}, ${price}, ${category}, ${descript}, ${image} )',
            {
                name: req.body.itemName, price: parseInt(req.body.price),
                category: req.body.category, descript: req.body.descriptions,
                image: req.body.imageIDs
            })
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one item'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function updateItem(req, res, next) {
    db.none('update items set itemName=$1, price=$3, category=$4 where id=$5',
            [req.body.itemName, parseInt(req.body.price),
                req.body.category, parseInt(req.params.id)
            ])
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated item'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function removeItem(req, res, next) {
    var itemID = parseInt(req.params.id);
    db.result('delete from items where id = $1', itemID)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} item`
                });
        })
        .catch(function (err) {
            return next(err);
        });
}


module.exports = {
    getAllItems:getAllItems,
    getItem: getItem,
    createItem: createItem,
    updateItem: updateItem,
    removeItem: removeItem
};