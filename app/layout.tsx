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
