/*DEPENDECIES*/
//  MongoDB object modeling tool
const mongoose = require("mongoose");

/*INITIALIZATION*/
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

/*SCHEMA*/
// Create Schema for clients
const ClientSchema = new Schema({
    idtwo: { type: String, required: true, trim: true },
    info: {
        name: { type: String, required: true, trim: true, lowercase: true },
        contact: {
            phone: { type: String, required: true, trim: true },
            email: { type: String, required: true, trim: true },
        },
        creditcard: {
            number: { type: Number, required: true, trim: true },
            exp: { type: String, required: true, trim: true },
            cvc: { type: Number, required: true, trim: true },
        },
        referBy: { type: String, required: false, trim: true },
        notes: { type: String, required: false, trim: true },
    }
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
}
);

// Create Virtuals for ClientSchema


/*EXPORTS*/
module.exports = mongoose.model("Clients", ClientSchema);