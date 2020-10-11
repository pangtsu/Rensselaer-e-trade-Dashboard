var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);

// postgres connection string
var connectionString = 'postgres://localhost:5433/item';
var db = pgp(connectionString);


function getSingleItem(req, res, next) {
    var itemID = parseInt(req.params.id);
    db.one('select * from items where id = $1', itemID)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE item'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createItem(req, res, next) {
    req.body.price = parseInt(req.body.price);
    db.none('insert into items(itemName, price, category)' +
            'values(${itemName}, ${price}, ${category})',
            req.body)
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
    getSingleItem: getSingleItem,
    createItem: createItem,
    updateItem: updateItem,
    removeItem: removeItem
};