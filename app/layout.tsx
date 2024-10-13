// Import necessary modules
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Responcivena from "@/components/_components/Navbar/Responcivena";
import Footer from "@/components/_components/Footer/Footer";
import ScrollToTop from "@/components/_components/ScrollToTop/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import Head from "next/head"; // Import Head component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Dopyapp Agency - Software Development & Marketing",
  description:
    "Dopyapp agency provides top-notch software development and digital marketing services.",
  keywords:
    "Frontend, React JS, Next JS, HTML, CSS, JavaScript, Bootstrap, Material UI, Vue JS, Tailwind CSS, Sass, Backend, Node JS, Express JS, MySQL, MongoDB, Firebase, Strapi, Sanity, Payload, DevOps, AWS, Google Cloud, Hostinger, CloudPanel, Nginx, VPS Server, Ubuntu, Plesk, React Native, XML, Android Studio, Git, GitHub, VS Code, Postman, Figma, WordPress, WooCommerce, Jetpack, HubSpot, Elementor, SEO, Google Console, Yoast SEO, Mailchimp, Google Maps, Merchant Center, Google Shopping, Google Analytics",
  openGraph: {
    title: "Dopyapp Agency - Software Development & Marketing",
    description:
      "Dopyapp agency provides top-notch software development and digital marketing services.",
    url: "https://dopyappagency.com", // Replace with your site URL
    siteName: "Dopyapp Agency",
    images: [{ url: "/logo.png" }], // Ensure the logo is available in the public folder
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dopyapp", // Replace with your Twitter handle
    title: "Dopyapp Agency - Software Development & Marketing",
    description:
      "Dopyapp agency provides top-notch software development and digital marketing services.",
    creator: "@dopyapp", // Replace with the author/creator's Twitter handle
    images: ["/logo.png"], // Ensure the logo is available in the public folder
  },
};

// In your RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "orange",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>

        <Responcivena />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
