import usePageTitle from "../hooks/usePageTitle"


export const PrivacyPolicy: React.FC = () => {

    usePageTitle("Privacy policy");

    return (
        <div className="flex flex-col text-color mt-10">
            <h1 className="text-5xl font-bold">Privacy policy</h1>
            <p className="text-lg mt-8">Welcome to <span className="underline">superguitartab.com</span>. This Privacy Policy explains how we collect, use, and protect information when you use our website. By using our website, you agree to the practices described in this policy.</p>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">1. Information we collect</h3>
                <p className="text-lg">We do <span className="font-semibold">not</span> collect personal information such as names, emails, passwords, or account data.</p>
                <div className="text-lg mt-5">
                    <p>However, we use Google Analytics to understand how visitors use the site. Google Analytics may collect:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 mb-5">
                        <li>Pages visited</li>
                        <li>Time spent on pages</li>
                        <li>Device type (phone, tablet, computer)</li>
                        <li>Browser type</li>
                        <li>Approximate location (city-level)</li>
                        <li>IP address (processed by Google and may be anonymized)</li>
                    </ul>
                     <p>We do <span className="font-semibold">not</span> store this data ourselves.</p>
                </div>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">2. How We Use This Information</h3>
                <div className="text-lg mt-5">
                    <p>We use analytics data only to:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 mb-5">
                        <li>understand which pages are visited</li>
                        <li>improve our website content and usabilitys</li>
                        <li>fix user experience issues</li>
                        <li>measure general usage and performance</li>
                    </ul>
                     <p>We do <span className="font-semibold">not</span> sell, trade, or share this data with anyone else.</p>
                </div>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">3. Cookies and Tracking Technologies</h3>
                <p className="text-lg">Google Analytics uses cookies or similar technologies to collect usage information.</p>
                <p className="text-lg">You can opt out of Google Analytics by using Google's browser add-on: <a className="link" href="https://tools.google.com/dlpage/gaoptout/">https://tools.google.com/dlpage/gaoptout/</a></p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">4. Third-Party Services</h3>
                <p className="text-lg">Our website uses: <span className="font-semibold">Google Analytics (Google LLC)</span></p>
                <p className="text-lg">Google may process certain data as described in their privacy policy: <a className="link" href="thttps://policies.google.com/privacy">https://policies.google.com/privacy</a></p>
                <p className="text-lg">We do not combine Google Analytics data with any personally identifiable information.</p>
            </div>

                        <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">5. Data Storage and Security</h3>
                <p className="text-lg">
                    We do <span className="font-semibold">not</span> store personal data on our servers, as our app does not collect or maintain such data.
                </p>
                <p className="text-lg mt-5">
                    Analytics data is stored and processed by Google according to their security practices.
                </p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">6. Children's Privacy</h3>
                <p className="text-lg">
                    Our website is not intended for children under 13, and we do not knowingly collect personal information from children.
                </p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">7. Changes to This Privacy Policy</h3>
                <p className="text-lg">
                    We may update this Privacy Policy from time to time. When changes occur, we will update the “Last Updated” date at the top of this page.
                </p>
            </div>

            {/* <div className="flex flex-col mt-12 mb-16">
                <h3 className="text-3xl font-semibold mb-5">8. Contact Us</h3>
                <p className="text-lg">
                    If you have any questions about this Privacy Policy, you may contact us at:{" "}
                    <a className="link" href="mailto:your@email.com">your@email.com</a>
                </p>
            </div> */}

        </div>
    )
}