const db = require ('../config/connection');
const  Store = require('../models/Store');
const Profile = require('../models/Profile');
// const Review = require('../models/Review');

const storeSeeds = require('./storeSeeds.json');
const profileSeeds = require('./profileSeeds.json')
// const reviewSeeds = require('./reviewSeeds.json');

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
        console.log('Seeded profiles successfully!');

        for (const store of storeSeeds) {
            const existingStore = await Store.findOne({ name: store.name });
            if (!existingStore) {
                await Store.create(store);
                console.log(`Inserted store: ${store.name}`);
            } else {
                console.log(`Store with the name ${store.name} already exists.`);
            }
        }
        console.log('Seeded stores successfully!')

        // for (const review of reviewSeeds ) {
        //     await Review.create(review);
        //     console.log(`Seeded review with a rating of ${review.rating} for the user ${review.username} `)
        // }

    } catch (error) {
        console.error('Error seeding profiles:', error);
        process.exit(1);
    }

    process.exit(0);
});