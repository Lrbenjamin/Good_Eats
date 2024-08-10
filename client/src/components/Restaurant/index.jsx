import React from 'react';

function Restaurant({ StoreId, name, rating, address, zipcode, phone, image, _id }) {
    return (
        <a href={`/store/${_id}`} data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" className="rellax group block">
            <div className="relative w-[835px] h-[469px] overflow-hidden before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                <img
                    className="w-full h-full object-cover transition duration-500"
                    src={image}
                    alt="project description"
                />
            </div>
            <div className="flex items-center justify-between p-4">
                <h3 className="text-2xl font-normal text-white">{name}</h3>
                <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">{rating}</span>
            </div>
        </a>
    );
}

export default Restaurant;
