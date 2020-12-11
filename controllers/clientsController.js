const db = require("../models");

// methods for clientsController
module.exports = {
    findAll: function (req, res) {
        // //console.log(req.query)
        // const search = `/${req.query.search}/i`
        // // const { query: params } = req;
        // console.log(search)

        db.Clients
            .find({ name: req.query.search })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    },
    findById: function (req, res) {
        db.Clients
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    },
    create: function (req, res) {
        db.Clients
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    },
    update: function (req, res) {
        db.Clients
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    },
    remove: function (req, res) {
        db.Clients
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    }
};