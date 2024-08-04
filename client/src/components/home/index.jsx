function Home() {
    return <main className="background relative">
        <section id="home" className="relative flex min-h-screen items-center">
            <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"></div>
            <img src="/src/public/images/projects/background.jpg" className="fixed inset-0 h-full w-full object-cover" alt="Restaurant Aesthetic" width="4160" height="6240" />
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
                            <a href="https://github.com/Rinovi" target="_blank">001 ------ Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/caleb-warford-30878b319/" target="_blank">002 ------ LinkedIn</a>
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
                    <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">4 Restaurants</span>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0 mt-8">
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
                        <img className="transition duration-500" src="/src/public/images/projects/planetpizza.jpg" alt="gild cover" width="2000" height="1333" />
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <h3 className="text-2xl font-normal text-white">Pizza Planet</h3>
                        <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">4.3</span>
                    </div>
                </a>
                <a href="https://github.com/Rinovi/Trending-Titles" data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" className="rellax group block">
                    <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                        <img className="transition duration-500" src="/src/public/images/projects/bk.jpg" alt="project description" width="1380" height="920" />
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <h3 className="text-2xl font-normal text-white">Kurger Bing</h3>
                        <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">4.0</span>
                    </div>
                </a>
                <a href="" data-rellax-speed="-2" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" className="rellax group block">
                    <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                        <img className="transition duration-500" src="/src/public/images/projects/mcD.jpg" alt="project description" width="826" height="826" />
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <h3 className="text-2xl font-normal text-white">MacDaniels</h3>
                        <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">4.6</span>
                    </div>
                </a>
                <a href="https://github.com/Rinovi/Weather-Dashboard" data-rellax-speed="0" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" className="rellax group col-span-2 block lg:col-span-1">
                    <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                        <img className="transition duration-500" src="/src/public/images/projects/CC.webp" alt="project description" width="1380" height="1380" />
                    </div>
                    <div className="flex items-center justify-between p-4">
                        <h3 className="text-2xl font-normal text-white">Chicken's Church</h3>
                        <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">3.7</span>
                    </div>
                </a>
            </div>
        </section>
    </main>
    
}

export default Home



