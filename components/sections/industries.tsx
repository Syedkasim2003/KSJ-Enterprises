"use client";

import { Section } from "@/components/ui/section";
import { Factory, Building2, HardHat, Home, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const INDUSTRIES = [
    { icon: Home, label: "Residential" },
    { icon: Building2, label: "Commercial" },
    { icon: Factory, label: "Industrial" },
    { icon: HardHat, label: "Infrastructure" },
    { icon: Landmark, label: "Government Projects" },
];

export function Industries() {
    return (
        <Section id="industries" className="bg-slate-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Serving Multiple Sectors</h2>
                <p className="text-slate-600 text-lg font-medium">
                    Residential • Commercial • Industrial • Infrastructure • Government Projects
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {INDUSTRIES.map((industry, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)]"
                    >
                        <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mb-4 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                            <industry.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-slate-900 text-sm md:text-base text-center">{industry.label}</h3>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
