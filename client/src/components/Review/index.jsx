import React from 'react'

function Review({ id, Rating, message }) {
    return (
        <div className="mt-8 border border-white/30 p-8 sm:p-12">
        <div>
            <h3 className="text-xs font-light uppercase tracking-widest text-white">User's Store Rating</h3>
            <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                <li>
                    <a href="" target="_blank">{ Rating }</a>
                </li>
            </ul>
        </div>
        <div className="mt-16">
            <h3 className="text-xs font-light uppercase tracking-widest text-white">User's Review</h3>
            <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                <li>
                    <a href="tel:+243000000000">{ message }</a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Review