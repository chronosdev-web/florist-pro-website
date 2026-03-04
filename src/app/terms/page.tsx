import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service — Florist Pro",
    description: "Read the terms and conditions governing the use of the Florist Pro app.",
};

export default function TermsOfService() {
    return (
        <>
            <nav className="nav">
                <div className="nav-inner">
                    <Link href="/" className="nav-logo">
                        <div className="nav-logo-icon">🌸</div>
                        Florist <span>Pro</span>
                    </Link>
                    <ul className="nav-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/privacy">Privacy</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="legal-page">
                <div className="legal-content">
                    <h1>Terms of Service</h1>
                    <p className="legal-date">Last updated: March 4, 2026</p>

                    <p>
                        Welcome to Florist Pro. By accessing or using our mobile application and
                        related services, you agree to be bound by these Terms of Service. Please
                        read them carefully.
                    </p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By creating an account or using Florist Pro, you agree to these Terms of
                        Service and our <Link href="/privacy">Privacy Policy</Link>. If you do not
                        agree to these terms, you may not use our services.
                    </p>

                    <h2>2. Description of Service</h2>
                    <p>
                        Florist Pro is a mobile application designed for florists and floral
                        businesses to:
                    </p>
                    <ul>
                        <li>Create and manage customer orders</li>
                        <li>Track floral inventory</li>
                        <li>Process payments through third-party payment processors</li>
                        <li>Manage employees and business settings</li>
                        <li>Calculate and apply sales tax</li>
                    </ul>

                    <h2>3. Account Responsibilities</h2>
                    <p>You are responsible for:</p>
                    <ul>
                        <li>Maintaining the confidentiality of your account credentials</li>
                        <li>All activity that occurs under your account</li>
                        <li>Ensuring the accuracy of information you provide</li>
                        <li>Managing access for employees you invite to your organization</li>
                        <li>Setting and maintaining your security PIN if enabled</li>
                    </ul>

                    <h2>4. Payment Processing</h2>
                    <p>
                        Florist Pro facilitates payment processing through third-party providers
                        including Stripe, PayPal, and Square. By using these services through our app:
                    </p>
                    <ul>
                        <li>You agree to the respective payment processor&apos;s terms and conditions</li>
                        <li>You understand that Florist Pro does not process, store, or have access to sensitive payment credentials</li>
                        <li>You are responsible for your own merchant account with each payment processor</li>
                        <li>Transaction fees charged by payment processors are your responsibility</li>
                        <li>You must comply with all applicable financial regulations in your jurisdiction</li>
                    </ul>

                    <h2>5. Tax Calculations</h2>
                    <p>
                        Florist Pro provides sales tax calculation tools as a convenience. You are
                        solely responsible for:
                    </p>
                    <ul>
                        <li>Setting the correct tax rate for your jurisdiction</li>
                        <li>Ensuring compliance with local, state, and federal tax laws</li>
                        <li>Filing and remitting taxes to the appropriate authorities</li>
                    </ul>
                    <p>
                        Florist Pro does not provide tax advice and is not responsible for any
                        tax-related errors or omissions.
                    </p>

                    <h2>6. User Content</h2>
                    <p>
                        You retain ownership of all content you upload to Florist Pro, including
                        product images, order details, and business information. By uploading content,
                        you grant us a limited license to store and display it within the app to
                        provide our services.
                    </p>

                    <h2>7. Prohibited Uses</h2>
                    <p>You agree not to:</p>
                    <ul>
                        <li>Use the service for any illegal purpose</li>
                        <li>Process payments for prohibited goods or services</li>
                        <li>Attempt to gain unauthorized access to other users&apos; accounts</li>
                        <li>Interfere with or disrupt the service</li>
                        <li>Reverse engineer the application</li>
                    </ul>

                    <h2>8. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Florist Pro shall not be liable
                        for any indirect, incidental, special, consequential, or punitive damages,
                        including but not limited to loss of profits, data, or business opportunities,
                        arising out of or in connection with your use of the service.
                    </p>

                    <h2>9. Service Availability</h2>
                    <p>
                        We strive to maintain reliable service but do not guarantee uninterrupted
                        availability. We may modify, suspend, or discontinue any part of the
                        service at any time with reasonable notice.
                    </p>

                    <h2>10. Termination</h2>
                    <p>
                        We may suspend or terminate your account if you violate these terms.
                        You may delete your account at any time through the app settings. Upon
                        termination, your data will be deleted in accordance with our Privacy Policy.
                    </p>

                    <h2>11. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. Continued use of
                        the service after changes constitutes acceptance of the updated terms.
                    </p>

                    <h2>12. Contact</h2>
                    <p>
                        For questions about these Terms of Service, please contact:
                    </p>
                    <p>
                        <strong>Email:</strong> <a href="mailto:support@floristproapp.com">support@floristproapp.com</a><br />
                        <strong>Website:</strong> <a href="https://floristproapp.com">floristproapp.com</a>
                    </p>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-bottom" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
                    <span>© {new Date().getFullYear()} Florist Pro. All rights reserved.</span>
                    <span>
                        <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
                    </span>
                </div>
            </footer>
        </>
    );
}
