import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200">
            <div className="container px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/ksj-logo.png"
                                alt="KSJ Enterprises Logo"
                                className="h-12 w-12 object-contain"
                            />
                            <h3 className="text-xl font-bold text-white">KSJ Enterprises</h3>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Your trusted partner for high-quality industrial solutions. We are committed to excellence, innovation, and customer satisfaction.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#products" className="hover:text-white transition-colors">Our Products</Link></li>
                            <li><Link href="#dealers" className="hover:text-white transition-colors">Find a Dealer</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Industries</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Construction</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                                <span>123 Business Park, Industrial Area, City Name, State - 110001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                                <span>info@ksjenterprises.com</span>
                            </li>
                        </ul>

                        {/* Socials */}
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} KSJ Enterprises. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
