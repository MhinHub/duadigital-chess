import type { Metadata } from "next";
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
