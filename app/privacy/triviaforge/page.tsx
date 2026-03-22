export const metadata = {
    title: "TriviaForge Privacy Policy | MorrowMoss Studios",
    description: "Privacy policy for TriviaForge by MorrowMoss Studios.",
};

export default function TriviaForgePrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 text-moss-light">
            <h1 className="text-3xl font-bold">TriviaForge – Privacy Policy</h1>

            <p className="text-sm text-moss-light/70">
                <strong>Last Updated:</strong> March 2026<br />
                <strong>Developer:</strong> MorrowMoss Studios
            </p>

            <p className="text-moss-light/80">
                This Privacy Policy describes how MorrowMoss Studios ("we," "us," or "our") collects,
                uses, and protects information when you use TriviaForge (the "Game").
            </p>

            <p className="text-sm text-moss-light/50 italic">
                This document is provided as a placeholder for testing purposes and may not represent
                the final legal policy.
            </p>

            <section>
                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                <p className="text-moss-light/80">
                    TriviaForge may collect limited information to support gameplay, performance, and stability.
                    This may include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80">
                    <li>Device information (model, OS version)</li>
                    <li>Gameplay data such as settings preferences</li>
                    <li>Crash logs or error reports</li>
                    <li>Anonymous usage analytics (if enabled within Unity)</li>
                </ul>
                <p className="text-moss-light/80 mt-2">
                    We do not collect personally identifiable information unless explicitly provided by the user.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                <p className="text-moss-light/80">We may use collected information to:</p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80">
                    <li>Improve game performance</li>
                    <li>Fix bugs or crashes</li>
                    <li>Analyze non-personal gameplay trends</li>
                    <li>Support future updates or features</li>
                </ul>
                <p className="text-moss-light/80 mt-2">
                    We do not sell, trade, or share data with third parties for marketing purposes.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">3. Third-Party Services</h2>
                <p className="text-moss-light/80">TriviaForge may use third-party tools such as:</p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80">
                    <li>Unity Engine services</li>
                    <li>Unity Analytics</li>
                    <li>Optional advertising networks</li>
                </ul>
                <p className="text-moss-light/80 mt-2">
                    These services may collect anonymized data according to their own privacy policies.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">4. Data Storage &amp; Security</h2>
                <p className="text-moss-light/80">
                    We take reasonable steps to protect information from unauthorized access or misuse.
                    However, no method of storage or transmission is 100% secure.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">5. Children's Privacy</h2>
                <p className="text-moss-light/80">TriviaForge is not directed toward children under 13.</p>
                <p className="text-moss-light/80">We do not knowingly collect personal data from children.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
                <p className="text-moss-light/80">
                    We may update this Privacy Policy from time to time.
                    Continued use of the Game indicates acceptance of the updated policy.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">7. Contact Us</h2>
                <p className="text-moss-light/80">
                    MorrowMoss Studios<br />
                    Email:{" "}
                    <a
                        href="mailto:contact@morrowmoss.com"
                        className="underline text-[#FDE68A]"
                    >
                        contact@morrowmoss.com
                    </a>
                </p>
            </section>

            <p className="text-sm text-moss-light/50">© 2025 MorrowMoss Studios. All rights reserved.</p>
        </div>
    );
}
