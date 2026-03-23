"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    const pathname = usePathname();

    let ctaTitle = (
        <>
            Still using wood?<br className="hidden md:block" />
            Still painting metal?
        </>
    );
    let ctaSubtitle = (
        <>
            There&apos;s a better way. <br />
            And it costs less in the long run.
        </>
    );

    if (pathname === "/products") {
        ctaTitle = <>Specified something specific?<br className="hidden md:block" />We can build it.</>;
        ctaSubtitle = <>Small batch or bulk orders — if you can describe it, we can build it to spec.</>;
    } else if (pathname === "/contact") {
        ctaTitle = <>You&apos;re one message away<br className="hidden md:block" />from a 20-year solution.</>;
        ctaSubtitle = <>Technical specs and confirmed lead times included with every initial quote.</>;
    }

    return (
        <footer className="bg-slate-950 text-slate-300 py-32 border-t border-slate-800 relative overflow-hidden mt-auto px-6">
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Light Blooms */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -ml-64 -mb-64" />

            <div className="container mx-auto max-w-[1400px] relative z-10">
                {/* CTA Banner Section - Dark Glassmorphism */}
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[3rem] p-12 md:p-20 mb-32 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
                    {/* Decorative glow behind content */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                    
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold mb-8 tracking-tight text-white leading-tight">
                        {ctaTitle}
                    </h2>
                    <p className="text-slate-400 mb-12 text-lg md:text-2xl font-medium max-w-3xl">
                        {ctaSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-8">
                        <Link href="/contact" className="bg-[#0EA5E9] hover:bg-[#0284C7] shadow-lg shadow-blue-500/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 hover:scale-105">
                            Get Your Free Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a href="https://wa.me/919381671364" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3">
                            WhatsApp Us
                        </a>
                    </div>

                    <p className="text-slate-500 text-sm tracking-wide font-bold uppercase">
                        Spec sheet & lead times included with every quote.
                    </p>
                </div>

                {/* Global Footer Bottom */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 border-t border-slate-800 pt-20">
                    <div className="space-y-8">
                        <Link href="/" className="inline-block group">
                            <Image
                                src="/134 34.svg"
                                alt="Nissi FRP Logo"
                                width={220}
                                height={70}
                                className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500"
                            />
                        </Link>
                        <p className="text-slate-400 font-medium leading-relaxed max-w-xs">
                            Engineering durable, zero-maintenance FRP solutions since 2006. Outlasting the standard, every single time.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Navigation</h4>
                        <div className="grid grid-cols-1 gap-4 text-slate-400 font-bold tracking-wide">
                            <Link href="/" className="hover:text-[#0EA5E9] transition-colors inline-block">Home</Link>
                            <Link href="/products" className="hover:text-[#0EA5E9] transition-colors inline-block">Products</Link>
                            <Link href="/about" className="hover:text-[#0EA5E9] transition-colors inline-block">About</Link>
                            <Link href="/contact" className="hover:text-[#0EA5E9] transition-colors inline-block text-[#0EA5E9]">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Direct</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Telephone</p>
                                <a href="tel:+919381671364" className="block text-slate-200 hover:text-[#0EA5E9] transition-colors font-bold text-lg">
                                    +91 93816 71364
                                </a>
                                <a href="tel:+919849193332" className="block text-slate-200 hover:text-[#0EA5E9] transition-colors font-bold text-lg">
                                    +91 98491 93332
                                </a>
                            </div>
                            <div>
                                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Email</p>
                                <a href="mailto:gudipati3332@gmail.com" className="block text-slate-200 hover:text-[#0EA5E9] transition-colors font-bold text-lg break-all">
                                    gudipati3332@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Manufacturing Unit</h4>
                        <p className="text-slate-200 font-bold text-lg leading-relaxed">
                            Kcr nagar ramanthapur,<br />
                            hyderabad, telangana.
                        </p>
                        <div className="mt-8 pt-8 border-t border-slate-800">
                             <p className="text-slate-500 text-xs font-bold leading-relaxed">
                                Supplying to Telangana, AP, Karnataka, Tamil Nadu, and Maharashtra.
                             </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-32 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
                        © 2026 NISSI FRP INFRA. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-slate-600 hover:text-slate-400 text-xs font-bold uppercase tracking-widest transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-slate-600 hover:text-slate-400 text-xs font-bold uppercase tracking-widest transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
