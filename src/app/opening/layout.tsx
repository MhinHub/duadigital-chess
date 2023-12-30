"use client";

import {
  Chart,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  BarElement,
} from "chart.js";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Openings",
//   description:
//     "A graphical representation of the five most common blitz openings. Tap on a opening to see the result.",
// };

Chart.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
