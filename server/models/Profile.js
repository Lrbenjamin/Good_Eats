const { Schema, model } = require('mongoose');
// encrypt password before saving to db
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 13,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    // must be 8(+) char, including at least 1 letter & 1 number
    password: {
        type: String,
        required: true,
        unique: true,
        match: [new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"),
            'Password must include letters, number(s) and be at least 8 characters'
        ],
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
    // we want createdAt
}, { timestamps: true });

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// use bcrypt to compare input with hash
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// export user as model
const User = model('User', userSchema);

module.exports = User;

// bcrypt handles password security
// jwt will provide proof of loggedIn state