import React from 'react'

function StoreInfo({ storeId, address, zipcode, contact, rating }) {
    return (
        <div className="mt-8 border border-white/30 p-8 sm:p-12">
        <div>
            <h3 className="text-xs font-light uppercase tracking-widest text-white">Store Address</h3>
            <p className="mt-4 text-white">{ address }</p>
            <p className="mt-4 text-white">{ zipcode }</p>
        </div>
        <div className="mt-16">
            <h3 className="text-xs font-light uppercase tracking-widest text-white">Contact Info</h3>
            <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                <li>
                    <a href="tel:+243000000000">Phone ------ { contact }</a>
                </li>
            </ul>
        </div>
        <div className="mt-16">
            <h3 className="text-xs font-light uppercase tracking-widest text-white">Store Rating</h3>
            <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                <li>
                    <a href="" target="_blank">{ rating }</a>
                </li>
            </ul>
            <a data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" href="#storeReviews" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                <span className="relative">See Reviews</span>
            </a>
        </div>
    </div>
    )
}

export default StoreInfo