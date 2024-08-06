const db = require('../config/connection');
const  Store = require('../models/Store');
const storeSeeds = require('./storeSeeds.json')

db.once('open', async () => {
    try {
        await Store.insertMany(storeSeeds);
        console.log('Seeded stores successfully!');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    process.exit(0);
});