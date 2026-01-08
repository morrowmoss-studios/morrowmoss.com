export default function Creations() {
    return (
        <div className="space-y-12">
            {/* Header */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-moss-light">Our Creations</h1>
                <p className="text-moss-light/80 max-w-xl mx-auto">
                    Explore the worlds and apps we’re carefully growing within the Morrowmoss realm.
                </p>
            </section>

            {/* Game Cards */}
            <div className="space-y-8">

                {/* SIGILSHIFT */}
                <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20">
                    <h3 className="text-lg font-bold text-moss-light">SigilShift</h3>
                    <p className="text-sm text-moss-faint mb-4 italic">Finished — Publishing Soon</p>

                    <p className="text-moss-light/80 mb-4">
                        A hypnotic sigil-sliding puzzle where glowing runes drift into alignment.
                        Calm, clever, and crafted to feel like solving ancient magic.
                    </p>

                    <a
                        href="/creations/sigilshift"
                        className="text-[#FDE68A] hover:text-yellow-300 transition underline"
                    >
                        Learn more →
                    </a>
                </div>

                {/* TRIVIAFORGE */}
                <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20">
                    <h3 className="text-lg font-bold text-moss-light">TriviaForge</h3>
                    <p className="text-sm text-moss-faint mb-4 italic">In Development</p>

                    <p className="text-moss-light/80 mb-4">
                        A fantasy-themed trivia experience built on a modular question engine.
                        Categories are forged like artifacts, and knowledge becomes your weapon.
                    </p>

                    <a
                        href="/creations/triviaforge"
                        className="text-[#FDE68A] hover:text-yellow-300 transition underline"
                    >
                        Learn more →
                    </a>
                </div>

            </div>
        </div>
    );
}
