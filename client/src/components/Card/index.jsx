// Card component that will display a user's reviews on the /profile route
import React from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../../utils/mutations'
import { GET_REVIEWS_BY_USER, GET_STORE } from '../../utils/queries';

function Card({ _id, store, rating, text }) {
    const [deleteReview] = useMutation(DELETE_REVIEW, {
        refetchQueries: [GET_REVIEWS_BY_USER, GET_STORE]
    })

    return (
        <div className="mt-8 border border-white/30 px-8 sm:px-12">
            <div className="flex justify-end">
                <a data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" href={`/store/${store?._id}/editReview/${_id}`} className="mr-8 rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                    <span className="relative">Edit</span>
                </a>
                <button onClick={async () => {
                    await deleteReview({
                        variables: {
                            reviewId: _id
                        }
                    })

                }} data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                    <span className="relative">Delete</span>
                </button>
            </div>
            <div >
                <h3 className="text-xs font-light uppercase tracking-widest text-white">Store Name</h3>
                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                    <li>
                        <a href={`/store/${store?._id}`} target="_blank">{store?.name}</a>
                    </li>


                </ul>

            </div>
            <div className="mt-16">
                <h3 className="text-xs font-light uppercase tracking-widest text-white">Your Store Rating</h3>
                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                    <li>
                        <a href="tel:+243000000000">{rating}</a>
                    </li>
                </ul>
            </div>
            <div className="mt-16">
                <h3 className="text-xs font-light uppercase tracking-widest text-white">Your Message</h3>
                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                    <li>
                        <a href="tel:+243000000000">{text}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card