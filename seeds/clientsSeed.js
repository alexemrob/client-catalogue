let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/clients", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let clientsSeed = [
    {
        info: {
            name: "Ali Rob",
            contact: {
                phone: "(810)399-3812",
                email: "alexemrob@gmail.com",
            },
            referBy: "Phuong Nguyen",
            notes: "oxidative color even w/ 10vol down bumps base - only use shadesEQ",
        }
    
    }]

    db.Clients.deleteMany({})
    .then(() => db.Clients.collection.insertMany(clientsSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });