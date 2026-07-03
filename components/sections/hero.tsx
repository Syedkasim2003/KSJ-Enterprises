"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />

            <div className="container relative py-20 md:py-32 lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2"></span>
                            ISO 9001:2015 Certified Company
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            Flowing Quality into  <span className="text-blue-600">Every Connection</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                            KSJ Enterprises delivers premium industrial solutions, machinery, and authorized dealership services. We bridge the gap between innovation and reliability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#contact">
                                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                                    Get a Quote
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="#products">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 border-slate-300">
                                    Explore Products
                                </Button>
                            </Link>
                        </div>

                        <div className="pt-4 flex items-center gap-6 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                <span>Premium Quality</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                <span>24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                <span>Global Standards</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content (Illustration/Image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative lg:h-[500px] w-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-xl flex items-center justify-center"
                    >
                        {/* Placeholder for actual hero image */}
                        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-90 hover:scale-105 transition-transform duration-700" />
                        <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xs mx-auto text-center border border-slate-100">
                            <div className="font-bold text-slate-900 text-lg">Trusted Plumbing Solutions</div>
                            <p className="text-sm text-slate-500 mt-1">Supplying premium pipes, fittings & valves for residential, commercial & industrial projects.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
