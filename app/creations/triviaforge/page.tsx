import Link from "next/link";

export const metadata = {
    title: "TriviaForge | MorrowMoss Studios",
    description: "A fantasy-themed trivia experience built on a modular question engine.",
};

export default function TriviaForgePage() {
    return (
        <div className="max-w-3xl mx-auto space-y-12 text-moss-light">

            {/* Header */}
            <section className="space-y-3">
                <Link
                    href="/creations"
                    className="text-sm text-[#FDE68A]/70 hover:text-[#FDE68A] transition"
                >
                    ← Back to Creations
                </Link>
                <h1 className="text-4xl font-bold text-moss-light">TriviaForge</h1>
                <p className="text-sm text-moss-faint italic">In Development</p>
                <p className="text-moss-light/80 text-lg">
                    A fantasy-themed trivia experience built on a modular question engine.
                    Categories are forged like artifacts, and knowledge becomes your weapon.
                </p>
            </section>

            {/* Screenshots — placeholder until dev screenshots are ready */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[1, 2, 3].map((n) => (
                        <div
                            key={n}
                            className="rounded-2xl border border-white/10 bg-white/5 aspect-[9/16] flex items-center justify-center text-moss-faint text-sm"
                        >
                            Coming soon
                        </div>
                    ))}
                </div>
            </section>

            {/* About */}
            <section className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20 space-y-4">
                <h2 className="text-2xl font-semibold">About the Game</h2>
                <p className="text-moss-light/80">
                    TriviaForge is a fantasy-themed mobile trivia game where knowledge is your greatest weapon.
                    Choose your category, face the forge, and prove your mastery across hundreds of handcrafted questions
                    spanning history, science, pop culture, mythology, and more.
                </p>
                <p className="text-moss-light/80">
                    Built on a modular question engine, TriviaForge is designed to grow, new categories,
                    new difficulty tiers, and new challenges added over time. The forge never cools.
                </p>
            </section>

            {/* Store links — stubbed until TriviaForge is published */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Download</h2>
                <p className="text-moss-light/60 text-sm italic">
                    TriviaForge is currently in development. Store links will appear here at launch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 opacity-40 pointer-events-none select-none">
                    <div className="flex items-center justify-center gap-3 backdrop-blur-md bg-white/3 border border-white/10 rounded-2xl px-6 py-4 ring-2 ring-[#FDE68A]/20 text-moss-light font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" fill="currentColor" className="w-6 h-6 text-[#FDE68A]">
                            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.2-147.6-100.6C158.6 782 93.1 644.4 93.1 512.6c0-80.7 13.9-159.8 57.1-227.7 60.1-93.9 152.7-158.1 255-158.1 98.2 0 162.4 44.4 230.9 44.4 66.5 0 142.7-47.1 254.4-47.1 41.3 0 143.8 3.8 215.5 99.3zM551.1 85.5C584.6 47.6 608.4 0 608.4 0c0-1.3-.3-2.6-.3-4 0-.3 0-.6.1-.9-41.7 1.5-92.1 27.9-123.1 61.6C458.5 89.1 432 141.8 432 192.8c0 1.3.1 2.6.3 3.9.7.1 1.4.1 2.1.1 43.4 0 93.4-26.2 116.7-111.3z"/>
                        </svg>
                        App Store
                    </div>
                    <div className="flex items-center justify-center gap-3 backdrop-blur-md bg-white/3 border border-white/10 rounded-2xl px-6 py-4 ring-2 ring-[#FDE68A]/20 text-moss-light font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6 text-[#FDE68A]">
                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l232.6-233-232.6-233zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.4-9.7 17.4-34.5-.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                        </svg>
                        Google Play
                    </div>
                </div>
            </section>

            <div>
                <Link
                    href="/creations"
                    className="text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition"
                >
                    ← Back to Creations
                </Link>
            </div>
        </div>
    );
}
