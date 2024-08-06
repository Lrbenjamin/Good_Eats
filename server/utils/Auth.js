const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'soosupersecret';
const expiration = '3h';

module.exports = {
    AuthenticationError: new GraphQLError('Oop! Cannot authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};