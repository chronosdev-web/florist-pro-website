import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-icon">🌸</div>
            Florist <span>Pro</span>
          </Link>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#payments">Payments</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">🌿 Built for Florists, by Florists</div>
            <h1>Run Your Floral Business <em>Effortlessly</em></h1>
            <p className="hero-subtitle">
              Florist Pro is the all-in-one mobile app that lets you manage orders,
              track inventory, and accept payments — so you can focus on creating
              beautiful arrangements.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Get Started →
              </a>
              <a href="#features" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <Image
              src="/hero-bg.png"
              alt="Beautiful floral arrangement"
              width={500}
              height={625}
              className="hero-image"
              priority
            />
            <div className="hero-float-card card-1">
              <div className="float-card-icon green">📦</div>
              <div>
                <div className="float-card-label">Today&apos;s Orders</div>
                <div className="float-card-value">12 Orders</div>
              </div>
            </div>
            <div className="hero-float-card card-2">
              <div className="float-card-icon purple">💳</div>
              <div>
                <div className="float-card-label">Payment Received</div>
                <div className="float-card-value">$1,240.00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Features</div>
            <h2>Everything You Need to Grow Your Flower Business</h2>
            <p>From order management to inventory tracking and secure payments — Florist Pro has it all.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon purple">📋</div>
              <h3>Order Management</h3>
              <p>Create, track, and manage orders with ease. Set delivery dates, add special instructions, and keep your customers happy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon sage">🌿</div>
              <h3>Inventory Tracking</h3>
              <p>Keep track of your loose flowers, premade arrangements, and supplies. Never run out of stock during peak season.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon rose">💳</div>
              <h3>Secure Payments</h3>
              <p>Accept payments through Stripe, PayPal, and Square. All sensitive payment data is handled securely by the payment processors.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon gold">👥</div>
              <h3>Employee Management</h3>
              <p>Invite employees to help manage orders and inventory. Control access with security PINs and role-based permissions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon blue">🌍</div>
              <h3>Multi-Language Support</h3>
              <p>Serve customers worldwide with support for dozens of languages. Your entire app adapts to your preferred language.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon indigo">📊</div>
              <h3>Tax Calculations</h3>
              <p>Built-in sales tax calculations that work with all payment processors. Set your local tax rate and let the app handle the rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">How It Works</div>
            <h2>Up and Running in Minutes</h2>
            <p>Getting started with Florist Pro is simple — no technical expertise required.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Download the App</h3>
              <p>Get Florist Pro from the App Store or Google Play. Create your account in seconds.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Connect Payments</h3>
              <p>Link your Stripe, PayPal, or Square account. We redirect you to their secure portal — we never see your credentials.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Start Selling</h3>
              <p>Add your inventory, create orders, and start accepting payments. Manage your entire floral business from your phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section className="payments" id="payments">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Payments</div>
            <h2>Trusted Payment Partners</h2>
            <p>We partner with industry-leading payment processors to keep your transactions secure. All sensitive payment data is handled directly by the payment provider — never by us.</p>
          </div>
          <div className="payments-logos">
            <div className="payment-logo">
              <div className="payment-logo-icon stripe">S</div>
              <span>Stripe</span>
            </div>
            <div className="payment-logo">
              <div className="payment-logo-icon paypal">P</div>
              <span>PayPal</span>
            </div>
            <div className="payment-logo">
              <div className="payment-logo-icon square">□</div>
              <span>Square</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="cta-inner">
          <h2>Ready to Transform Your Floral Business?</h2>
          <p>Join florists who are saving hours every week with Florist Pro. Download the app and start your free trial today.</p>
          <a href="mailto:support@floristproapp.com" className="btn-white">
            Contact Us →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Florist <span>Pro</span></div>
            <p className="footer-desc">
              The all-in-one mobile app for florists. Manage your orders, inventory, and payments — all from one place.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#payments">Payments</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><a href="mailto:support@floristproapp.com">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Florist Pro. All rights reserved.</span>
          <span>Made with 🌸 for florists everywhere</span>
        </div>
      </footer>
    </>
  );
}
