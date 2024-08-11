import React, { useState } from 'react';
import Review from '../Review';
import StoreInfo from '../storeInfo';
import { useQuery, useMutation } from '@apollo/client';
import { GET_STORE } from '../../utils/queries';
import { useParams } from 'react-router';
import { EDIT_REVIEW } from '../../utils/mutations';
import Auth from "../../utils/auth"

function StoreEdit() {
    const params = useParams();
    const [rating, setRating] = useState('');
    const [text, setText] = useState('');

    const { loading, error, data } = useQuery(GET_STORE, {
        variables: { storeId: params.storeId },
        onCompleted: (data) => {
            console.log(data)
            setRating(data.getStore.reviews.filter(review => {
                return review._id == params.reviewId
            })[0].rating)

            setText(data.getStore.reviews.filter(review => {
                return review._id == params.reviewId
            })[0].text)
        }
    });
    const [editReview] = useMutation(EDIT_REVIEW);
    const storeData = data?.getStore;
    // const [rating, setRating] = useState(storeData.reviews.filter(review => {
    //     return review._id == params.reviewId
    // })[0].rating);

    async function submitReview(event) {
        event.preventDefault();

        try {
            await editReview({
                variables: {
                    reviewId: params.reviewId,
                    rating: parseInt(rating, 10),
                    text
                }
            });

            alert('Review edited successfully!');


            setRating('');
            setText('');
        } catch (e) {
            console.error('Error adding review:', e);
        }
    }

    if (loading) return <h1>Still loading, please wait....</h1>;
    if (error) {
        console.error('Error loading store:', error);
        return <h1>Error loading store</h1>;
    }

    console.log('storeData:', storeData); // Log data to verify structure

    return (
        <main>
            <section className="bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                    <div className="flex flex-wrap items-center gap-6">
                        <h2 className="text-7xl font-bold text-white xl:text-8xl">{storeData.name}</h2>
                    </div>
                    <div className="mt-24">
                        <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
                            <div className="lg:col-span-2">
                                <form onSubmit={submitReview} className="mx-auto space-y-8 md:w-3/4">
                                    <div>
                                        <label htmlFor="rating" className="tracking-wide text-white">Your Rating</label>
                                        <input
                                            type="number"
                                            id="rating"
                                            name="rating"
                                            value={rating}
                                            onChange={(e) => setRating(e.target.value)}
                                            placeholder="Your rating 1-5"
                                            min="1"
                                            max="5"
                                            className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="tracking-wide text-white">Your Message (optional)</label>
                                        <textarea
                                            name="text"
                                            id="text"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            cols="30"
                                            rows="6"
                                            placeholder="Your message"
                                            className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary">
                                        <span className="relative uppercase tracking-wide text-black group-hover:text-white"> Edit Review </span>
                                    </button>
                                </form>
                            </div>
                            <StoreInfo {...storeData} key={storeData._id} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                    <div className="flex flex-wrap items-center gap-6">
                        <h2 id="storeReviews" className="text-7xl font-bold text-white xl:text-8xl">Store Reviews</h2>
                    </div>
                    <div className="mt-24">
                        <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
                            {storeData.reviews && storeData.reviews.length > 0 ? (
                                storeData.reviews.map((review) => (
                                    <Review {...review} key={review.id} />
                                ))
                            ) : (
                                <div className="text-white">No reviews available</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default StoreEdit;
