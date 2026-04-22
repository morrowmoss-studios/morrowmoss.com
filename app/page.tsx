import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="max-w-4xl mx-auto p-8 space-y-16">
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
            <section className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20 space-y-8">
                <h2 className="text-2xl font-bold text-moss-light">Currently Brewing</h2>

                {/* TriviaForge */}
                <div className="space-y-2 border-b border-white/10 pb-8">
                    <p className="text-moss-light/60 text-xs uppercase tracking-widest font-semibold">In Development</p>
                    <h3 className="text-xl font-semibold text-moss-light">TriviaForge</h3>
                    <p className="text-moss-light/80">
                        A fantasy-themed trivia experience built on a modular question engine.
                        Categories are forged like artifacts, and knowledge becomes your weapon.
                        The forge is heating up.
                    </p>
                    <Link
                        href="/creations/triviaforge"
                        className="inline-block text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition"
                    >
                        Learn more →
                    </Link>
                </div>

                {/* PocketHaven */}
                <div className="space-y-4">
                    <p className="text-moss-light/60 text-xs uppercase tracking-widest font-semibold">Coming Soon</p>
                    <h3 className="text-xl font-semibold text-moss-light">PocketHaven</h3>
                    <Image
                        src="/pockethaven.png"
                        alt="PocketHaven promo art"
                        width={600}
                        height={800}
                        className="rounded-2xl w-full max-w-sm mx-auto object-contain"
                    />
                    <p className="text-moss-light/80">
                        A cozy fae-touched home decorating game where every room tells a story.
                        Craft your haven, tend your garden, and let the forest in.
                        Coming to mobile and possibly PC and Mac.
                    </p>
                </div>
            </section>

            {/* RECENT BLOG */}
            <section className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20 space-y-3">
                <h2 className="text-2xl font-bold text-moss-light">From the Blog</h2>
                <p className="text-moss-light/50 text-xs uppercase tracking-widest">March 2026 · TriviaForge</p>
                <h3 className="text-lg font-semibold text-moss-light">The Forge Awakens</h3>
                <p className="text-moss-light/80">
                    Something stirs beneath the moss. TriviaForge is taking shape, and we're ready to talk about it.
                </p>
                <Link
                    href="/blog/the-forge-awakens"
                    className="inline-block text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition"
                >
                    Read more →
                </Link>
            </section>
        </main>
    );
}
