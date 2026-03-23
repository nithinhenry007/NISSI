"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    const links = [
        { name: "Home", href: "/", hasDropdown: false },
        { name: "Products", href: "/products", hasDropdown: false }, // Simplified for mobile/simplicity
        { name: "About", href: "/about", hasDropdown: false },
        { name: "Contact", href: "/contact", hasDropdown: false },
    ];

    return (
        <header className="fixed top-0 left-0 w-full p-4 md:p-6 z-50 flex justify-center pointer-events-none">
            <div className="bg-[#F8F9FA] rounded-xl px-4 md:px-6 py-3 flex items-center justify-between w-full max-w-[1400px] shadow-sm border border-slate-100 pointer-events-auto">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center md:flex-1 shrink-0">
                    <Image
                        src="/134 34.svg"
                        alt="Nissi FRP Logo"
                        width={180}
                        height={60}
                        className="object-contain w-[130px] sm:w-[150px] md:w-[180px] h-auto"
                    />
                </Link>

                {/* Center: Links */}
                <nav className="hidden md:flex items-center justify-center gap-10">
                    {links.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-1 text-[17px] font-medium text-slate-700 hover:text-black transition-colors"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right: Actions (Desktop) */}
                <div className="hidden lg:flex items-center justify-end gap-4 flex-1">
                    <Link href="/contact" className="bg-[#111111] hover:bg-black text-white text-[17px] font-medium px-5 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors">
                        Get quote
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href="tel:+919381671364" className="bg-white hover:bg-gray-50 text-slate-900 border border-slate-200 text-[17px] font-medium px-5 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm">
                        Call us
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-[60] pt-32 px-6 flex flex-col pointer-events-auto overflow-y-auto animate-in fade-in slide-in-from-top duration-300">
                    <div className="flex flex-col gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-4xl font-bold text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center group"
                            >
                                {link.name}
                                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto py-12 flex flex-col gap-4">
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-[#111111] text-white text-center py-5 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3"
                        >
                            Get Professional Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:+919381671364"
                            className="bg-white border border-slate-200 text-slate-900 text-center py-5 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3"
                        >
                            Call Factory Direct <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
