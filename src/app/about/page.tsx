"use client";

import Link from "next/link";
import { ArrowRight, Zap, Target, FileText, Handshake, Droplets, ThermometerSun, Bug, Scale, Palette } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-40 pb-20 selection:bg-[#0EA5E9] selection:text-white bg-slate-50">

            {/* Full Bleed Image Hero */}
            <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center -mt-40 mb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/kk.png"
                        alt="Background Image representing Nissi FRP"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Add an overlay to ensure text remains readable */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="container relative z-10 mx-auto max-w-[1400px] px-6 text-center pt-32">
                    <p className="text-[#38BDF8] text-sm md:text-base tracking-[0.3em] font-bold mb-6 uppercase drop-shadow-md">Our Story</p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-bold leading-[1.1] tracking-tight text-white drop-shadow-xl mb-10 max-w-5xl mx-auto">
                        Twenty years of making things that don&apos;t need fixing.
                    </h1>
                    <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                        Based in Hyderabad.<br />
                        Trusted across India.<br />
                        Since 2006.
                    </p>
                </div>
            </section>

            {/* Brand Story */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="bg-white text-slate-900 py-32 rounded-[3rem] mx-4 md:mx-6 mb-32 border border-slate-200 shadow-sm"
            >
                <div className="container mx-auto max-w-[1400px] px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                        <div>
                            <p className="text-[#0EA5E9] text-sm tracking-[0.2em] font-bold mb-6 uppercase">How it started</p>
                            <h2 className="text-4xl md:text-5xl font-sans font-semibold leading-tight tracking-tight mb-12">
                                We started because<br />we were tired of things<br />breaking down.
                            </h2>
                        </div>
                        <div className="space-y-8 text-lg md:text-xl font-medium leading-relaxed text-slate-600">
                            <p>Nissi FRP Products was founded in 2006 in Hyderabad with one simple belief — people deserve products that actually last. We started with FRP doors and slowly grew into beds and planters as clients kept asking for the same durability everywhere.</p>
                            <p>Over twenty years, we&apos;ve worked with hospitals, hotel chains, hostels, landscaping firms, and individual homeowners. Every order — big or small — is treated with the same attention to quality and detail. That hasn&apos;t changed since day one.</p>
                            <p className="text-slate-900 font-semibold">We&apos;re not the biggest manufacturer in India. But we might be the most stubborn about quality. Every product that leaves our facility is something we&apos;d install in our own home.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Timeline */}
            <section className="container mx-auto max-w-[1400px] px-6 mb-40 relative">
                <div className="text-center mb-16">
                    <p className="text-[#0EA5E9] text-sm tracking-[0.2em] font-bold mb-4 uppercase">Our Journey</p>
                    <h2 className="text-4xl md:text-5xl font-sans font-semibold text-slate-900 tracking-tight">Two decades of building<br />things that last.</h2>
                </div>

                {/* Journey Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[21/9] max-h-[500px] mb-32 rounded-[3rem] overflow-hidden shadow-2xl border border-[#E0F2FE]"
                >
                    <Image
                        src="/about.png"
                        alt="Nissi FRP Facility and Team"
                        fill
                        className="object-cover"
                    />
                    {/* Blue gradient overlay for image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9]/20 to-transparent mix-blend-overlay pointer-events-none" />
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vibrant Gradient Timeline Line */}
                    <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-1 md:w-1.5 bg-gradient-to-b from-[#E0F2FE] via-[#0EA5E9] to-[#E0F2FE] -translate-x-1/2 rounded-full opacity-60" />

                    <div className="space-y-24">
                        {[
                            { year: "2006", title: "The Beginning", text: "Started with one product: FRP doors. And a very big promise." },
                            { year: "2010", title: "Rapid Growth", text: "Crossed 50 satisfied clients. Word was spreading faster than our production." },
                            { year: "2015", title: "Expanding the Line", text: "Added FRP beds and planters. Clients had been asking for years." },
                            { year: "2020", title: "Going Digital", text: "Went online. Started reaching clients across India." },
                            { year: "2026", title: "Present Day", text: "500+ projects. 0 regrets." }
                        ].map((node, i) => (
                            <motion.div
                                key={node.year}
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
                                className={`relative flex items-center md:items-start flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Glowing Timeline Node */}
                                <div className="absolute left-[27px] md:left-1/2 w-6 h-6 bg-[#0EA5E9] rounded-full -translate-x-1/2 mt-1.5 ring-8 ring-[#F0F8FF] shadow-[0_0_20px_rgba(14,165,233,0.5)] z-10" />

                                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'}`}>
                                    {/* Timeline Card */}
                                    <div className={`bg-white border border-[#bae6fd] p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.1)] transition-all group relative overflow-hidden ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>

                                        {/* Subtle hover gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br from-[#F0F8FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${i % 2 === 0 ? 'bg-gradient-to-bl' : ''}`} />

                                        <div className="relative z-10">
                                            <div className="text-[#0EA5E9] font-bold text-xl tracking-widest mb-2 font-sans">{node.year}</div>
                                            <h3 className="text-2xl font-bold font-sans tracking-tight text-slate-900 mb-4">{node.title}</h3>
                                            <p className="text-slate-600 font-medium text-lg leading-relaxed">{node.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="bg-white border-y border-slate-200 py-32 mb-32 shadow-sm"
            >
                <div className="container mx-auto max-w-[1400px] px-6">
                    <p className="text-[#0EA5E9] text-sm tracking-[0.2em] font-medium mb-16 uppercase text-center">What we stand for</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8">
                            <Zap className="w-8 h-8 text-[#0EA5E9] mb-6" />
                            <h3 className="text-xl font-semibold mb-4 text-slate-900">No Shortcuts</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">Every product meets our internal standard before it ships. Every single time.</p>
                        </div>
                        <div className="p-8">
                            <Target className="w-8 h-8 text-[#0EA5E9] mb-6" />
                            <h3 className="text-xl font-semibold mb-4 text-slate-900">No Overselling</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">We tell you what you need, not what sounds impressive.</p>
                        </div>
                        <div className="p-8">
                            <FileText className="w-8 h-8 text-[#0EA5E9] mb-6" />
                            <h3 className="text-xl font-semibold mb-4 text-slate-900">No Fine Print</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">20-year warranty means 20 years. Simple as that.</p>
                        </div>
                        <div className="p-8">
                            <Handshake className="w-8 h-8 text-[#0EA5E9] mb-6" />
                            <h3 className="text-xl font-semibold mb-4 text-slate-900">No Ego</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">Small order or large, you get the same attention and same quality.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Stats Bar */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="container mx-auto max-w-[1400px] px-6 py-12 md:py-20 flex flex-wrap justify-between grid grid-cols-2 md:flex md:flex-wrap justify-between gap-8 md:gap-12 border-b border-slate-200 text-slate-900"
            >
                <div className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-bold mb-1 md:mb-2">20yr</span>
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] md:text-sm font-bold">Structural Warranty</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-bold mb-1 md:mb-2">₹0</span>
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] md:text-sm font-bold">Maintenance Cost</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-bold mb-1 md:mb-2 text-[#0EA5E9]">48hr</span>
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] md:text-sm font-bold">Quote-to-Spec</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl md:text-6xl font-bold mb-1 md:mb-2 text-[#0EA5E9]">2006</span>
                    <span className="text-slate-500 uppercase tracking-widest text-[10px] md:text-sm font-bold">Year Founded</span>
                </div>
            </motion.section>

            {/* Features */}
            <section className="container mx-auto max-w-[1400px] px-6 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <p className="text-[#0EA5E9] text-sm tracking-[0.2em] font-medium mb-4 uppercase">Why FRP Wins</p>
                    <h2 className="text-4xl md:text-6xl font-sans font-semibold leading-tight tracking-tight text-slate-900">The material that<br />changes everything.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {[
                        { icon: <Droplets className="w-8 h-8" />, stat: "0% Water Absorption", label: "Waterproof", desc: "Not water-resistant. Waterproof. Zero absorption. Safe in all weather, always." },
                        { icon: <ThermometerSun className="w-8 h-8" />, stat: "Tested at 50°C", label: "Climate-Ready", desc: "Built for Indian heat, humidity, coastal salt air, and monsoon downpours." },
                        { icon: <Bug className="w-8 h-8" />, stat: "0% Pest Damage", label: "Termite-Free", desc: "No pest has ever damaged FRP. Not once. Never will." },
                        { icon: <Scale className="w-8 h-8" />, stat: "70% Lighter", label: "Lightweight", desc: "70% lighter than wood. Faster to install, easier to handle." },
                        { icon: <Palette className="w-8 h-8" />, stat: "Unlimited Options", label: "Customizable", desc: "Every order is custom. Size, color, shape — entirely your call." }
                    ].map((feat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all shadow-sm"
                        >
                            <div className="text-[#0EA5E9] mb-10 w-16 h-16 rounded-full bg-[#F0F8FF] flex items-center justify-center">{feat.icon}</div>
                            <h3 className="text-2xl font-bold mb-2 text-slate-900">{feat.label}</h3>
                            <div className="text-slate-500 font-bold mb-4 text-sm tracking-wide">{feat.stat}</div>
                            <p className="text-base font-medium text-slate-600 leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </main>
    );
}
