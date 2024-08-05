function Profile() {
    return <section id="contact" className="relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0">
        <header className="fixed top-0 z-20 w-full">
    <nav className="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
            <div className="flex items-center justify-between">
            <div
                class="border-[--ui-light-border-color] relative border-[length:var(--border-width)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:179] [--lightness:55%] dark:[--lightness:14%] [--opacity:1] [--radius:24] [--saturation:78%] dark:[--saturation:97%] [--speed:2]">
                <div>
                    <p class="text-2xl tracking-widest text-white">Good Eats</p>
                </div>
                <span
                    class="glow absolute inset-[calc(var(--border-width)*-1)] rounded-[--card-border-radius] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]">
                    <span
                        class="absolute inline-block aspect-square h-5 bg-[radial-gradient(circle_at_right,hsl(0_0%_0%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_3s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]"></span>
                </span>
            </div>
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
                <h2 className="text-7xl font-bold text-white xl:text-8xl">Store Information</h2>
            </div>
            <div className="mt-24">
                <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
                    <div className="lg:col-span-2">
                        <form action="" className="mx-auto space-y-8 md:w-3/4">
                            <div>
                                <label htmlFor="email" className="tracking-wide text-white">Your Rating</label>
                                <input type="email" id="email" name="email" placeholder="Your mail address" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
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
                                    <a href="https://github.com/Rinovi" target="_blank">4.5</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Profile