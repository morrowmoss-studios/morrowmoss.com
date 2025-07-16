export default function Creations() {
    return (
        <div className="space-y-12">
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-moss-light">Our Creations</h1>
                <p className="text-moss-light/80 max-w-xl mx-auto">
                    Explore the worlds and apps we’ve carefully grown from spores to lush realms.
                </p>
            </section>

            <div className="space-y-8">
                <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20">
                    <h3 className="text-lg font-bold text-moss-light">StillSands</h3>
                    <p className="text-sm text-moss-faint">A calming 3D zen garden app where you shape flowing sands to unwind your busy mind.</p>
                </div>


                <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl p-6 shadow-lg ring-2 ring-[#FDE68A]/20">
                    <h2 className="text-xl font-semibold text-moss-light">IdleGrove</h2>
                    <p className="text-moss-light/80">
                        A cozy idle grove that rewards your self-care. Grow lush worlds while nurturing yourself IRL.
                    </p>
                </div>
            </div>
        </div>
    );
}
