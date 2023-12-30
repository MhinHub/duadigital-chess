import type { Metadata, Viewport } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900", "300", "400", "700", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "SCC Grand Prix Blitz",
    template: "%s | SCC Grand Prix Blitz",
  },
  description: "A simple web app to visualize the most common chess openings.",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "SCC Grand Prix Blitz",
    statusBarStyle: "black-translucent",
  },
  applicationName: "SCC Grand Prix Blitz",
  keywords: ["chess", "opening", "visualization", "grand prix", "blitz"],
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon-32x32.png",
      type: "image/png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicon-16x16.png",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      color: "#f83813",
      url: "/safari-pinned-tab.svg",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#f83813",
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
