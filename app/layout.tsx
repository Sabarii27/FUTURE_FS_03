
import './globals.css';
import type { Metadata } from 'next';
import Providers from "./providers";

export const metadata: Metadata = {
  title: 'Starbucks - Every Sip Tells a Story',
  description: 'Experience the world\'s finest coffee with Starbucks. From ethically sourced beans to sustainable practices, discover a coffee journey like no other.',
  keywords: 'starbucks, coffee, premium coffee, sustainability, community, espresso, coffee beans',
  authors: [{ name: 'Starbucks Corporation' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter antialiased">
        <Providers>
          {children}
          {/* Dynamically import ScrollToTopButton to avoid client component import at top level */}
        </Providers>
      </body>
    </html>
  );
}