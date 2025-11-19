
export const TermsAndConditions: React.FC = () => {

    return (
        <div className="flex flex-col text-color mt-10">
            <h1 className="text-5xl font-bold">Terms & Conditions</h1>
            <p className="text-lg mt-8">
                Welcome to <span className="underline">superguitartab.com</span>. These Terms & Conditions (“Terms”) govern your use of our website. 
                By accessing or using the site, you agree to be bound by these Terms. If you do not agree, please do not use the website.
            </p>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">1. Use of the Website</h3>
                <p className="text-lg">
                    You may browse and download guitar tabs and music sheets for personal, non-commercial use only. You agree not to use the website for any unlawful purpose or in violation of these Terms.
                </p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">2. Intellectual Property</h3>
                <p className="text-lg">
                    All content provided on <span className="underline">superguitartab.com</span>, including but not limited to text, images, PDF files, and other materials, is protected by copyright and may not be copied, distributed, or used commercially without permission from the respective rights holders.
                </p>
                <p className="text-lg mt-5">
                    You are responsible for ensuring that any downloaded sheet music is used legally and in compliance with applicable copyright laws.
                </p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">3. User Responsibilities</h3>
                <p className="text-lg">By using the site, you agree not to:</p>
                <ul className="list-disc list-inside space-y-2 mt-3 mb-5 text-lg">
                    <li>Use the site for any illegal or unauthorized purpose</li>
                    <li>Attempt to copy, scrape, or harvest large amounts of content</li>
                    <li>Interfere with the website’s performance or security</li>
                    <li>Redistribute downloaded tabs or sheet music without permission</li>
                </ul>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">4. Downloads</h3>
                <p className="text-lg">
                    PDF files and sheet music are provided for convenience. We do not guarantee their accuracy, completeness, or legal status. Downloads are for personal use only and may not be resold or distributed.
                </p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">5. Third-Party Links</h3>
                <p className="text-lg">
                    This website may contain links to third-party sites. We are not responsible for the content, policies, or actions of any third-party website.
                </p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">6. Disclaimer of Warranties</h3>
                <p className="text-lg">
                    The website and its content are provided “as is” without warranties of any kind, express or implied. We do not guarantee uninterrupted access, accuracy of content, or error-free performance.
                </p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">7. Limitation of Liability</h3>
                <p className="text-lg">
                    To the maximum extent permitted by law, we are not liable for any damages arising from your use of the website, including downloads, browsing, or reliance on provided content.
                </p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">8. Changes to the Website or Terms</h3>
                <p className="text-lg">
                    We may update, modify, or remove content on the website at any time. We may also update these Terms, and your continued use of the website signifies acceptance of the updated Terms.
                </p>
            </div>

            <div className="flex flex-col mt-12">
                <h3 className="text-3xl font-semibold mb-5">9. Governing Law</h3>
                <p className="text-lg">
                    These Terms are governed by the laws of your local jurisdiction, without regard to conflict of law principles.
                </p>
            </div>

            {/* <div className="flex flex-col mt-12 mb-16">
                <h3 className="text-3xl font-semibold mb-5">10. Contact Us</h3>
                <p className="text-lg">
                    If you have questions about these Terms, contact us at:{" "}
                    <a className="link" href="mailto:your@email.com">
                        your@email.com
                    </a>
                </p>
            </div> */}
        </div>
    )
}