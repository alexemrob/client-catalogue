const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        var myVar = req.query.search;
        db.Clients
           .find({ name: { $regex: myVar, $options: 'i' } })
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
    add: function (req, res) {
        db.Clients
            .findOneAndUpdate({ _id: req.params.id }, {saved:true})
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
    getsaved: function (req, res) {
        db.Clients
            .find({
                saved: true
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    },
    unsave: function (req, res) {
        db.Clients
            .findOneAndUpdate({ _id: req.params.id }, {saved:false})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    }
}