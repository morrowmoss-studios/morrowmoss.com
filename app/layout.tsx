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
        <body className="text-moss-light font-sans">
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/forest-bg.png')" }}
        >
            {/* Light overlay to lift darks */}
            <div className="absolute inset-0 bg-white/15 z-0" />

            {/* LIGHTNING BUGS */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {[...Array(35)].map((_, i) => {
                    let duration = '4s'; // default
                    if (i < 12) duration = '2s';
                    else if (i < 24) duration = '4s';
                    else duration = '6s';
                    return (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-[#FDE68A] rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `twinkle ${duration} infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    );
                })}
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-20 flex flex-col min-h-screen">
                {/* HEADER */}
                <header className="flex flex-col sm:flex-row items-center justify-between p-6 space-y-4 sm:space-y-0 border-b border-moss-faint">
                    <div className="flex items-center space-x-4">
                        <Image src="/LogoOnly.png" alt="Morrowmoss logo" width={50} height={50} />
                        <span className="text-xl font-bold text-moss-light">Morrowmoss</span>
                    </div>
                    <nav className="flex flex-wrap justify-center space-x-6 text-moss-light">
                        <Link href="/" className="hover:text-[#CCDCFD] hover:drop-shadow-[0_0_5px_#CCDCFD] transition duration-300">Home</Link>
                        <Link href="/creations" className="hover:text-[#CCDCFD] hover:drop-shadow-[0_0_5px_#CCDCFD] transition duration-300">Creations</Link>
                        <Link href="/blog" className="hover:text-[#CCDCFD] hover:drop-shadow-[0_0_5px_#CCDCFD] transition duration-300">Blog</Link>
                        <Link href="/about" className="hover:text-[#CCDCFD] hover:drop-shadow-[0_0_5px_#CCDCFD] transition duration-300">About</Link>
                        <Link href="/contact" className="hover:text-[#CCDCFD] hover:drop-shadow-[0_0_5px_#CCDCFD] transition duration-300">Contact</Link>
                    </nav>
                </header>

                {/* PAGE CONTENT */}
                <main className="flex-grow container mx-auto px-6 py-12">
                    {children}
                </main>

                {/* FOOTER */}
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:fill-[#CCDCFD]">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
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
            </div>
        </div>
        </body>
        </html>
    );
}
