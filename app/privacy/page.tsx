import Link from "next/link";

export const metadata = {
    title: "Privacy Policies | MorrowMoss Studios",
    description: "Privacy policies for MorrowMoss Studios games and apps.",
};

export default function PrivacyPoliciesPage() {
    return (
        <div className="space-y-12">
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-moss-light">Privacy Policies</h1>
                <p className="text-moss-light/80 max-w-2xl mx-auto">
                    Each game/app has its own policy page. Choose the one you need below.
                </p>
            </section>

            <div className="space-y-6">
                {/* SigilShift */}
                <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20">
                    <h2 className="text-xl font-semibold text-moss-light">SigilShift</h2>
                    <p className="text-moss-light/80">
                        Ads + rewarded ads via Unity LevelPlay (Unity Ads). No MorrowMoss servers.
                    </p>
                    <Link
                        href="/privacy/sigilshift"
                        className="inline-block mt-4 text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition"
                    >
                        View policy →
                    </Link>
                </div>

                {/* TriviaForge */}
                <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20">
                    <h2 className="text-xl font-semibold text-moss-light">TriviaForge</h2>
                    <p className="text-moss-light/80">
                        {/* Update this summary once you know the ad/data setup for TriviaForge */}
                        Privacy policy for TriviaForge. Details on data collection and third-party services.
                    </p>
                    <Link
                        href="/privacy/triviaforge"
                        className="inline-block mt-4 text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition"
                    >
                        View policy →
                    </Link>
                </div>
            </div>
        </div>
    );
}
