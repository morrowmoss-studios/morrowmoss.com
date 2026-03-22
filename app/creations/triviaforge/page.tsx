import Link from "next/link";
import Image from "next/image";

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
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <Image
                            src="/triviaforge.png"
                            alt="TriviaForge main screen"
                            width={600}
                            height={600}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <Image
                            src="/triviaforge_trivia.png"
                            alt="TriviaForge trivia gameplay"
                            width={600}
                            height={600}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <Image
                            src="/triviaforge_wordoku.png"
                            alt="TriviaForge wordoku mode"
                            width={600}
                            height={600}
                            className="object-contain w-full h-auto"
                        />
                    </div>
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
                    Built on a modular question engine, TriviaForge is designed to grow: new categories,
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
                        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#FDE68A]" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
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
