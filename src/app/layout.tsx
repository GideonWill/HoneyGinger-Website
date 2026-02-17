import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Honey Ginger Drink in Accra & Tema | Natural Beverage Ghana",
  description: "Premium honey ginger drink in Accra & Tema. Natural, immune-boosting beverage for retail & wholesale.",
  icons: {
    icon: "/images/joy/logo.jpeg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Joy4Fame Instant Honey Ginger Drink",
      "image": "https://honeygingerghana.com/images/joy/logo.jpeg",
      "@id": "https://honeygingerghana.com",
      "url": "https://honeygingerghana.com",
      "telephone": "+233248511323",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Anyaa NIC Off Ablekuma road",
          "addressLocality": "Accra",
          "addressCountry": "GH"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Kantamanto Opposite Ecobank",
          "addressLocality": "Accra",
          "addressCountry": "GH"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Tema Harbour GIFF building",
          "addressLocality": "Tema",
          "addressCountry": "GH"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 5.6148,
        "longitude": -0.2058
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "Product",
      "name": "Instant Honey Ginger Drink",
      "description": "Premium natural energy drink crafted with the finest honey and fresh ginger.",
      "brand": {
        "@type": "Brand",
        "name": "Joy4Fame"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://honeygingerghana.com/pricing",
        "priceCurrency": "GHS",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
