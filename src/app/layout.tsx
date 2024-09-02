import type {Metadata} from "next";
import {Raleway} from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import classNames from "classnames";

const raleway = Raleway({subsets: ["latin"]});
const gilroy = localFont({
    src: [
        {path: "fonts/Gilroy-ExtraBold.otf", weight: "800", style: "normal"},
        {path: "fonts/Gilroy-Light.otf", weight: "300", style: "normal"},
    ],
    variable: '--font-gilroy',
});

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
        gilroy.variable,
        raleway.className,
        "min-h-screen",
        "bg-peacock",
        "text-jadeite-100",
    )
}