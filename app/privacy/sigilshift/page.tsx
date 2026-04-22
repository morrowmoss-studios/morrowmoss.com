import Link from "next/link";

export const metadata = {
    title: "SigilShift Privacy Policy | MorrowMoss Studios",
    description: "Privacy policy for SigilShift by MorrowMoss Studios.",
};

export default function SigilShiftPrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 text-moss-light">
            <Link
                href="/privacy"
                className="inline-block text-[#FDE68A] hover:text-[#f7eab5] hover:drop-shadow-[0_0_6px_#f7eab5] transition text-sm"
            >
                ← Back to Privacy Policies
            </Link>

            <h1 className="text-3xl font-bold">SigilShift – Privacy Policy</h1>

            <p className="text-sm text-moss-light/70">
                <strong>Last Updated:</strong> April 2026<br />
                <strong>Developer:</strong> MorrowMoss Studios LTD
            </p>

            <p className="text-moss-light/80">
                This Privacy Policy describes how MorrowMoss Studios LTD ("we," "us," or "our") collects,
                uses, and protects information when you use SigilShift (the "Game"). By playing SigilShift,
                you agree to the terms described in this policy.
            </p>

            <section>
                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                <p className="text-moss-light/80">
                    SigilShift does not require an account and does not collect any personally identifiable
                    information directly. The following data may be collected automatically by third-party
                    services integrated into the game:
                </p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80 mt-2">
                    <li>Device type and model</li>
                    <li>Operating system and version</li>
                    <li>Country or region</li>
                    <li>IP address (for ad delivery and fraud prevention)</li>
                    <li>Advertising ID (IDFA / GAID)</li>
                    <li>App usage events such as ad views and interactions</li>
                    <li>Basic analytics related to ad performance</li>
                </ul>
                <p className="text-moss-light/80 mt-3">
                    All such data collection is performed by Unity, not by MorrowMoss Studios.
                    MorrowMoss Studios does not access or store this information.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                <p className="text-moss-light/80">
                    MorrowMoss Studios does not collect or use personal data directly. Third-party services
                    within SigilShift use the data described above to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80 mt-2">
                    <li>Deliver advertisements within the game</li>
                    <li>Limit ad frequency and improve ad relevance</li>
                    <li>Prevent fraud and misuse</li>
                    <li>Track completion of rewarded ads</li>
                    <li>Monitor app performance and stability</li>
                </ul>
                <p className="text-moss-light/80 mt-3">
                    We do not sell, trade, or share your personal data with third parties for marketing purposes.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">3. Third-Party Services</h2>
                <p className="text-moss-light/80">
                    SigilShift uses the following third-party services, each of which operates under its own privacy policy:
                </p>
                <ul className="list-disc list-inside space-y-1 text-moss-light/80 mt-2">
                    <li>Unity LevelPlay / IronSource — used to serve advertisements within the game</li>
                    <li>Unity IAP (In-App Purchases) — used to process the Remove Ads purchase through Apple App Store or Google Play Store</li>
                    <li>Unity Engine services and Unity Analytics — used for performance monitoring and anonymous usage data</li>
                </ul>
                <p className="text-moss-light/80 mt-3">
                    Unity Privacy Policy:{" "}
                    <a
                        href="https://unity.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#FDE68A]"
                    >
                        unity.com/legal/privacy-policy
                    </a>
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">4. Advertising</h2>
                <p className="text-moss-light/80">
                    SigilShift displays rewarded and interstitial advertisements powered by Unity LevelPlay
                    and IronSource. These ads may use device identifiers and anonymized data to serve relevant
                    ads in accordance with IronSource's privacy policy. Players who purchase the Remove Ads
                    option will no longer be shown advertisements.
                </p>
                <p className="text-moss-light/80 mt-3">
                    You can reset or limit ad tracking at any time through your device's privacy settings.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">5. In-App Purchases</h2>
                <p className="text-moss-light/80">
                    SigilShift offers a one-time Remove Ads purchase processed through Apple App Store or
                    Google Play. We do not store your payment information. All transactions are handled by
                    Apple or Google under their respective terms of service.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">6. Data Storage and Security</h2>
                <p className="text-moss-light/80">
                    SigilShift does not operate its own servers and does not store personal data on behalf
                    of players. Any data collected by third-party services is governed by their respective
                    privacy policies and security practices.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">7. Children's Privacy</h2>
                <p className="text-moss-light/80">
                    SigilShift is not directed toward children under the age of 13. We do not knowingly
                    collect personal data from children. If you believe a child under 13 has provided
                    personal information via the game, please contact us and we will work with our
                    third-party partners to address it.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
                <p className="text-moss-light/80">
                    We may update this Privacy Policy from time to time. Continued use of the Game after
                    changes are posted indicates acceptance of the updated policy. We encourage you to
                    review this policy periodically.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">9. Contact Us</h2>
                <p className="text-moss-light/80">
                    For questions, concerns, or support, please contact:
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
