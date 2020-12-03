
// This file empties clients collection and inserts the clientsSeeds into the collection
const clientsController = require('../controllers/clientsController');
const ObjectId = require('mongoose').Types.ObjectId;

const clientsSeed = [
    {
        _id: new ObjectId('012345678901234567891000'),
        idtwo: "C00001",
        info: {
            name: "Ali Rob",
            contact: {
                phone: "(810)399-3882",
                email: "alexemrob@gmail.com",
            },
            creditcard: {
                number: 4242424242424242,
                exp: "04/24",
                cvc: 424,
            },
            referBy: "Phuong Nguyen",
            notes: "never bump her base - only use oribe",
        }
    }, {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }]

module.exports = clientsController.seed(clientsSeed)
    .then((clients) => console.log(`Successfully added ${clients.name}`))
    .catch((err) => console.log('Error running seeds'));