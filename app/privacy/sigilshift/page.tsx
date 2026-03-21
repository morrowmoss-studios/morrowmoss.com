export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 text-moss-light">
            <h1 className="text-3xl font-bold">SigilShift – Privacy Policy</h1>

            <p className="text-sm text-moss-light/70">
                <strong>Effective Date:</strong> January 9, 2026<br />
                <strong>Developer:</strong> MorrowMoss Studios
            </p>

            <section>
                <h2 className="text-xl font-semibold">1. Overview</h2>
                <p>
                    SigilShift displays third-party advertisements using Unity LevelPlay (Unity Ads).
                    These ad services may collect limited device and usage data to show appropriate ads
                    and to prevent fraud.
                </p>
                <p>
                    MorrowMoss Studios does not run its own servers and does not collect, store, or sell
                    any personal information from players.
                </p>
                <p>By playing SigilShift, you agree to this Privacy Policy.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">2. Data Collected</h2>
                <p>Unity Ads / LevelPlay may automatically collect non-personal data, including:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Device type and model</li>
                    <li>Operating system and version</li>
                    <li>Country or region</li>
                    <li>IP address (for ad delivery and fraud prevention)</li>
                    <li>Advertising ID (IDFA/GAID)</li>
                    <li>App usage events (such as ad views and ad interactions)</li>
                    <li>Basic analytics related to ad performance</li>
                </ul>
                <p>
                    All such data collection is performed by Unity, not by MorrowMoss Studios.
                    MorrowMoss Studios does not access or store this information.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">3. Purpose of Data Collection</h2>
                <p>Unity uses this data to:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Deliver ads in the game</li>
                    <li>Limit how often the same ad is shown</li>
                    <li>Prevent fraud and misuse</li>
                    <li>Improve ad relevance and performance</li>
                    <li>Track completion of rewarded ads</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold">4. Children’s Privacy</h2>
                <p>SigilShift is not directed to children under 13.</p>
                <p>
                    MorrowMoss Studios does not knowingly collect personal information from children.
                    If you believe a child has provided personal information via the game,
                    please contact us so we can work with Unity to address it if needed.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
                <p>
                    SigilShift uses Unity LevelPlay / Unity Ads for advertising and related analytics.
                </p>
                <p>
                    Unity Privacy Policy:{" "}
                    <a
                        href="https://unity.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#FDE68A]"
                    >
                        https://unity.com/legal/privacy-policy
                    </a>
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">6. In-App Purchases</h2>
                <p>
                    SigilShift includes a one-time optional in-app purchase: “Remove Ads”.
                    All purchases are processed securely by the Apple App Store or Google Play Store.
                </p>
                <p>
                    MorrowMoss Studios does not receive or store any payment information.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">7. Opt-Out Options</h2>
                <p>
                    You can reset or limit ad tracking in your device’s privacy settings.
                    Please refer to Unity’s privacy policy for more detailed options.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">8. Contact</h2>
                <p>
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

            <section>
                <h2 className="text-xl font-semibold">9. Updates to This Policy</h2>
                <p>
                    This Privacy Policy may be updated from time to time.
                    The latest version will always be available at this URL.
                </p>
            </section>
        </div>
    );
}