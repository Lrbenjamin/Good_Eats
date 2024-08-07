const { Schema, model } = require('mongoose');

// contact info for business reviewed
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

const Store = model('Store', StoreSchema);
module.exports = Store;

// https://mongoosejs.com/docs/geojson.html