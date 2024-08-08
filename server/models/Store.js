const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Define the Store schema
const StoreSchema = new Schema({
    name: { type: String, required: true },
    zipcode: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{5}(?:[-\s]\d{4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid zipcode, please try again.`
        }
    },
    website: { type: String },
    address: { type: String },
    contact: { type: String },
});

// Create the Store model
const Store = model('Store', StoreSchema);

// Export the Store model
module.exports = Store;
