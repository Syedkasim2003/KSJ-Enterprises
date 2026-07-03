"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const DEALERS = [
    { name: "Ashirvad Pipes", image: "/images/dealers/ashirvad.png" },
    { name: "Astral Pipes", image: "/images/dealers/astral.png" },
    { name: "Parryware", image: "/images/dealers/parryware.png" },
    { name: "Finolex Pipes", image: "/images/dealers/finolex.png" },
    { name: "Grohe", image: "/images/dealers/grohe.png" },
    { name: "Cera", image: "/images/dealers/cera.png" },
    { name: "Jaquar", image: "/images/dealers/jaquar.png" },
    { name: "Kohler", image: "/images/dealers/kohler.png" },
];

export function Dealers() {
    return (
        <div className="bg-slate-950 py-12 overflow-hidden border-y border-slate-900">
            <div className="container px-4 mb-8 text-center">
                <h3 className="text-xl font-semibold text-slate-400 uppercase tracking-widest">Authorized Dealer Of</h3>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-gradient">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the list for seamless loop */}
                    {[...DEALERS, ...DEALERS, ...DEALERS, ...DEALERS].map((dealer, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0"
                        >
                            <div className="h-24 w-40 rounded-xl bg-white/5 border border-slate-800 flex items-center justify-center p-4 shadow-lg hover:bg-white/10 hover:border-slate-700 transition-all duration-300 group cursor-pointer overflow-hidden">
                                <img
                                    src={dealer.image}
                                    alt={dealer.name}
                                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
