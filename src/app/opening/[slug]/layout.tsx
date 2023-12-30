import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Result",
  description: "A graphical representation of the result of the opening.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
