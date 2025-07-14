import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
    title: "Morrowmoss Studios",
    description: "Handcrafting fae-touched worlds and queer-centered adventures.",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon.png" }
        ],
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

        {/* FOOTER WITH SOCIALS */}
        <footer className="text-center text-sm text-moss-faint py-6 border-t border-moss-faint">
            <div className="flex justify-center space-x-6 mb-4">
                <a
                    href="https://www.tiktok.com/@morrowmoss.studios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6 hover:fill-[#CCDCFD]">
                        <path d="M448 209.9c-22.1 10.2-46.2 16.1-71.5 16.1-52.6 0-98.7-26.6-126.4-66.9V324.5c0 73.9-59.7 133.8-133.8 133.8S-17 398.4-17 324.5c0-73.9 59.7-133.8 133.8-133.8 7.4 0 14.6.6 21.7 1.8v52.7c-7-.9-14.2-1.5-21.7-1.5-44.7 0-81.2 36.5-81.2 81.2s36.5 81.2 81.2 81.2 81.2-36.5 81.2-81.2V0h61.9c0 57.5 46.6 104.1 104.1 104.1 17.7 0 34.6-4.5 49.5-12.4v118.2z"/>
                    </svg>
                </a>
                <a
                    href="https://www.instagram.com/morrowmoss.studios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 hover:fill-[#CCDCFD]" viewBox="0 0 24 24">
                        <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.24 2.3.4.6.23 1 .51 1.4.95.43.43.72.84.95 1.4.17.42.35 1.1.4 2.3.08 1.3.08 1.7.08 4.9s0 3.6-.08 4.9c-.06 1.2-.24 1.9-.4 2.3-.23.6-.51 1-.95 1.4-.43.43-.84.72-1.4.95-.42.17-1.1.35-2.3.4-1.3.08-1.7.08-4.9.08s-3.6 0-4.9-.08c-1.2-.06-1.9-.24-2.3-.4-.6-.23-1-.51-1.4-.95-.43-.43-.72-.84-.95-1.4-.17-.42-.35-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.08-4.9c.06-1.2.24-1.9.4-2.3.23-.6.51-1 .95-1.4.43-.43.84-.72 1.4-.95.42-.17 1.1-.35 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.8.33-.4.15-.7.33-1 .62-.3.3-.48.6-.62 1-.13.4-.29.9-.33 1.8C4 8.5 4 8.9 4 12s0 3.5.07 4.7c.04.9.2 1.4.33 1.8.15.4.33.7.62 1 .3.3.6.48 1 .62.4.13.9.29 1.8.33 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.8-.33.4-.15.7-.33 1-.62.3-.3.48-.6.62-1 .13-.4.29-.9.33-1.8.07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.04-.9-.2-1.4-.33-1.8-.15-.4-.33-.7-.62-1-.3-.3-.6-.48-1-.62-.4-.13-.9-.29-1.8-.33-1.2-.07-1.6-.07-4.7-.07zm0 3.6a5.2 5.2 0 110 10.4 5.2 5.2 0 010-10.4zm0 1.8a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8zm5.4-.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                </a>
                <a
                    href="https://morrowmossstudios.itch.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6 hover:fill-[#CCDCFD]">
                        <path d="M64 64h384l64 64v256l-64 64H64l-64-64V128l64-64zm32 32v320h320V96H96zm240 64l48 80-48 80h-96l-48-80 48-80h96zm-24 32h-48l-24 48 24 48h48l24-48-24-48z"/>
                    </svg>
                </a>
            </div>
            © {new Date().getFullYear()} Morrowmoss Studios. All rights reserved.
        </footer>
        </body>
        </html>
    );
}
