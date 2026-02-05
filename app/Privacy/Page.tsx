import Link from "next/link";

const policies = [
    {
        slug: "sigilshift",
        title: "SigilShift",
        subtitle: "Ads via Unity LevelPlay • Optional IAP: Remove Ads",
        status: "Live",
    },
    {
        slug: "triviaforge",
        title: "TriviaForge",
        subtitle: "Policy coming soon",
        status: "Coming soon",
    },
];

export default function PrivacyHub() {
    return (
        <div className="max-w-3xl mx-auto space-y-10 text-moss-light">
            <header className="space-y-2">
                <h1 className="text-3xl font-bold">Privacy Policies</h1>
                <p className="text-moss-light/80">
                    Select a game below to view its privacy policy.
                </p>
            </header>

            <div className="space-y-6">
                {policies.map((p) => (
                    <div
                        key={p.slug}
                        className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                                <h2 className="text-xl font-semibold">{p.title}</h2>
                                <p className="text-sm text-moss-light/70">{p.subtitle}</p>
                            </div>

                            <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-moss-light/70">
                {p.status}
              </span>
                        </div>

                        <div className="mt-4">
                            {p.status === "Live" ? (
                                <Link
                                    href={`/privacy/${p.slug}`}
                                    className="inline-flex items-center gap-2 text-[#FDE68A] hover:drop-shadow-[0_0_6px_#FDE68A] transition"
                                >
                                    View policy <span aria-hidden>→</span>
                                </Link>
                            ) : (
                                <span className="text-moss-light/50">Coming soon</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
