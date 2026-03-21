import Link from "next/link";

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

            {/* CURRENTLY BREWING */}
            <section className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20 space-y-4">
                <h2 className="text-2xl font-bold text-moss-light">Currently Brewing</h2>
                <p className="text-moss-light/60 text-xs uppercase tracking-widest font-semibold">In Development</p>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-moss-light">TriviaForge</h3>
                    <p className="text-moss-light/80">
                        A fantasy-themed trivia experience built on a modular question engine.
                        Categories are forged like artifacts, and knowledge becomes your weapon.
                        The forge is heating up — more details soon.
                    </p>
                </div>

                <Link
                    href="/creations/triviaforge"
                    className="inline-block text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition"
                >
                    Learn more →
                </Link>
            </section>

            {/* RECENT BLOG */}
            <section className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20">
                <h2 className="text-2xl font-bold text-moss-light">From the Blog</h2>
                <p className="text-moss-light/80 mt-2">
                    Tips, thoughts, and tangled roots of our dev journey — coming soon.
                </p>
            </section>
        </div>
    );
}
