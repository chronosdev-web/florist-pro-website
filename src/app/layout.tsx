import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Florist Pro — Smart Business Management for Florists",
  description: "The all-in-one mobile app that helps florists manage orders, inventory, and payments with ease. Accept Stripe, PayPal, and Square — all in one place.",
  keywords: "florist, flower shop, POS, point of sale, order management, inventory, Stripe, PayPal, Square, floral business",
  openGraph: {
    title: "Florist Pro — Smart Business Management for Florists",
    description: "The all-in-one mobile app for florists. Manage orders, inventory, and payments seamlessly.",
    url: "https://floristproapp.com",
    siteName: "Florist Pro",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
