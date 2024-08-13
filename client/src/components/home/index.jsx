// The main page of the website which displays an array of AZ restaurants
import React, { Suspense, lazy } from 'react';
const Restaurant = lazy(() => import('../Restaurant/index'));
import { GET_ALL_STORES } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function Home() {
    // Query for loading all stores in the MongoDB onto the page
    const { loading, error, data } = useQuery(GET_ALL_STORES, {
        fetchPolicy: 'cache-and-network', // Allows for cached data with a network request
    });

    if (loading) {
        return <div>Loading stores...</div>;
    }

    if (error) {
        console.error('Error fetching stores:', error);
        return <div>Error loading stores. Please try again later.</div>;
    }

    const storesData = data?.getAllStores || [];
    return (<main className="background relative">
        {/* Good Eats logo with border animation */}
        <div className="fixed top-0 left-0 w-full z-10 bg-transparent">
            <div className="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
                <div className="flex items-center justify-between">
                    <div className="relative border-[--ui-light-border-color] border-[length:var(--border-width)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:179] [--lightness:55%] dark:[--lightness:14%] [--opacity:1] [--radius:24] [--saturation:78%] dark:[--saturation:97%] [--speed:2]">
                        <div>
                            <p className="text-2xl tracking-widest text-white">Good Eats</p>
                        </div>
                        <span className="glow absolute inset-[calc(var(--border-width)*-1)] rounded-[--card-border-radius] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]">
                            <span className="absolute inline-block aspect-square h-5 bg-[radial-gradient(circle_at_right,hsl(0_0%_0%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_3s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]"></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <section id="home" className="relative flex min-h-screen items-center">
            <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"></div>
            {/* Background image */}
            <img src="../../../../images/background.jpg" className="fixed inset-0 h-full w-full object-cover" alt="Restaurant Aesthetic" width="4160" height="6240" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0">
                <div className="pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12">
                    <h1 data-rellax-speed="-3" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight">AZ Restuarants</h1>
                </div>
                <div>
                    {/* Brief Description of website and "How To" href */}
                    <div className="ml-auto md:w-2/3 md:pt-12 lg:w-1/2">
                        <p className="mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal"> Welcome to Good Eats! Discover and support the best local dining spots in AZ. Our platform showcases hidden gems and beloved favorites, allowing you to explore, review, and share your experiences with fellow food enthusiasts. Dive in and help others find their next favorite meal!</p>
                        <a data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" href="#services" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                            <span className="relative">How To</span>
                        </a>
                    </div>
                </div>
                {/* Follow us here section */}
                <div data-rellax-speed="-5" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16">
                    <span className="text-xs font-light uppercase tracking-widest text-white">Follow us</span>
                    <ul className="relative z-20 mt-4 space-y-2 text-sm font-light text-white">
                        <li>
                            <a href="https://github.com/Lrbenjamin/Good_Eats" target="_blank">001 ------ Github</a>
                        </li>
                        <li>
                            <a id="services" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">002 ------ LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="relative bg-black pb-20 pt-16 md:pb-0 lg:pb-0 xl:pt-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                <div className="flex flex-wrap items-center gap-6">
                    {/* Component explaining what the user can do on the website */}
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
                                        <h3 className="bg-black pt-6 text-3xl text-white">View Restaurants</h3>
                                    </div>
                                    <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Check out our list of local restaurants in AZ.</p>
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
        <section className="relative z-9 bg-black pb-20 lg:pt-0">
            {/* Component that will map over Restaurants and return a list of our seeded restaurants */}
            <div id="work" className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-40 2xl:px-0 " > </div>
            <div className="z-200 mx-auto max-w-7xl px-6 lg:px-12  2xl:px-0 mt-8">
                <div data-rellax-speed="-3" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax flex flex-wrap items-center gap-6" style={{ width: "fit-content" }}>
                    <h2 className="text-7xl font-bold text-white xl:text-8xl">Near You</h2>
                </div>
            </div>
            <div className="relative gap-20 gap-x-6 space-y-10 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-72 lg:mt-5">
                <Suspense fallback={<div>Loading...</div>}>
                    {storesData.map(item => (
                        <Restaurant {...item} key={item.id} />
                    ))}
                </Suspense>
            </div>
        </section>

        <footer className="padding-top: 4000px; relative bg-black pt-32 backdrop-opacity-0">
            <section id="about" className="relative z-10 bg-black pb-20 pt-32 md:pb-0 md:pt-0 lg:pb-0">
                <section>
                    {/* Meet our team section */}
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <h2 className="text-7xl font-bold text-white xl:text-8xl">Our Team</h2>
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="../../../images/caleb.png" alt="Caleb.png" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                        <p className="mb-1 text-lg font-bold text-gray-100">Caleb Warford</p>
                                        <p className="mb-4 text-xs text-gray-100">Web Developer</p>
                                        <p className="mb-4 text-xs tracking-wide text-gray-400">
                                            Vincent Van Gogh’s most popular painting, The Starry Night.
                                        </p>
                                        <div className="flex items-center justify-center space-x-3">
                                            <a href="https://github.com/Rinovi" className="text-gray-300 hover:text-white dark:hover:text-white">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="../../../images/logan.jpg" alt="Logan.jpg" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                        <p className="mb-1 text-lg font-bold text-gray-100">Logan Benjamin</p>
                                        <p className="mb-4 text-xs text-gray-100">Web Developer</p>
                                        <p className="mb-4 text-xs tracking-wide text-gray-400">
                                            Chuck Norris saved me from a burning building as a child.
                                        </p>
                                        <div className="flex items-center justify-center space-x-3">
                                            <a href="https://github.com/Lrbenjamin" className="text-gray-300 hover:text-white dark:hover:text-white">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="../../../images/annie.png" alt="Annie" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                        <p className="mb-1 text-lg font-bold text-gray-100">Annie Schalnat</p>
                                        <p className="mb-4 text-xs text-gray-100">Web Developer</p>
                                        <p className="mb-4 text-xs tracking-wide text-gray-400">
                                            Apple pie macaroon toffee jujubes pie tart cookie caramels.
                                        </p>
                                        <div className="flex items-center justify-center space-x-3">
                                            <a href="https://github.com/fairybones" className="text-gray-300 hover:text-white dark:hover:text-white">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="../../../images/damien.png" alt="Damien.jpg" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                        <p className="mb-1 text-lg font-bold text-gray-100">Damien Mendoza</p>
                                        <p className="mb-4 text-xs text-gray-100">Web Developer</p>
                                        <p className="mb-4 text-xs tracking-wide text-gray-400">
                                            Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.
                                        </p>
                                        <div className="flex items-center justify-center space-x-3">
                                            <a href="https://github.com/DMendoza013" className="text-gray-300 hover:text-white dark:hover:text-white">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0">
                <div className="mt-12 md:mt-16 lg:mt-24">
                    <div className="space-y-8 md:space-y-12">
                        {/* Links to navigate to different elements on the /home page */}
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



