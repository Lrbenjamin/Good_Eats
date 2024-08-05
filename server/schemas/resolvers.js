const { User, Review, Business } = require('../models');
// set up JWT for login authentication
const { signToken, AuthenticationError } = require('../utils/Auth');

const resolvers = {
    Query: {
        // include business contact info
        reviews: async () => {
            return Review.find().populate('business');
        },
        review: async (parent, { reviewId }) => {
            return Review.findOne({ _id: reviewId }).populate('business');
        },
        businesses: async () => {
            return Business.find();
        },
        business: async (parent, { businessId }) => {
            return Business.findOne({ _id: businessId })
        },
        // include all user reviews
        users: async () => {
            return User.find().populate('reviews');
        },
        userProfile: async (parent, { username }) => {
            return User.find().populate('reviews');
        },
        // include business info with reviews
        reviewsByUser: async (parent, { username }) => {
            return User.find({ username }).populate('business');
        },
        // only include reviews matching zipcode given
        reviewsByZipcode: async (parent, { zipcode }) => {
            return Review.find().populate({
                path: 'business',
                match: { zipcode: zipcode },
            });
        },
    },
    Mutation: {
        addReview: async (parent, { username, rating, businessId, text }) => {
            const review = await Review.create({ 
                username, rating, business: businessId, text });
                // link to user profile
            await User.findOneAndUpdate(
                { username: username },
                { $addToSet: { reviews: review._id }}
            );
        },
        addComment: async (parent, { reviewId, username, commentText}) => {
            return Review.findOneAndUpdate({ _id: reviewId },
                { $addToSet: { comments: { username, commentText }}},
                { new: true },
            );
        },
        addBusiness: async (parent, { name, zipcode, website }) => {
            return Business.create({ name, zipcode, website });
        },
        addUser: async (parent, { username, firstName, email, password }) => {
            const user = await User.create({ username, firstName, email, password })
            const token = signToken(user);
            // return user with jwt token for easy auth
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            // find user by provided email (unique!)
            const user = await User.findOne({ email });
            // check that user exists in db
            if (!user) {
                throw AuthenticationError('No email found, sign up now!');
            }
            // if exists, run isCorrectPassword method
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Your password is incorrect.');
            }
            // if email & password check out, sign in with a jwt
            const token = signToken(user);
            // return Auth object with token & user info
            return { token, user };
        },
        deleteReview: async (parent, { reviewId }) => {
            return Review.findOneAndDelete({ _id: reviewId });
        },
        deleteComment: async (parent, { reviewId, commentId }) => {
            return Review.findOneAndUpdate({ _id: reviewId },
                { $pull: {comments: {_id: commentId }}},
                { new: true },
            );
        },
        deleteUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
        deleteBusiness: async (parent, { businessId }) => {
            return Business.findOneAndDelete({ _id: businessId });
        },
    },
};

module.exports = resolvers; 