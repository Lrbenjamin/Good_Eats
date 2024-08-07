const db = require ('../config/connection');
// const  Store = require('../models/Store');
const Profile = require('../models/Profile')
const profileSeeds = require('./profileSeeds.json')
// const storeSeeds = require('./storeSeeds.json');

db.once('open', async () => {
    try {
        for (const profile of profileSeeds) {
            const existingProfile = await Profile.findOne({ email: profile.email });
            if (!existingProfile) {
                await Profile.create(profile);
                console.log(`Inserted profile: ${profile.email}`);
            } else {
                console.log(`Profile with email ${profile.email} already exists.`);
            }
        }
        // await Store.insertMany(storeSeeds);
        console.log('Seeded profiles successfully!');
    } catch (err) {
        console.error('Error seeding profiles:', err);
        process.exit(1);
    }

    process.exit(0);
});