"use client";

import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-40 pb-20 selection:bg-[#0EA5E9] selection:text-white bg-slate-50">

            {/* Page Hero with Image */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center -mt-40 mb-24 overflow-hidden"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hxl.png"
                        alt="Contact Us Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Hero Content - Added pt-32 to clear floating header */}
                <div className="relative z-10 container mx-auto max-w-[1400px] px-6 text-center pt-32">
                    <p className="text-[#0EA5E9] text-sm tracking-[0.2em] font-medium mb-6 uppercase drop-shadow-md">Get in touch</p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-semibold leading-tight tracking-tight text-white drop-shadow-lg max-w-4xl mx-auto mb-8">
                        Tell us what you need.<br />
                        We&apos;ll take it from there.
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                        One call or message. No pressure.<br className="hidden sm:block" />
                        A professional quote within 24 hours.
                    </p>
                </div>
            </motion.section>

            <div className="container mx-auto max-w-[1400px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-sm"
                    >
                        <h3 className="text-2xl font-semibold mb-10 text-slate-900">Get a Free Quote</h3>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Your Name *</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" required />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Company or Organization</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Email Address *</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" required />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2">Phone Number *</label>
                                    <input type="tel" className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" required />
                                </div>
                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2 block">Product Required *</label>
                                    <select className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none cursor-pointer" required>
                                        <option value="" disabled selected>Select Product</option>
                                        <option value="doors">FRP Doors</option>
                                        <option value="beds">FRP Bed Frames</option>
                                        <option value="planters">FRP Planters</option>
                                        <option value="multiple">Multiple / Other</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2 block">Space Type *</label>
                                    <select className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none cursor-pointer" required>
                                        <option value="" disabled selected>Select Space Type</option>
                                        <option value="hospitality">Hotel / Hospitality</option>
                                        <option value="healthcare">Hospital / Healthcare</option>
                                        <option value="hostel">Hostel / Dormitory</option>
                                        <option value="commercial">Commercial Building</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2 block">Quantity or Dimensions</label>
                                <input type="text" placeholder="e.g. 50 doors, 7x3 ft" className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2 block">Tell us more...</label>
                                <textarea rows={4} className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-2xl px-6 py-4 outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all resize-none"></textarea>
                            </div>

                            <div className="pt-8">
                                <button type="button" className="w-full md:w-auto bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-10 py-5 rounded-full font-semibold transition-all text-lg shadow-sm hover:shadow-md mb-6 font-sans tracking-wide">
                                    Send My Request →
                                </button>
                                <p className="text-slate-500 text-sm font-medium max-w-sm">
                                    One call or one message. You get a quote, a specification sheet, and a confirmed lead time. No pressure.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <p className="text-slate-600 text-[13px] leading-relaxed font-medium">
                                    Every inquiry gets a specification sheet, a confirmed lead time, and a direct line to our engineering team — not a sales queue. We have been manufacturing from Hyderabad since 2006.
                                </p>
                            </div>

                        </form>
                    </motion.div>

                    {/* Contact Info Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 relative mt-16 lg:mt-0"
                    >
                        <div className="sticky top-40 bg-white border border-slate-200 p-12 rounded-[3rem] overflow-hidden shadow-sm">
                            {/* Abstract background flair */}
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#E0F2FE]/50 blur-[80px] rounded-full pointer-events-none" />

                            <h3 className="text-2xl font-semibold mb-12 text-slate-900 relative z-10">Rather talk directly?</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#F0F8FF] flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all shadow-sm shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Our Location</p>
                                        <p className="text-slate-900 font-bold text-lg leading-snug">
                                            Kcr nagar ramanthapur,<br />
                                            hyderabad, telangana.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#F0F8FF] flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all shadow-sm shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                                        <a href="tel:+919381671364" className="text-slate-900 font-bold text-lg hover:text-[#0EA5E9] transition-colors block">+91 9381671364</a>
                                        <a href="tel:+919849193332" className="text-slate-900 font-bold text-lg hover:text-[#0EA5E9] transition-colors block">+91 9849193332</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#F0F8FF] flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all shadow-sm shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                                        <a href="mailto:gudipati3332@gmail.com" className="text-slate-900 font-bold text-lg hover:text-[#0EA5E9] transition-colors break-all">gudipati3332@gmail.com</a>
                                    </div>
                                </div>

                                {/* WhatsApp Official Channel */}
                                <div className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex flex-col gap-6 relative overflow-hidden group shadow-sm">
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-100/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-emerald-200">
                                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.02L0 24l6.135-1.61a11.81 11.81 0 005.918 1.583h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.213-1.25-6.233-3.515-8.498z"/>
                                                </svg>
                                            </div>
                                            <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Official B2B Channel</span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Prefer Message?</h4>
                                        <p className="text-slate-600 font-medium mb-6 leading-relaxed">Send requirements directly to our manufacturing head on WhatsApp.</p>
                                        <a 
                                            href="https://wa.me/919381671364" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-8 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-200"
                                        >
                                            Start Chat Now
                                            <ArrowRight className="w-5 h-5 flex-shrink-0" />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-[#E0F2FE] group-hover:border-[#bae6fd] group-hover:text-[#0EA5E9] text-slate-500 transition-all">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-1">Hours</div>
                                        <div className="text-lg font-bold tracking-wide text-slate-900">Monday – Saturday<br />9:00 AM – 6:00 PM</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 pt-8 border-t border-slate-200 flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                                <span className="text-sm font-bold tracking-wide text-slate-500">⚡ Average response 1 hr</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
