let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/clients", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let clientsSeed = [
  {
    name: "First Last",
    phone: "555-555-5555",
    email: "email@gmail.com",
    referBy: "instagram",
    notes: "notes about client go here",
    insta: "ali_atthesalon"
  },
  {
    name: "Undefined",
    phone: "555-555-5355",
    email: "gmail@gmail.com",
    referBy: "sally hansen",
    notes: "notes about client go here",
    insta: ""
  },
  {
    name: "Jane Doe",
    phone: "111-555-5555",
    email: "janesemail@gmail.com",
    referBy: "ali",
    notes: "notes about client go here",
    insta: "ig handle here"
  }
]

db.Clients
  .remove({})
  .then(() => db.Clients.collection.insertMany(clientsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });