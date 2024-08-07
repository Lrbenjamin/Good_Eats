const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema, model } = mongoose;

// Define the user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        match: [
            new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"),
            "Password must include letters, number(s) and be at least 8 characters",
        ],
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
}, { timestamps: true });

// Set up pre-save middleware to hash password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// Use bcrypt to compare input with hash
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Create and export the User model
const User = model('User', userSchema);

module.exports = User; // Use CommonJS export

