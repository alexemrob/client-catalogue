const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Clients
            .find({ name: req.query.search })
            .then(dbModel => {
                console.log(dbModel)
                res.json(dbModel)
            })
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    },
    findById: function (req, res) {
        db.Clients
            .findById({ _id: req.params.id })
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
    },
    updateToday: function (req, res) {
        db.Clients
            .findOneAndUpdate({ _id: req.params.id }, {
                saved: true
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    }
}