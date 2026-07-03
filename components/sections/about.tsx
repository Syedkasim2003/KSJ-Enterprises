"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Commitment to Quality",
        description: "We adhere to strict quality control standards to ensure every product meets global benchmarks.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Our team of engineers and specialists brings decades of experience to solve your industrial challenges.",
    },
    {
        icon: TrendingUp,
        title: "Innovation Driven",
        description: "Staying ahead of the curve with the latest technology and sustainable industrial practices.",
    },
];

export function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Image Grid */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-8">
                            <div className="h-48 md:h-64 rounded-2xl bg-slate-100 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1770&auto=format&fit=crop" alt="Industrial" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="h-32 md:h-40 rounded-2xl bg-emerald-500/10 p-6 flex flex-col justify-center items-center text-center border border-emerald-100">
                                <span className="text-3xl md:text-4xl font-bold text-emerald-600">10+</span>
                                <span className="text-sm font-medium text-emerald-800">Years Experience</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-32 md:h-40 rounded-2xl bg-blue-500/10 p-6 flex flex-col justify-center items-center text-center border border-blue-100">
                                <span className="text-3xl md:text-4xl font-bold text-blue-600">500+</span>
                                <span className="text-sm font-medium text-blue-800">Happy Clients</span>
                            </div>
                            <div className="h-48 md:h-64 rounded-2xl bg-slate-100 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1770&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Empowering Industries with <span className="text-blue-600">Reliable Solutions</span>
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            At KSJ Enterprises, we believe in building lasting relationships through trust and transparency. Since our inception, we have been dedicated to providing top-tier industrial machinery and components that drive efficiency and growth for our partners.
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        {FEATURES.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                            >
                                <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                                    <p className="text-sm text-slate-500 mt-1">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Link href="#contact">
                        <Button variant="link" className="px-0 text-blue-600 font-semibold group">
                            Learn More About Us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
}
