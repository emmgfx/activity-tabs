import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "activity-tabs — React tabs that preserve state",
  description:
    "Headless React tabs component that keeps panel state alive when switching tabs, built on React Activity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
