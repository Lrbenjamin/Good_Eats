import React, { useEffect } from 'react';
import Rellax from 'rellax';

const Home = () => {
    useEffect(() => {
        const rellax = new Rellax('.rellax');

        return () => {
            rellax.destroy(); // Clean up Rellax instance when component unmounts
        };
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return ( <main className="background relative">
        <section id="home" className="relative flex min-h-screen items-center">
            <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"></div>
            <img src="../../../../public/images/background.jpg" className="fixed inset-0 h-full w-full object-cover" alt="Restaurant Aesthetic" width="4160" height="6240" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0">
                <div className="pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12">
                    <h1 data-rellax-speed="-3" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight">Local Restuarants</h1>
                </div>
                <div>
                    <div className="ml-auto md:w-2/3 md:pt-12 lg:w-1/2">
                        <p className="mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal"> Welcome to Good Eats! Discover and support the best local dining spots in your area. Our platform showcases hidden gems and beloved favorites, allowing you to explore, review, and share your experiences with fellow food enthusiasts. Dive in and help others find their next favorite meal!</p>
                        <a data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" href="#services" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                            <span className="relative">How To</span>
                        </a>
                    </div>
                </div>
                <div data-rellax-speed="-5" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16">
                    <span className="text-xs font-light uppercase tracking-widest text-white">Follow us</span>
                    <ul className="relative z-20 mt-4 space-y-2 text-sm font-light text-white">
                        <li>
                            <a href="https://github.com/Lrbenjamin/Good_Eats" target="_blank">001 ------ Github</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">002 ------ LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="services" className="relative bg-black pb-20 pt-32 md:pb-0 lg:pb-0 xl:pt-96">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                <div className="flex flex-wrap items-center gap-6">
                    <h2 className="text-7xl font-bold text-white xl:text-8xl">How To</h2>
                    <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">3 Steps</span>
                    <a href="#work" className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                        <span className="relative">Get Started</span>
                    </a>
                </div>
                <div className="mt-24">
                    <div className="">
                        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
                            <div>
                                <div className="group border-b border-white/30 pb-8">
                                    <div className="flex flex-col gap-4 divide-y divide-white/30">
                                        <span className="inline-block text-white/60">001</span>
                                        <h3 className="bg-black pt-6 text-3xl text-white">Search Local</h3>
                                    </div>
                                    <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Enter your ZIP code and desired distance to check out local restaurants.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group border-b border-white/30 pb-8">
                                    <div className="flex flex-col gap-4 divide-y divide-white/30">
                                        <span className="inline-block text-white/60">002</span>
                                        <h3 className="bg-black pt-6 text-3xl text-white">View Reviews </h3>
                                    </div>
                                    <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Click on a restaurant to check out the store information, reviews, or add your own review.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group border-b border-white/30 pb-8">
                                    <div className="flex flex-col gap-4 divide-y divide-white/30">
                                        <span className="inline-block text-white/60">003</span>
                                        <h3 className="bg-black pt-6 text-3xl text-white">Visit Your Profile</h3>
                                    </div>
                                    <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Visit the profile page to view/manage your reviews, or add your own Restaurant to the site.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="work" className=" relative z-10 bg-black pb-20 lg:pt-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0">
                <div data-rellax-speed="-3" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax flex flex-wrap items-center gap-6">
                    <h2 className="text-7xl font-bold text-white xl:text-8xl">Near You</h2>
                    <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white mr-0">4 Restaurants</span>
                </div>
            </div>

            <div className="z-200 mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0 mt-8">
                <form action="" className="space-y-8 md:w-1/2 md:mr-0 md:ml-auto">
                    <div>
                        <label htmlFor="zipcode" className="tracking-wide text-white">Zipcode</label>
                        <input type="text" id="zipcode" name="zipcode" placeholder="Enter your zipcode" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="distance" className="tracking-wide text-white">Distance</label>
                        <input type="text" id="distance" name="distance" placeholder="Enter distance" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
                    </div>
                    <button type="submit" className="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary">
                        <span className="relative uppercase tracking-wide text-black group-hover:text-white">Search Local</span>
                    </button>
                </form>
            </div>
            <div className="relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-72 lg:mt-60">
                <a href="https://github.com/fairybones/Project2-DreamThreads" data-rellax-speed="-2" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" className="rellax group col-span-2 lg:col-span-1">
                    <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                        <img className="transition duration-500" src="../../../../public/images/planetpizza.jpg" alt="gild cover" width="2000" height="1333" />
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <h3 className="text-2xl font-normal text-white">Pizza Planet</h3>
                        <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">4.3</span>
                    </div>
                </a>
                <a href="https://github.com/Rinovi/Trending-Titles" data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" className="rellax group block">
                    <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                        <img className="transition duration-500" src="../../../../public/images/bk.jpg" alt="project description" width="1380" height="920" />
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <h3 className="text-2xl font-normal text-white">Kurger Bing</h3>
                        <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">4.0</span>
                    </div>
                </a>
                <a href="" data-rellax-speed="-2" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" className="rellax group block">
                    <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                        <img className="transition duration-500" src="../../../../public/images/mcD.jpg" alt="project description" width="826" height="826" />
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <h3 className="text-2xl font-normal text-white">MacDaniels</h3>
                        <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">4.6</span>
                    </div>
                </a>
                <a href="https://github.com/Rinovi/Weather-Dashboard" data-rellax-speed="0" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" className="rellax group col-span-2 block lg:col-span-1">
                    <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                        <img className="transition duration-500" src="../../../../public/images/CC.webp" alt="project description" width="1380" height="1380" />
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <h3 className="text-2xl font-normal text-white">Chicken's Church</h3>
                        <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">3.7</span>
                    </div>
                </a>
            </div>
        </section>
        <footer className="padding-top: 4000px; relative bg-black pt-32 backdrop-opacity-0">
    <section id="about" className="relative z-10 bg-black pb-20 pt-32 md:pb-0 md:pt-0 lg:pb-0">
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="text-7xl font-bold text-white xl:text-8xl">About Us</h2>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="../../../../public/images/caleb.png" alt="Caleb Png"></img>
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Caleb Warford</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Front End Designer</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Likes anime or something idk man cool description though.</p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="../../../../public/images/logan.jpg" alt="Logan Png"></img>
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Logan Benjamin</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Chuck Norris Enthusiast</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Was saved by chuck norris from a burning building as a child</p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Damien Png"></img>
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Damien Mendoza</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Man I really hope I don't spell someones name wrong</p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="../../../../public/images/annie.png" alt="Annie Png"></img>
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Annie Schalnat</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Marketing & Sale</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Running out of things to type. Oh well man, it is what it is</p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0">
        <div className="mt-12 md:mt-16 lg:mt-24">
            <div className="space-y-8 md:space-y-12">
                <nav>
                    <ul className="flex flex-wrap gap-6 text-sm uppercase tracking-wider text-white">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#services">How To</a>
                        </li>
                        <li>
                            <a href="#work">Near You</a>
                        </li>
                        <li>
                            <a className="block w-max" href="#about">About Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</footer>
    </main>
    
    );   
};


export default Home



