function Store() {
    return <main>    <section className=" bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0">

        <header className="fixed top-0 z-20 w-full">
            <nav className="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
                <div className="flex items-center justify-end">
                    <div className="flex">
                        <a href="/" className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                            <span className="relative">Home</span>
                        </a>
                        <a href="/profile/:profileId" className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                            <span className="relative">Profile</span>
                        </a>
                        <a href="/donate" className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                            <span className="relative">Donate</span>
                        </a>
                        <a href="/login" className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                            <span className="relative">Sign Out</span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
            <div className="flex flex-wrap items-center gap-6">
                <h2 className="text-7xl font-bold text-white xl:text-8xl">Store Name</h2>
            </div>
            <div className="mt-24">
                <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
                    <div className="lg:col-span-2">
                        <form action="" className="mx-auto space-y-8 md:w-3/4">
                            <div>
                                <label htmlFor="email" className="tracking-wide text-white">Your Rating</label>
                                <input type="email" id="email" name="email" placeholder="Your rating 1-5" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="tracking-wide text-white">Your Message (optional)</label>
                                <textarea name="message" id="message" cols="30" rows="6" placeholder="Your message" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"></textarea>
                            </div>
                            <button type="submit" className="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary">
                                <span className="relative uppercase tracking-wide text-black group-hover:text-white"> Post Review </span>
                            </button>
                        </form>
                    </div>
                    <div className="mt-8 border border-white/30 p-8 sm:p-12">
                        <div>
                            <h3 className="text-xs font-light uppercase tracking-widest text-white">Store Address</h3>
                            <p className="mt-4 text-white">625 W. McKellips Rd. Mesa, AZ</p>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-xs font-light uppercase tracking-widest text-white">Contact Info</h3>
                            <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                                <li>
                                    <a href="tel:+243000000000">Phone ------ 480-586-1525</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-xs font-light uppercase tracking-widest text-white">Store Rating</h3>
                            <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                                <li>
                                    <a href="" target="_blank">4.5</a>
                                </li>
                            </ul>
                            <a data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" href="#storeReviews" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                                <span className="relative">See Reviews</span>
                            </a>
                        </div>
                    </div>
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
                        <div className="mt-8 border border-white/30 p-8 sm:p-12">
                            <div>
                                <h3 className="text-xs font-light uppercase tracking-widest text-white">User's Store Rating</h3>
                                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                                    <li>
                                        <a href="" target="_blank">4</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-16">
                                <h3 className="text-xs font-light uppercase tracking-widest text-white">User's Review</h3>
                                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                                    <li>
                                        <a href="tel:+243000000000">Pizza is literally so bomb brotein shake. I love some pizza after a nice creatine and whey powder lunch</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 border border-white/30 p-8 sm:p-12">
                            <div>
                                <h3 className="text-xs font-light uppercase tracking-widest text-white">User's Store Rating</h3>
                                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                                    <li>
                                        <a href="" target="_blank">3</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-16">
                                <h3 className="text-xs font-light uppercase tracking-widest text-white">User's Review</h3>
                                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                                    <li>
                                        <a href="tel:+243000000000">Pizza is literally so bomb brotein shake. I love some pizza after a nice creatine and whey powder lunch</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </main>
}
export default Store