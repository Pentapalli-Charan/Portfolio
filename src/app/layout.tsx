import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/shared/LoadingScreen";
import CustomCursor from "@/components/shared/CustomCursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pentapalli Charan — Software Engineer & ML Enthusiast",
    template: "%s | Pentapalli Charan",
  },
  description:
    "Personal portfolio of Pentapalli Charan — a Computer Science Engineering student specializing in Machine Learning, AI, and MLOps. Explore projects, skills, and experience.",
  keywords: [
    "Pentapalli Charan",
    "Software Engineer",
    "Machine Learning",
    "MLOps Engineer",
    "Portfolio",
    "AI Engineer",
    "Python Developer",
    "React Developer",
  ],
  authors: [{ name: "Pentapalli Charan" }],
  creator: "Pentapalli Charan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Pentapalli Charan — Software Engineer & ML Enthusiast",
    description:
      "Personal portfolio of Pentapalli Charan — CS Engineering student specializing in ML, AI, and MLOps.",
    siteName: "Pentapalli Charan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pentapalli Charan — Software Engineer & ML Enthusiast",
    description:
      "Personal portfolio of Pentapalli Charan — CS Engineering student specializing in ML, AI, and MLOps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-sans)" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LoadingScreen />
          <CustomCursor />
          <Navbar />
          <main className="flex-1" style={{ paddingTop: "var(--nav-height)", minHeight: "100vh" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
