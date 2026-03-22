import Link from "next/link";

const posts = [
    {
        slug: "the-forge-awakens",
        title: "The Forge Awakens",
        date: "March 2026",
        excerpt: "Something stirs beneath the moss. TriviaForge is taking shape, and we're ready to talk about it.",
        tag: "TriviaForge",
    },
];

export default function Blog() {
    return (
        <div className="space-y-12">
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-moss-light">Blog & Ramblings</h1>
                <p className="text-moss-light/80 max-w-xl mx-auto">
                    Notes from the undergrowth: dev stories, art musings, and the mossy paths we wander.
                </p>
            </section>

            <div className="space-y-6">
                {posts.map((post) => (
                    <div
                        key={post.slug}
                        className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20 space-y-3"
                    >
                        <p className="text-moss-light/50 text-xs uppercase tracking-widest">{post.date} · {post.tag}</p>
                        <h2 className="text-xl font-semibold text-moss-light">{post.title}</h2>
                        <p className="text-moss-light/80">{post.excerpt}</p>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="inline-block text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition"
                        >
                            Read more →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
