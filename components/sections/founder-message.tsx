"use client";

import { Section } from "@/components/ui/section";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
    {
        name: "MJF Lion K. Syed Jafar",
        title: "Founder & CEO",
        organization: "KSJ Groups, Madurai",
        message: "Our mission is simple: to deliver excellence in everything we do. We don't just sell products; we build partnerships that empower businesses to thrive in a competitive world.",
        image: "/images/founder.jpg"
    },
    {
        name: "Lion. S. Jeenath Begum",
        title: "Proprietor",
        organization: "KSJ Enterprises, Madurai",
        message: "At KSJ Enterprises, we are committed to delivering reliable sanitary and plumbing products that ensure long-lasting performance. Quality, trust, and customer satisfaction remain at the core of everything we do.",
        image: "/images/proprietor.jpg"
    }
];

export function FounderMessage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
        }, 5000); // Rotate every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const currentMessage = MESSAGES[currentIndex];

    return (
        <Section id="message" className="bg-emerald-900 text-emerald-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="relative container mx-auto px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row gap-12 items-center"
                    >
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-emerald-700 overflow-hidden shadow-2xl">
                                <img
                                    src={currentMessage.image}
                                    alt={currentMessage.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <Quote className="h-12 w-12 text-emerald-400 mb-6 mx-auto md:mx-0 opacity-50" />
                            <blockquote className="text-2xl md:text-3xl font-serif font-medium leading-relaxed mb-8 text-white">
                                "{currentMessage.message}"
                            </blockquote>
                            <div>
                                <div className="text-xl font-bold text-white">{currentMessage.name}</div>
                                <div className="text-emerald-300 font-medium">{currentMessage.title}</div>
                                <div className="text-emerald-300 font-medium">{currentMessage.organization}</div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Indicator Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {MESSAGES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? "bg-emerald-400 w-8"
                                    : "bg-emerald-700 hover:bg-emerald-600"
                                }`}
                            aria-label={`Go to message ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
