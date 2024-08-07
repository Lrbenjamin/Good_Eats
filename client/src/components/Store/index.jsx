import Review from '../Review';
// import StoreInfo from '../storeInfo';
function Store() {
    const data = [
        {
            storeId: 1,
            address: "625 W. Pizza Rd",
            zipcode: "85207",
            contact: "480-440-3213",
            rating: 4,
        },
        {
            id: 2,
            rating: 5,
            message: "I love burgers"
        },
        {
            id: 3,
            rating: 3,
            message: "I love pizza with a Z"
        },
        {
            storeId: 3,
            rating: 3,
            message: "I love pizza with a Z"
        },
    ]
    return <main>

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
        <section className=" bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0">
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
                        {/* {data.map(item => (
                            <StoreInfo {...item} key={item.id} />
                        ))} */}
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
                        {data.map(item => (
                            <Review {...item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </main>
}
export default Store