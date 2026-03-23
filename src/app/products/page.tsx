"use client";

import Link from "next/link";
import { ArrowRight, Check, Hotel, Hospital, School, Factory, Waves, Building, Bed, TreePine, Home } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-40 pb-20 selection:bg-[#0EA5E9] selection:text-white bg-white">

            {/* Premium Dark Hero */}
            <section className="relative w-full overflow-hidden bg-slate-900 text-white rounded-b-[4rem] mb-32 -mt-40 pt-72 pb-32">
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0EA5E9]/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#38BDF8]/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container relative z-10 mx-auto max-w-[1400px] px-6"
                >
                    <p className="text-[#38BDF8] text-sm tracking-[0.3em] font-bold mb-8 uppercase drop-shadow-sm">NISSI FRP Products</p>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-7">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-sans font-bold leading-[1.05] tracking-tight text-white mb-8 drop-shadow-xl">
                                Built once.<br />
                                Built right.
                            </h1>
                        </div>
                        <div className="lg:col-span-5 flex flex-col justify-end pb-4">
                            <div className="py-6 px-8 border-l-2 border-[#0EA5E9] bg-white/5 backdrop-blur-sm rounded-r-3xl">
                                <p className="text-slate-300 text-xl md:text-2xl font-medium leading-relaxed">
                                    Three specialized products.<br />
                                    One uncompromising standard.<br />
                                    <span className="text-white font-bold mt-2 inline-block">Zero regrets.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <div className="space-y-32">
                {/* Product 1 — FRP Doors */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto max-w-[1400px] px-6"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Visual Side - Sticky on Desktop */}
                        <div className="lg:sticky lg:top-40 self-start">
                            <div className="bg-white aspect-[4/3] rounded-[3rem] p-4 flex flex-col items-center justify-center border border-[#E0F2FE] relative overflow-hidden group shadow-[0_20px_60px_-15px_rgba(14,165,233,0.15)] hover:shadow-[0_30px_70px_-15px_rgba(14,165,233,0.3)] transition-all duration-700">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F0F8FF] via-white to-transparent opacity-80 z-0" />
                                <Image
                                    src="/1.png"
                                    alt="FRP Doors"
                                    fill
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 rounded-[2.5rem] relative z-10 shadow-inner"
                                />
                            </div>
                        </div>
                        {/* Content Side */}
                        <div>
                            <p className="text-[#0EA5E9] text-sm tracking-[0.3em] font-bold mb-4 uppercase">Product 01</p>
                            <h2 className="text-5xl md:text-6xl font-sans font-bold leading-tight tracking-tight mb-8 text-slate-900">
                                FRP Doors —<br />The last door<br />you&apos;ll ever install.
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed space-y-6 mb-10 text-lg md:text-xl">
                                <p>Wood warps. Metal rusts. PVC yellows. <span className="text-slate-900 font-bold">FRP just doesn&apos;t.</span></p>
                                <p>Built for the worst India can throw at them — coastal humidity, monsoon floods, 50°C summers, and decades of daily use. They&apos;ll still be standing when everything around them has been replaced twice.</p>
                            </div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                                className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12"
                            >
                                {['Never Warps', 'Never Rusts', 'Fire-Retardant', 'Custom Sizes', '15+ Yr Lifespan', 'Easy Install'].map((pill, idx) => (
                                    <motion.span
                                        key={pill}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="text-[10px] md:text-xs font-bold text-[#0284C7] uppercase tracking-wider bg-[#F0F8FF] border border-[#bae6fd] px-3 md:px-5 py-1.5 md:py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
                                    >
                                        {pill}
                                    </motion.span>
                                ))}
                            </motion.div>

                            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.1)] transition-shadow mb-12">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-[#0EA5E9] mb-8 flex items-center gap-3">
                                    <div className="w-8 h-px bg-[#0EA5E9]" />
                                    Where They Go
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { label: 'Luxury Hotels', desc: 'Bathroom doors for heavy cleaning.', icon: <Hotel className="w-5 h-5 text-[#0EA5E9]" /> },
                                        { label: 'Hospitals', desc: ' heavy impact resistant.', icon: <Hospital className="w-5 h-5 text-[#0EA5E9]" /> },
                                        { label: 'Hostels', desc: 'Low-maintenance housing.', icon: <Bed className="w-5 h-5 text-[#0EA5E9]" /> },
                                        { label: 'Cold Storage', desc: 'Thermal integrity.', icon: <Factory className="w-5 h-5 text-[#0EA5E9]" /> },
                                        { label: 'Coastal', desc: 'Saltwater-proof.', icon: <Waves className="w-5 h-5 text-[#0EA5E9]" /> }
                                    ].map((item) => (
                                        <div key={item.label} className="bg-slate-50 p-4 rounded-xl flex flex-col gap-3 group hover:bg-[#F0F8FF] transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div>
                                            <div>
                                                <div className="font-bold text-slate-900 text-sm mb-1">{item.label}</div>
                                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-8 text-slate-900 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <div>
                                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-1">Starting At</span>
                                    <span className="text-4xl font-bold">₹8,000</span>
                                </div>
                                <Link href="/contact" className="ml-auto bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:bg-[#0EA5E9] hover:scale-105 px-8 py-5 rounded-full font-bold transition-all duration-300 flex items-center gap-3">
                                    Request a Quote <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                {/* Product 2 — FRP Beds */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto max-w-[1400px] px-6"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Content Side */}
                        <div className="order-2 lg:order-1">
                            <p className="text-[#0EA5E9] text-sm tracking-[0.3em] font-bold mb-4 uppercase">Product 02</p>
                            <h2 className="text-5xl md:text-6xl font-sans font-bold leading-tight tracking-tight mb-8 text-slate-900">
                                FRP Beds —<br />Built for spaces that<br />demand the best.
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed space-y-6 mb-10 text-lg md:text-xl">
                                <p>If a bed breaks down in a hospital ward, it&apos;s not an inconvenience — <span className="text-slate-900 font-bold">it&apos;s a liability.</span></p>
                                <p>Our beds are made for high-pressure environments where hygiene and strength aren&apos;t optional. Rust-free. Termite-proof. Sanitize them daily for ten years and they&apos;ll look brand new.</p>
                            </div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                                className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12"
                            >
                                {['Medical-Grade', 'Rust-Free', 'Termite-Proof', 'Bulk Supply', 'Lightweight', 'Daily Sanitizable'].map((pill, idx) => (
                                    <motion.span
                                        key={pill}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="text-[10px] md:text-xs font-bold text-[#0284C7] uppercase tracking-wider bg-[#F0F8FF] border border-[#bae6fd] px-3 md:px-5 py-1.5 md:py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
                                    >
                                        {pill}
                                    </motion.span>
                                ))}
                            </motion.div>

                            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.1)] transition-shadow mb-12">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-[#0EA5E9] mb-8 flex items-center gap-3">
                                    <div className="w-8 h-px bg-[#0EA5E9]" />
                                    Where They Go
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { label: 'Hospitals/ICUs', desc: 'Daily wash-down proof.', icon: <Hospital className="w-5 h-5 text-[#0EA5E9]" /> },
                                        { label: 'Industrial', desc: 'Extreme staff durability.', icon: <Factory className="w-5 h-5 text-[#0EA5E9]" /> },
                                        { label: 'Pharma Units', desc: 'Zero microbial growth.', icon: <Building className="w-5 h-5 text-[#0EA5E9]" /> }
                                    ].map((item) => (
                                        <div key={item.label} className="bg-slate-50 p-4 rounded-xl flex flex-col gap-3 group hover:bg-[#F0F8FF] transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div>
                                            <div>
                                                <div className="font-bold text-slate-900 text-sm mb-1">{item.label}</div>
                                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-8 text-slate-900 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <div>
                                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-1">Starting At</span>
                                    <span className="text-4xl font-bold">₹30,000</span>
                                </div>
                                <Link href="/contact" className="ml-auto bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:bg-[#0EA5E9] hover:scale-105 px-8 py-5 rounded-full font-bold transition-all duration-300 flex items-center gap-3">
                                    Request a Quote <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Visual Side - Sticky on Desktop */}
                        <div className="order-1 lg:order-2 lg:sticky lg:top-40 self-start">
                            <div className="bg-white aspect-[4/3] rounded-[3rem] p-4 flex flex-col items-center justify-center border border-[#E0F2FE] relative overflow-hidden group shadow-[0_20px_60px_-15px_rgba(14,165,233,0.15)] hover:shadow-[0_30px_70px_-15px_rgba(14,165,233,0.3)] transition-all duration-700">
                                <div className="absolute inset-0 bg-gradient-to-bl from-[#F0F8FF] via-white to-transparent opacity-80 z-0" />
                                <Image
                                    src="/3.png"
                                    alt="FRP Beds"
                                    fill
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 rounded-[2.5rem] relative z-10 shadow-inner"
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                {/* Product 3 — FRP Planters */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto max-w-[1400px] px-6"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Visual Side - Sticky on Desktop */}
                        <div className="lg:sticky lg:top-40 self-start">
                            <div className="bg-white aspect-[4/3] rounded-[3rem] p-4 flex flex-col items-center justify-center border border-[#E0F2FE] relative overflow-hidden group shadow-[0_20px_60px_-15px_rgba(14,165,233,0.15)] hover:shadow-[0_30px_70px_-15px_rgba(14,165,233,0.3)] transition-all duration-700">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#F0F8FF] via-white to-transparent opacity-80 z-0" />
                                <Image
                                    src="/2.png"
                                    alt="FRP Planters"
                                    fill
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 rounded-[2.5rem] relative z-10 shadow-inner"
                                />
                            </div>
                        </div>
                        {/* Content Side */}
                        <div>
                            <p className="text-[#0EA5E9] text-sm tracking-[0.3em] font-bold mb-4 uppercase">Product 03</p>
                            <h2 className="text-5xl md:text-6xl font-sans font-bold leading-tight tracking-tight mb-8 text-slate-900">
                                FRP Planters —<br />Beautiful on day one.<br />Beautiful on year ten.
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed space-y-6 mb-10 text-lg md:text-xl">
                                <p>Most planters fade, crack, or break within a few seasons. <span className="text-slate-900 font-bold">Ours don&apos;t.</span></p>
                                <p>The UV-resistant finish locks in color through years of direct sunlight. The structure stays intact through rain, heat, and weight. And because they&apos;re lightweight, you can actually move them.</p>
                            </div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                                className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12"
                            >
                                {['UV-Resistant', 'All-Weather', 'Custom Colors', 'Any Size/Shape', 'Lightweight', 'Low Maintenance'].map((pill, idx) => (
                                    <motion.span
                                        key={pill}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="text-[10px] md:text-xs font-bold text-[#0284C7] uppercase tracking-wider bg-[#F0F8FF] border border-[#bae6fd] px-3 md:px-5 py-1.5 md:py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
                                    >
                                        {pill}
                                    </motion.span>
                                ))}
                            </motion.div>

                            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.1)] transition-shadow mb-12">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-[#0EA5E9] mb-8 flex items-center gap-3">
                                    <div className="w-8 h-px bg-[#0EA5E9]" />
                                    Where They Go
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { label: 'Resorts & Pools', desc: 'UV-stabilized elegance.', icon: <Waves className="w-5 h-5 text-[#0EA5E9]" /> },
                                        { label: 'Luxury Residences', desc: 'Premium architectural look.', icon: <Home className="w-5 h-5 text-[#0EA5E9]" /> },
                                        { label: 'Public Parks', desc: 'Zero-maintenance landscape.', icon: <TreePine className="w-5 h-5 text-[#0EA5E9]" /> }
                                    ].map((item) => (
                                        <div key={item.label} className="bg-slate-50 p-4 rounded-xl flex flex-col gap-3 group hover:bg-[#F0F8FF] transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div>
                                            <div>
                                                <div className="font-bold text-slate-900 text-sm mb-1">{item.label}</div>
                                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-8 text-slate-900 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <div>
                                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-1">Starting At</span>
                                    <span className="text-4xl font-bold">₹1,500</span>
                                </div>
                                <Link href="/contact" className="ml-auto bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:bg-[#0EA5E9] hover:scale-105 px-8 py-5 rounded-full font-bold transition-all duration-300 flex items-center gap-3">
                                    Request a Quote <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>

            {/* Custom Orders Banner */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto max-w-[1400px] px-6 mt-32"
            >
                <div className="bg-[#F0F8FF] border border-[#bae6fd] p-12 md:p-20 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-sm">
                    {/* Subtle Blue Glow */}
                    <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/60 blur-[100px] rounded-full" />

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-sans font-semibold leading-tight tracking-tight mb-6 text-slate-900">
                            Got something<br />specific in mind?
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                            Unusual dimensions, specific colors, large volumes — if you can describe it, we can build it.
                        </p>
                    </div>

                    <div className="relative z-10 w-full md:w-auto flex justify-start md:justify-end">
                        <Link href="/contact" className="bg-[#0EA5E9] text-white shadow-sm hover:shadow-md hover:bg-[#0284C7] px-10 py-5 rounded-full text-lg font-semibold transition-all flex items-center gap-3">
                            Let&apos;s Talk <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </motion.section>

        </main>
    );
}
