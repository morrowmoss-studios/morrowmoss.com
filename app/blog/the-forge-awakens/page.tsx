import Link from "next/link";

export const metadata = {
    title: "The Forge Awakens | MorrowMoss Studios Blog",
    description: "Something stirs beneath the moss. TriviaForge is taking shape.",
};

export default function TheForgeAwakens() {
    return (
        <div className="max-w-2xl mx-auto space-y-8 text-moss-light">

            {/* Back */}
            <Link
                href="/blog"
                className="text-sm text-[#FDE68A]/70 hover:text-[#FDE68A] transition"
            >
                ← Back to Blog
            </Link>

            {/* Header */}
            <section className="space-y-3">
                <p className="text-moss-light/50 text-xs uppercase tracking-widest">Dev Log — March 2026</p>
                <h1 className="text-4xl font-bold text-moss-light">The Forge Awakens</h1>
                <p className="text-moss-light/60 text-sm">By MorrowMoss Studios</p>
            </section>

            {/* Body */}
            <article className="space-y-6 text-moss-light/80 leading-relaxed">
                <p>
                    Deep in the roots of the Morrowmoss, where knowledge grows thick as lichen and old
                    questions hang in the air like spores, something has been taking shape.
                    We've been tending it quietly — feeding it questions, shaping its edges,
                    watching it glow.
                </p>

                <p>
                    We're calling it <span className="text-moss-light font-semibold">TriviaForge</span>.
                </p>

                <p>
                    The concept is simple at its heart: a fantasy-themed trivia game where knowledge
                    is your most powerful weapon. But the execution is anything but simple.
                    Every category is a forge — a distinct artifact, hammered into shape with care.
                    History. Science. Mythology. Pop culture. Each one a different alloy, a different glow.
                </p>

                <p>
                    What's been taking up most of our time isn't the code or the UI — it's the questions
                    themselves. Hundreds of them, sorted by difficulty, verified for accuracy,
                    written to feel like they belong in a world where trivia matters.
                    Not a pop quiz. A reckoning.
                </p>

                <p>
                    We're still deep in the forge. The fire isn't ready to open to the public yet.
                    But the smoke is rising, and we wanted you to know something is being made.
                </p>

                <p>
                    The moss watches. The forge waits. And soon — you'll be asked what you know.
                </p>
            </article>

            {/* Footer tag */}
            <div className="pt-4 border-t border-white/10">
                <p className="text-moss-light/40 text-sm">Filed under: TriviaForge, Dev Log</p>
            </div>

            <Link
                href="/blog"
                className="inline-block text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition"
            >
                ← Back to Blog
            </Link>

        </div>
    );
}
