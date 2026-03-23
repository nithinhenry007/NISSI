"use client";
// Trigger redeploy to Vercel


import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, ThermometerSun, Bug, Palette, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // High-performance transforms for scroll animations
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-100">

        {/* Text container with glassmorphism for legibility */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="absolute z-20 top-[20%] md:top-[20%] lg:top-[24%] left-6 md:left-12 lg:left-24 flex flex-col items-start text-left px-6 md:px-0 max-w-xl md:max-w-2xl lg:max-w-3xl"
        >
          <div className="bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/40 shadow-xl shadow-sky-900/5">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-slate-900 tracking-tight leading-tight mb-8 drop-shadow-sm"
            >
              Built to survive<br />
              20 Indian monsoons.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-slate-800 text-lg md:text-2xl font-medium leading-relaxed mb-10 max-w-2xl"
            >
              Without a single maintenance call. Specialized doors, bed frames, and planters for commercial properties — built to perform for 20 years without warping or rusting.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full sm:w-auto"
            >
              <Link href="/products" className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8 py-4 rounded-full text-[15px] font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-sky-100 hover:-translate-y-1 group">
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/919381671364" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 px-8 py-4 rounded-full text-[15px] font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.02L0 24l6.135-1.61a11.81 11.81 0 005.918 1.583h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.213-1.25-6.233-3.515-8.498z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Full Bleed Background Image with Parallax Scroll */}
        <motion.div
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute inset-0 z-0 origin-top"
        >
          <Image
            src="/hero.png"
            alt="Modern FRP Furniture Setting"
            fill
            className="object-cover object-center scale-110"
            priority
          />
          {/* Subtle gradient overlay to ensure text readability at the top */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#d8eafa]/80 via-transparent to-transparent opacity-90" />
        </motion.div>

      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-slate-900 text-[#0EA5E9] py-4 overflow-hidden -rotate-1 scale-105 mb-20 -mt-2 z-10 hidden md:block shadow-lg">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] text-sm font-bold tracking-widest uppercase items-center">
          <span className="mx-4">Waterproof</span>·
          <span className="mx-4">Termite-Free</span>·
          <span className="mx-4">Zero Maintenance</span>·
          <span className="mx-4">20 Year Warranty</span>·
          <span className="mx-4">Made in Hyderabad</span>·
          <span className="mx-4">Fire Retardant</span>·
          <span className="mx-4">Custom Sizes</span>·
          <span className="mx-4">Since 2006</span>·
          <span className="mx-4">Waterproof</span>·
          <span className="mx-4">Termite-Free</span>·
          <span className="mx-4">Zero Maintenance</span>·
          <span className="mx-4">20 Year Warranty</span>
        </div>
      </div>

      {/* Stats Strip */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-[1400px] px-6 py-12 md:py-20 grid grid-cols-2 md:flex md:flex-wrap justify-between gap-8 md:gap-12 border-b border-slate-200 text-slate-900"
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
          <span className="text-slate-500 uppercase tracking-widest text-[10px] md:text-sm font-bold">Manufacturing Experience</span>
        </div>
      </motion.section>

      {/* Products Section - Premium Showcase */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        {/* Decorative Light Blooms */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#0EA5E9]/10 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto max-w-[1400px] px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-[2px] w-12 bg-[#0EA5E9]" />
                <p className="text-[#0EA5E9] text-sm tracking-[0.4em] font-bold uppercase">Our Catalog</p>
              </motion.div>
              <h2 className="text-4xl md:text-7xl font-sans font-bold tracking-tight text-white leading-[1.1]">
                Built to never<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-[#0EA5E9]">need replacing.</span>
              </h2>
            </div>
            <Link href="/products" className="group flex items-center gap-6 bg-white/5 backdrop-blur-sm border border-white/10 px-10 py-5 rounded-2xl font-bold text-white hover:bg-white/10 transition-all shadow-2xl">
              View All Specs 
              <div className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-white/5 p-10 rounded-[3rem] hover:bg-slate-800/80 transition-all overflow-hidden"
            >
              <div className="absolute -right-4 -top-8 text-[12rem] font-black text-white/[0.03] pointer-events-none group-hover:text-[#0EA5E9]/[0.05] transition-colors">01</div>
              <div className="relative z-10">
                <div className="text-[10px] uppercase font-bold tracking-widest inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full mb-10">B2B Best Seller</div>
                <div className="relative w-full h-64 mb-10 rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image src="/1.png" alt="FRP Doors" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">FRP Doors</h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                  Engineered to outlast the building. Waterproof, fire-retardant, and zero maintenance.
                </p>
                <div className="pt-8 border-t border-white/5 flex items-center justify-between text-white">
                  <span className="text-2xl font-bold text-sky-400">₹8,000</span>
                  <Link href="/products" className="p-4 rounded-full border border-white/10 hover:bg-[#0EA5E9] hover:border-[#0EA5E9] transition-all">
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-white/5 p-10 rounded-[3rem] hover:bg-slate-800/80 transition-all overflow-hidden"
            >
              <div className="absolute -right-4 -top-8 text-[12rem] font-black text-white/[0.03] pointer-events-none group-hover:text-[#0EA5E9]/[0.05] transition-colors">02</div>
              <div className="relative z-10">
                <div className="text-[10px] uppercase font-bold tracking-widest inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full mb-10">Medical Grade</div>
                <div className="relative w-full h-64 mb-10 rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image src="/3.png" alt="FRP Beds" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">FRP Beds</h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                  Hospital-grade durability. Designed for intensive clinical use and easy sterilization.
                </p>
                <div className="pt-8 border-t border-white/5 flex items-center justify-between text-white">
                  <span className="text-2xl font-bold text-sky-400">₹30,000</span>
                  <Link href="/products" className="p-4 rounded-full border border-white/10 hover:bg-[#0EA5E9] hover:border-[#0EA5E9] transition-all">
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-white/5 p-10 rounded-[3rem] hover:bg-slate-800/80 transition-all overflow-hidden"
            >
              <div className="absolute -right-4 -top-8 text-[12rem] font-black text-white/[0.03] pointer-events-none group-hover:text-[#0EA5E9]/[0.05] transition-colors">03</div>
              <div className="relative z-10">
                <div className="text-[10px] uppercase font-bold tracking-widest inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full mb-10">All Weather</div>
                <div className="relative w-full h-64 mb-10 rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image src="/2.png" alt="FRP Planters" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">FRP Planters</h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                  UV-proof elegance. Survives peak monsoon and summer heat without fading or cracking.
                </p>
                <div className="pt-8 border-t border-white/5 flex items-center justify-between text-white">
                  <span className="text-2xl font-bold text-sky-400">₹1,500</span>
                  <Link href="/products" className="p-4 rounded-full border border-white/10 hover:bg-[#0EA5E9] hover:border-[#0EA5E9] transition-all">
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="bg-slate-50 py-24 border-y border-slate-100 mt-10">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-sky-50 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <p className="text-[#0EA5E9] text-sm tracking-[0.3em] font-bold mb-6 uppercase">For Designers & Architects</p>
              <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-tight mb-8">
                Download our FRP<br />Specification Sheet
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                Complete material data, size options, and finish samples guide. Used by architects and interior designers across Hyderabad.
              </p>
            </div>

            <div className="relative z-10 w-full lg:w-auto min-w-[320px] bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
              <div className="space-y-4">
                <input type="text" placeholder="Name" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl outline-none focus:border-[#0EA5E9] transition-all" />
                <input type="text" placeholder="WhatsApp Number" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl outline-none focus:border-[#0EA5E9] transition-all" />
                <button className="w-full bg-[#0EA5E9] text-white py-4 rounded-xl font-bold hover:bg-[#0284C7] transition-all flex items-center justify-center gap-2">
                  Get PDF Guide <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-[10px] text-slate-400 text-center font-medium">Direct delivery to your WhatsApp. No spam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nissi Section */}
      <section className="bg-slate-50 py-32 rounded-t-[3rem] border-t border-slate-200 -mt-20 relative z-10">
        <div className="container mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[4rem] p-12 md:p-24 lg:p-32 border border-slate-200 shadow-xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50/50 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <p className="text-[#0EA5E9] text-sm tracking-[0.3em] font-bold mb-8 uppercase">Why NISSI FRP</p>
                <h2 className="text-4xl md:text-6xl font-sans font-bold leading-[1.1] tracking-tight mb-10 text-slate-900">
                  We don&apos;t make products.<br />
                  <span className="text-[#0EA5E9]">We make problems<br />disappear.</span>
                </h2>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                  Wooden doors rot. Metal beds rust. Cement pots crack. We got tired of watching clients deal with the same maintenance headaches year after year — so in 2006, we started making things differently.
                </p>

                <div className="bg-slate-50 border-l-4 border-[#0EA5E9] p-8 md:p-10 mb-12 italic rounded-r-3xl shadow-sm">
                  <p className="text-2xl md:text-3xl font-sans font-bold text-slate-800 leading-snug">
                    &quot;FRP doesn&apos;t negotiate with water, heat, or pests. It just works. For 20 years straight.&quot;
                  </p>
                </div>

                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  Every NISSI FRP product is cross-linked for structural rigidity and UV-stabilized for the Deccan heat. It is an industrial material brought into the commercial space to end the maintenance cycle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:border-sky-100 transition-colors group shadow-sm"
                >
                  <h4 className="text-xl font-bold flex flex-col gap-4 mb-4 text-slate-900">
                    <span className="w-12 h-12 rounded-xl bg-[#0EA5E9] text-white flex items-center justify-center text-lg shadow-lg shadow-sky-100">01</span>
                    20-Year Warranty
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed">20-year structural warranty. Documented. Transferable. Built to outlast the building itself.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:border-sky-100 transition-colors group shadow-sm"
                >
                  <h4 className="text-xl font-bold flex flex-col gap-4 mb-4 text-slate-900">
                    <span className="w-12 h-12 rounded-xl bg-[#0EA5E9] text-white flex items-center justify-center text-lg shadow-lg shadow-sky-100">02</span>
                    50°C Summers
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed">Zero thermal expansion. No warping in peak Hyderabad heat or cracking in monsoons.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:border-sky-100 transition-colors group shadow-sm"
                >
                  <h4 className="text-xl font-bold flex flex-col gap-4 mb-4 text-slate-900">
                    <span className="w-12 h-12 rounded-xl bg-[#0EA5E9] text-white flex items-center justify-center text-lg shadow-lg shadow-sky-100">03</span>
                    0% Pest Damage
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed">Inorganic material. Termites and borers cannot inhabit or consume FRP. Ever.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:border-sky-100 transition-colors group shadow-sm"
                >
                  <h4 className="text-xl font-bold flex flex-col gap-4 mb-4 text-slate-900">
                    <span className="w-12 h-12 rounded-xl bg-[#0EA5E9] text-white flex items-center justify-center text-lg shadow-lg shadow-sky-100">04</span>
                    70% Lighter
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed">Faster installation and lower structural load. Same strength, 70% less weight than steel.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="container mx-auto max-w-[1400px] px-6 py-24 mb-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-[#0EA5E9] text-sm tracking-[0.2em] font-medium mb-4 uppercase">What makes FRP different</p>
          <h2 className="text-4xl md:text-5xl font-sans font-semibold leading-tight tracking-tight text-slate-900">Built different. On purpose.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: <Droplets className="w-6 h-6" />, stat: "0%", label: "Water Absorbed", desc: "Not water-resistant. Fully waterproof." },
            { icon: <Bug className="w-6 h-6" />, stat: "0%", label: "Pest Damage", desc: "No termite has ever won against FRP." },
            { icon: <ShieldCheck className="w-6 h-6" />, stat: "70%", label: "Lighter Than Steel", desc: "Easy to transport, install, and handle." },
            { icon: <ThermometerSun className="w-6 h-6" />, stat: "Fire", label: "Retardant", desc: "Slows fire spread. Certified safe." },
            { icon: <Palette className="w-6 h-6" />, stat: "∞", label: "Custom Options", desc: "Any color, size, or shape. Done." }
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all shadow-sm"
            >
              <div className="text-[#0EA5E9] mb-12 bg-[#F0F8FF] w-12 h-12 rounded-full flex items-center justify-center">{feat.icon}</div>
              <div className="text-4xl font-bold mb-2 text-slate-900">{feat.stat}</div>
              <div className="text-slate-800 font-semibold mb-4">{feat.label}</div>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


    </main>
  );
}
