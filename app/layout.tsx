import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
    title: "Morrowmoss Studios",
    description: "Handcrafting fae-touched worlds and queer-centered adventures.",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-moss DEFAULT text-moss-light font-sans flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="flex items-center justify-between p-6 border-b border-moss-faint">
            <div className="flex items-center space-x-4">
                <Image src="/LogoOnly.png" alt="Morrowmoss logo" width={50} height={50} />
                <span className="text-xl font-bold text-moss-light">Morrowmoss</span>
            </div>
            <nav className="flex space-x-6 text-moss-light">
                <Link href="/">Home</Link>
                <Link href="/creations">Creations</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-grow container mx-auto px-6 py-12">
            {children}
        </main>

        {/* FOOTER */}
        <footer className="text-center text-sm text-moss-faint py-6 border-t border-moss-faint">
            © {new Date().getFullYear()} Morrowmoss Studios. All rights reserved.
        </footer>
        </body>
        </html>
    );
}
