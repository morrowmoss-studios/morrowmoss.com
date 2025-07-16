export default function Home() {
    return (
        <div className="space-y-16">
            {/* HERO */}
            <section className="text-center space-y-6">
                <h1 className="text-4xl sm:text-6xl font-bold text-moss-light">
                    MorrowMoss Studios
                </h1>
                <p className="text-lg text-moss-light/80 max-w-2xl mx-auto">
                    The moss is alive and watching. Handcrafting fae-touched worlds and queer-centered adventures.
                </p>
            </section>

            {/* IN DEVELOPMENT */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-moss-light">Currently Brewing</h2>
                <p className="text-moss-light/80">
                    Check back soon to see what fresh mossy magic is sprouting. We’re nurturing our next world right now.
                </p>
            </section>

            {/* RECENT BLOG */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-moss-light">From the Blog</h2>
                <p className="text-moss-light/80">
                    Tips, thoughts, and tangled roots of our dev journey — coming soon.
                </p>
            </section>
        </div>
    );
}
