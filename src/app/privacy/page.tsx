import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — Florist Pro",
    description: "Learn how Florist Pro collects, uses, and protects your data.",
};

export default function PrivacyPolicy() {
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
                        <li><Link href="/terms">Terms</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="legal-page">
                <div className="legal-content">
                    <h1>Privacy Policy</h1>
                    <p className="legal-date">Last updated: March 4, 2026</p>

                    <p>
                        Florist Pro (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard
                        your information when you use our mobile application and related services.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly to us when you:</p>
                    <ul>
                        <li>Create an account (email address and password)</li>
                        <li>Set up your business profile</li>
                        <li>Create and manage orders</li>
                        <li>Add inventory items (including images)</li>
                        <li>Configure payment processor connections</li>
                        <li>Invite employees to your organization</li>
                    </ul>

                    <h2>2. Payment Information</h2>
                    <p>
                        <strong>We do not store or process sensitive payment information.</strong> When you
                        connect a payment processor (Stripe, PayPal, or Square), you are redirected to
                        that provider&apos;s secure portal to authorize the connection. All payment card
                        numbers, bank account details, and financial credentials are handled exclusively
                        by the respective payment processor. We only store a connection token from
                        these services to facilitate transactions on your behalf.
                    </p>

                    <h2>3. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process orders and manage your inventory</li>
                        <li>Facilitate payment processing through third-party providers</li>
                        <li>Send you technical notices and support messages</li>
                        <li>Respond to your comments and questions</li>
                    </ul>

                    <h2>4. Data Storage and Security</h2>
                    <p>
                        Your data is stored securely using Supabase, which provides enterprise-grade
                        security including encryption at rest and in transit, row-level security
                        policies, and regular security audits. We implement appropriate technical
                        and organizational measures to protect your personal information.
                    </p>

                    <h2>5. Third-Party Services</h2>
                    <p>Our app integrates with the following third-party services:</p>
                    <ul>
                        <li><strong>Stripe</strong> — Payment processing (<a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a>)</li>
                        <li><strong>PayPal</strong> — Payment processing (<a href="https://www.paypal.com/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer">PayPal Privacy Policy</a>)</li>
                        <li><strong>Square</strong> — Point of sale and payment processing (<a href="https://squareup.com/us/en/legal/general/privacy" target="_blank" rel="noopener noreferrer">Square Privacy Policy</a>)</li>
                        <li><strong>Supabase</strong> — Backend infrastructure and database (<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a>)</li>
                    </ul>

                    <h2>6. Data Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties.
                        We may share information only in the following circumstances:
                    </p>
                    <ul>
                        <li>With payment processors to facilitate transactions you authorize</li>
                        <li>With employees you invite to access your organization</li>
                        <li>When required by law or to protect our rights</li>
                    </ul>

                    <h2>7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal data</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Export your data</li>
                        <li>Disconnect payment processor connections at any time</li>
                    </ul>

                    <h2>8. Children&apos;s Privacy</h2>
                    <p>
                        Florist Pro is not intended for use by children under 13 years of age.
                        We do not knowingly collect personal information from children under 13.
                    </p>

                    <h2>9. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you
                        of any changes by posting the new Privacy Policy on this page and updating
                        the &quot;Last updated&quot; date.
                    </p>

                    <h2>10. Contact Us</h2>
                    <p>
                        If you have questions about this Privacy Policy, please contact us at:
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
