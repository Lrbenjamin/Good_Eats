import Card from './Card';
function Profile() {
    const data = [
        {
            id: 1,
            name: "Pizza Planet",
            rating: 4,
            message: "I love pizza"
        },
        {
            id: 2,
            name: "Burger King",
            rating: 5,
            message: "I love burgers"
        },
        {
            id: 3,
            name: "Pizza Planet 2",
            rating: 4,
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
        <section id="contact" className="relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                <div className="flex flex-wrap items-center gap-6">
                    <h2 className="text-7xl font-bold text-white xl:text-8xl">Your Profile</h2>
                </div>
                <div className="mt-24">
                    <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
                        <div className="lg:col-span-2">
                            <form action="" className="mx-auto space-y-8 md:w-3/4">
                                <div className="grid gap-8 sm:grid-cols-2 sm:gap-4">
                                    <div>
                                        <label htmlFor="firstname" className="tracking-wide text-white">First name</label>
                                        <input type="text" id="fistname" name="fistname" autoComplete="name" placeholder="Your first name" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastname" className="tracking-wide text-white">Last name</label>
                                        <input type="text" id="lastname" name="lastname" autoComplete="family-name" placeholder="Your last name" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="tracking-wide text-white">Mail address</label>
                                    <input type="email" id="email" name="email" placeholder="Your mail address" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="tracking-wide text-white">Your message</label>
                                    <textarea name="message" id="message" cols="30" rows="6" placeholder="Your message" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"></textarea>
                                </div>
                                <button type="submit" className="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary">
                                    <span className="relative uppercase tracking-wide text-black group-hover:text-white"> Send message </span>
                                </button>
                            </form>
                        </div>
                        <div className="mt-8 border border-white/30 p-8 sm:p-12">
                            <div>
                                <h3 className=" font-light uppercase tracking-widest text-white">To add your own local restaurant, please complete this form and include it's name, address, phone number, and an image link. To manage your reviews, scroll down to view, edit, or delete them.</h3>
                                <a data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" href="#storeReviews" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                                    <span className="relative">Your Reviews</span>
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
                    <h2 id="storeReviews" className="text-7xl font-bold text-white xl:text-8xl">Your Reviews</h2>
                </div>
                <div className="mt-24">
                    <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
                        {data.map(item => (
                            <Card {...item}key={item.id} />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    </main>
}
export default Profile