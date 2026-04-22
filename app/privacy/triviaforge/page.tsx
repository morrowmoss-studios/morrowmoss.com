import Link from "next/link";

export const metadata = {
    title: "TriviaForge Privacy Policy | MorrowMoss Studios",
    description: "Privacy policy for TriviaForge by MorrowMoss Studios.",
};

export default function TriviaForgePrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 text-moss-light">
            <Link
                href="/privacy"
                className="inline-block text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition text-sm"
            >
                ← Back to Privacy Policies
            </Link>

            <h1 className="text-3xl font-bold">TriviaForge – Privacy Policy</h1>

            <p className="text-sm text-moss-light/70">
                <strong>Last Updated:</strong> April 2026<br />
                <strong>Developer:</strong> MorrowMoss Studios LTD
            </p>

            <p className="text-moss-light/80">
                This Privacy Policy describes how MorrowMoss Studios LTD ("we," "us," or "our") collects,
                uses, and protects information when you use TriviaForge (the "Game"). By playing TriviaForge,
                you agree to the terms described in this policy.
            </p>

            <section>
                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                <p className="text-moss-light/80">When you create an account in TriviaForge, we collect:</p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80 mt-2">
                    <li>Display name (username)</li>
                    <li>Email address</li>
                    <li>Game statistics including scores, streaks, puzzle completion data, and win records</li>
                </ul>
                <p className="text-moss-light/80 mt-3">We also collect automatically:</p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80 mt-2">
                    <li>Device information (model, OS version)</li>
                    <li>Gameplay data such as settings preferences</li>
                    <li>Crash logs or error reports</li>
                    <li>Anonymous usage analytics</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                <p className="text-moss-light/80">We use collected information to:</p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80 mt-2">
                    <li>Create and manage your player account</li>
                    <li>Display your scores on leaderboards</li>
                    <li>Save your game progress and statistics</li>
                    <li>Improve game performance and fix bugs</li>
                    <li>Analyze non-personal gameplay trends</li>
                    <li>Support future updates and features</li>
                </ul>
                <p className="text-moss-light/80 mt-3">
                    We do not sell, trade, or share your personal data with third parties for marketing purposes.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">3. Third-Party Services</h2>
                <p className="text-moss-light/80">
                    TriviaForge uses the following third-party services, each of which operates under its own privacy policy:
                </p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80 mt-2">
                    <li>Firebase and Firestore (Google) — used for account authentication, profile storage, and leaderboard data</li>
                    <li>Unity LevelPlay / IronSource — used to serve advertisements within the game</li>
                    <li>Unity IAP (In-App Purchases) — used to process the Remove Ads purchase through Apple App Store or Google Play Store</li>
                    <li>Unity Engine services and Unity Analytics — used for performance monitoring and anonymous usage data</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold">4. Advertising</h2>
                <p className="text-moss-light/80">
                    TriviaForge displays rewarded and interstitial advertisements powered by Unity LevelPlay and IronSource.
                    These ads may use device identifiers and anonymized data to serve relevant ads in accordance with
                    IronSource's privacy policy. Players who purchase the Remove Ads option will no longer be shown advertisements.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">5. In-App Purchases</h2>
                <p className="text-moss-light/80">
                    TriviaForge offers a one-time Remove Ads purchase processed through Apple App Store or Google Play.
                    We do not store your payment information. All transactions are handled by Apple or Google under
                    their respective terms of service.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">6. Account Management and Data Deletion</h2>
                <p className="text-moss-light/80">
                    You may delete your account at any time through the Settings menu within the game. Deleting your
                    account will permanently remove your profile, email address, display name, and all associated
                    game statistics from our servers.
                </p>
                <p className="text-moss-light/80 mt-3">
                    Additionally, accounts that have been inactive for 90 consecutive days will have their personal
                    data automatically deleted from our servers. Game statistics associated with inactive accounts
                    will also be removed.
                </p>
                <p className="text-moss-light/80 mt-3">
                    If you wish to request manual deletion of your data, please contact us at{" "}
                    <a href="mailto:support@morrowmoss.com" className="underline text-[#FDE68A]">
                        support@morrowmoss.com
                    </a>.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">7. Data Storage and Security</h2>
                <p className="text-moss-light/80">
                    Your account data is stored securely using Google Firebase and Firestore. We take reasonable
                    steps to protect your information from unauthorized access or misuse. However, no method of
                    storage or transmission is 100% secure, and we cannot guarantee absolute security.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">8. Children's Privacy</h2>
                <p className="text-moss-light/80">
                    TriviaForge is not directed toward children under the age of 13. We do not knowingly collect
                    personal data from children. If you believe a child under 13 has provided us with personal
                    information, please contact us and we will take steps to remove that information.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
                <p className="text-moss-light/80">
                    We may update this Privacy Policy from time to time. Continued use of the Game after changes
                    are posted indicates acceptance of the updated policy. We encourage you to review this policy periodically.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">10. Contact Us</h2>
                <p className="text-moss-light/80">
                    For questions, concerns, data deletion requests, or support, please contact:
                </p>
                <p className="text-moss-light/80 mt-2">
                    MorrowMoss Studios LTD<br />
                    <a href="mailto:support@morrowmoss.com" className="underline text-[#FDE68A]">
                        support@morrowmoss.com
                    </a>
                </p>
            </section>

            <p className="text-sm text-moss-light/50">© 2026 MorrowMoss Studios. All rights reserved.</p>
        </div>
    );
}
