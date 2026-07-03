"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; // Added missing import

const PRODUCTS = [
    {
        title: "🚿 CP Fittings & Sanitary Accessories",
        description: "Premium chrome-plated fittings and sanitary accessories designed for durability, smooth flow, and elegant finishes.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "🚰 PVC & CPVC Pipes",
        description: "High-strength PVC and CPVC piping solutions for water supply, drainage, and industrial applications.",
        image: "/images/pvc-cpvc-pipes.png"
    },
    {
        title: "🧪 Waterproofing Materials",
        description: "Advanced waterproofing solutions to protect structures from leakage, dampness, and water damage.",
        image: "/images/waterproofing.png"
    },
    {
        title: "🔩 Plumbing Valves & Fittings",
        description: "Reliable valves and fittings ensuring safe flow control and leak-free performance.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "🏗️ Construction & Plumbing Materials",
        description: "Essential plumbing and sanitary materials suitable for residential, commercial, and industrial projects.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
];

export function Products() {
    return (
        <Section id="products">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-center md:text-left">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Products We Provide</h2>
                    <p className="text-slate-600">
                        Discover our range of high-quality products designed to meet the rigorous demands of modern industry.
                    </p>
                </div>
                <Link href="#contact">
                    <Button variant="outline" className="hidden md:flex">
                        View All Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.map((product, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all duration-300"
                    >
                        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg -mt-12 mb-6 relative z-10 group-hover:bg-blue-700 transition-colors">
                                <Package className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
                            <p className="text-slate-600 mb-6">{product.description}</p>
                            <Link href="#contact">
                                <span className="text-sm font-semibold text-blue-600 flex items-center gap-1 group/link">
                                    Request Info
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link href="#contact">
                    <Button variant="outline" className="w-full">
                        View All Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </Section>
    );
}
