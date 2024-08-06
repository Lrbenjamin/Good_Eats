const { Schema, model, Types } = require('mongoose');

// contact info for business reviewed
const businessSchema = new Schema({
    businessId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
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
    // phone number ?
});

// initialize model & export
const Business = model('Business', businessSchema);
module.exports = Business;

// https://mongoosejs.com/docs/geojson.html