const mongoose = require("mongoose");
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for clients
const ClientSchema = new Schema({
    // _id: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    referBy: { type: String, required: false, trim: true },
    notes: { type: String, required: false, trim: true },
    insta: { type: String, required: false, trim: true },
    saved: {type: Boolean, default: false}
});

const Clients = mongoose.model("Clients", ClientSchema);

module.exports = Clients;