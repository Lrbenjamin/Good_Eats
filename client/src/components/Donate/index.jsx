import React, { useEffect } from 'react';
import Rellax from 'rellax';

const Donate = () => {
    useEffect(() => {
        const rellax = new Rellax('.rellax');

        return () => {
            rellax.destroy(); // Clean up Rellax instance when component unmounts
        };
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return ( <main className="relative overflow-hidden">
    <section id="introduction" className="relative top-0 z-10 bg-black pb-20 pt-20 md:sticky">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
            <div className="flex">
                <div className="w-full">
                    <div data-rellax-speed="-2" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax flex flex-wrap items-center gap-6">
                        <h2 className="text-7xl font-bold text-white xl:text-8xl">Why Donate</h2>
                        <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">01</span>
                    </div>
                    <div className="mt-12 ml-auto text-lg font-light text-white sm:text-2xl md:w-2/3 lg:mt-0 lg:w-1/2 xl:leading-normal">
                        <p>Donate to Good Eats to support local restaurants and foster vibrant communities! Your contribution helps us showcase and elevate unique dining experiences, driving more customers to local eateries and ensuring their success.</p>
                        <p className="mt-12">By giving, you're not only helping businesses thrive, but also enriching your community with diverse and delicious food options.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="overview" className="relative z-10 bg-black pb-20 lg:pt-20">
        <div className="xl:px-6">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
                <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                    <img className="transition duration-500" src="../../../../public/images/restaurant1.webp" alt="Restaurant Owners" width="1380" height="1380" />
                </div>
                <div data-rellax-speed="-2" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                    <img className="h-full w-full object-cover transition duration-500" src="../../../../public/images/restaurant2.webp" alt="Restaurant 50th Anniversary" width="2000" height="1333" />
                </div>
            </div>
        </div>
    </section>
    <section id="approach" className="relative z-10 bg-black pb-20 pt-20 md:sticky md:top-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
            <div className="flex">
                <div className="w-full">
                    <div className="flex flex-wrap items-center gap-6">
                        <h2 className="text-7xl font-bold text-white xl:text-8xl">Our approach</h2>
                        <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">02</span>
                    </div>
                    <div className="mt-24 ml-auto text-lg font-light text-white sm:text-2xl md:w-2/3 lg:w-1/2 xl:leading-normal">
                        <p>At Good Eats, we’re committed to uplifting local businesses by dedicating 50% of our proceeds to their support. Our approach ensures that your contributions directly benefit the restaurants we promote, helping them thrive and enriching our community’s dining experience.</p>
                        <p className="mt-12"> Join us in making a tangible impact where it matters most!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="overview" className="relative z-10 bg-black pb-20 lg:pt-20">
        <div className="xl:px-6">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
                <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                    <img className="transition duration-500" src="../../../../public/images/restaurant3.jpg" alt="Father Daughter" width="1380" height="1380" />
                </div>
                <div data-rellax-speed="-2" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                    <img className="h-full w-full object-cover transition duration-500" src="../../../../public/images/restaurant4.jpg" alt="Husband Wife" width="2000" height="1333" />
                </div>
            </div>
        </div>
    </section>
    <section id="approach" className="relative z-10 bg-black md:sticky md:top-12">
        <a href="/pages/project.html" className="block bg-gradient-to-b from-transparent to-white/10 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                <div className="flex">
                    <div className="w-full">
                        <span className="mx-auto block h-max w-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">Click Here</span>
                        <h2 className="text-center text-7xl font-bold text-white xl:text-8xl">Donate Now</h2>
                    </div>
                </div>
            </div>
        </a>
        {/* <script type="module" src="./main.js"></script> */}
<script src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js"></script>
    </section>
</main>

);
};
export default Donate