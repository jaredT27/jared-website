import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jared Theaman | Product, Programs, AI Workflows",
  description: "Launches, dashboards, and AI workflows that actually ship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
