import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "SigilShift | MorrowMoss Studios",
    description: "A hypnotic sigil-sliding puzzle where glowing runes drift into alignment.",
};

export default function SigilShiftPage() {
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
                <h1 className="text-4xl font-bold text-moss-light">SigilShift</h1>
                <p className="text-sm text-moss-faint italic">Finished — Publishing Soon</p>
                <p className="text-moss-light/80 text-lg">
                    A hypnotic sigil-sliding puzzle where glowing runes drift into alignment.
                    Calm, clever, and crafted to feel like solving ancient magic.
                </p>
            </section>

            {/* Screenshots */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <Image
                            src="/3x3.png"
                            alt="SigilShift 3x3 puzzle"
                            width={600}
                            height={600}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <Image
                            src="/4x4.png"
                            alt="SigilShift 4x4 puzzle"
                            width={600}
                            height={600}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <Image
                            src="/5x5.png"
                            alt="SigilShift 5x5 puzzle"
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
                    SigilShift is a meditative sliding puzzle built around ancient rune magic.
                    Each level presents a board of glowing sigils that must be guided into alignment —
                    one deliberate slide at a time. The further you progress, the more complex the patterns,
                    and the more satisfying the moment everything clicks into place.
                </p>
                <p className="text-moss-light/80">
                    Designed to feel calm without being boring, SigilShift rewards patience and spatial thinking.
                    No timers. No penalties. Just you, the sigils, and the quiet hum of magic finding its shape.
                </p>
            </section>

            {/* Download */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Download</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="https://apps.apple.com/us/app/sigilshift/id6757119310"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="backdrop-blur-md bg-white/3 border border-white/10 rounded-2xl px-8 py-4 ring-2 ring-[#FDE68A]/20 hover:ring-[#FDE68A]/50 hover:bg-white/6 transition text-moss-light font-semibold text-center"
                    >
                        Download on the App Store
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.MorrowMossStudios.SigilShift&hl=en_US"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="backdrop-blur-md bg-white/3 border border-white/10 rounded-2xl px-8 py-4 ring-2 ring-[#FDE68A]/20 hover:ring-[#FDE68A]/50 hover:bg-white/6 transition text-moss-light font-semibold text-center"
                    >
                        Get it on Google Play
                    </a>
                </div>
            </section>

            {/* Back link */}
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
