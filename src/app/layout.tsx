import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joey & Nikki Are Getting Married!",
  description: "Made with <3 by Joey & Nikki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}


const styles = {
  body: classNames(
      raleway.className,
      "min-h-screen",
      "bg-peacock",
      "text-jadeite-100",
      "grid grid-cols-12",
  )
}