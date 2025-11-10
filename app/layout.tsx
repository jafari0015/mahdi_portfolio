import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme_provider";
import Header from "@/components/header/header";
import LenisProvider from "@/components/provider/lenis-provider";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mahdi Jafari | Portfolio",
  description: "The portfolio of Mahdi Jafari – Web Developer, UI/UX Designer, and Creative Technologist.",
  keywords: ["Mahdi Jafari", "portfolio", "web developer", "UI/UX designer", "frontend developer", "React", "Next.js"],
  authors: [{ name: "Mahdi Jafari", url: "https://yourwebsite.com" }],
  creator: "Mahdi Jafari",
  publisher: "Mahdi Jafari",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6FFF8" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Mahdi Jafari | Portfolio",
    description: "The portfolio of Mahdi Jafari – Web Developer, UI/UX Designer, and Creative Technologist.",
    url: "https://yourwebsite.com",
    siteName: "Mahdi Jafari Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahdi Jafari Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahdi Jafari | Portfolio",
    description: "The portfolio of Mahdi Jafari – Web Developer, UI/UX Designer, and Creative Technologist.",
    siteId: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${afacad.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <LenisProvider>
            <main className="flex-1">{children}</main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
