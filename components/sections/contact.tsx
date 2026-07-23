"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");
        setErrorMessage("");

        const form = e.currentTarget;

        try {
            // Dynamically load EmailJS from CDN if not already loaded
            const loadEmailJS = () => {
                return new Promise<any>((resolve, reject) => {
                    if ((window as any).emailjs) {
                        resolve((window as any).emailjs);
                        return;
                    }
                    const script = document.createElement("script");
                    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
                    script.async = true;
                    script.onload = () => {
                        if ((window as any).emailjs) {
                            resolve((window as any).emailjs);
                        } else {
                            reject(new Error("EmailJS failed to initialize from CDN."));
                        }
                    };
                    script.onerror = () => reject(new Error("Failed to load EmailJS from CDN."));
                    document.head.appendChild(script);
                });
            };

            const emailjs = await loadEmailJS();

            const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const autoReplyTemplateID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceID || !templateID || !publicKey) {
                throw new Error("EmailJS configuration keys are missing in the environment variables.");
            }

            // 1. Send notification email to Admin (You)
            const response = await emailjs.sendForm(serviceID, templateID, form, publicKey);

            if (response.status !== 200) {
                throw new Error(response.text || "Failed to send email");
            }

            // 2. Send confirmation auto-reply email to Visitor (Them)
            if (autoReplyTemplateID) {
                try {
                    await emailjs.sendForm(serviceID, autoReplyTemplateID, form, publicKey);
                } catch (autoReplyErr) {
                    console.warn("Auto-reply email failed to send:", autoReplyErr);
                }
            }

            setStatus("success");
            form.reset();
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Section id="contact" className="bg-slate-50">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
                    <p className="text-slate-600">
                        Have a project in mind or need a quote? Contact our team today and let's build something great together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="grid gap-6">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Our Office</h3>
                                    <p className="text-slate-600 mt-1">
                                        Ksj enterprises, X449+GJJ, MDR947,<br />
                                        S Alangulam, Madurai,<br />
                                        Tamil Nadu 625017
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Phone</h3>
                                    <p className="text-slate-600 mt-1">+91 7708235555</p>
                                    <p className="text-slate-500 text-sm">Mon-Fri from 9am to 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Email</h3>
                                    <p className="text-slate-600 mt-1">Ksjenterprises16@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Location Redirect Card */}
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Ksj+enterprises,+X449%2BGJJ,+MDR947,+S+Alangulam,+Madurai,+Tamil+Nadu+625017"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-64 bg-slate-200 rounded-xl overflow-hidden border border-slate-300 relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                            title="Click to open location in Google Maps"
                        >
                            <iframe
                                src="https://maps.google.com/maps?q=9.9664,78.1311&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, pointerEvents: "none" }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-85 group-hover:opacity-100"
                            ></iframe>
                            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                                <span className="bg-slate-900/90 text-white text-xs px-3.5 py-2 rounded-full font-medium shadow-lg backdrop-blur-sm group-hover:scale-105 transition-transform flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-emerald-400" />
                                    Open in Google Maps
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            {status === "error" && (
                                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md flex items-center gap-2">
                                    <AlertCircle className="h-4 w-4" />
                                    {errorMessage}
                                </div>
                            )}

                            {status === "success" && (
                                <div className="p-3 bg-emerald-50 text-emerald-600 text-sm rounded-md flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}

                            <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}
