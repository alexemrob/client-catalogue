/*DEPENDECIES*/
//  MongoDB object modeling tool
const mongoose = require("mongoose");

/*INITIALIZATION*/
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

/*SCHEMA*/
// Create Schema for clients
const ClientSchema = new Schema({
    _id: { type: String },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    referBy: { type: String, required: false, trim: true },
    notes: { type: String, required: false, trim: true },
    insta: { type: String, required: false, trim: true }
});

// Create Virtuals for ClientSchema


/*EXPORTS*/
module.exports = mongoose.model("Clients", ClientSchema);