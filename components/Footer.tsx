'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { dict } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background-dark text-slate-300 py-12 px-6 mt-12 border-t border-primary/20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Foundation Info */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-3xl">temple_hindu</span>
                        <h2 className="text-xl font-bold tracking-tight">{dict.nav.title}</h2>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                        {dict.mission.primary}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-cream font-bold mb-4 uppercase text-xs tracking-widest">{dict.footer.links}</h3>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link href="/" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">chevron_right</span> {dict.nav.menu.home}
                            </Link>
                        </li>
                        <li>
                            <Link href="/articles" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">chevron_right</span> {dict.nav.menu.articles}
                            </Link>
                        </li>
                        <li>
                            <Link href="/missionary-activities" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">chevron_right</span> {dict.nav.menu.mission}
                            </Link>
                        </li>
                        <li>
                            <Link href="/donation" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">chevron_right</span> {dict.nav.menu.donate}
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">chevron_right</span> {dict.nav.menu.contact}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-cream font-bold mb-4 uppercase text-xs tracking-widest">{dict.footer.connect}</h3>
                    <div className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                        <span>{dict.location.city}, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary">mail</span>
                        <span>contact@pancharatrafoundation.org</span>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <span className="material-symbols-outlined">public</span>
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <span className="material-symbols-outlined">forum</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                <p>© {currentYear} {dict.nav.title}. {dict.footer.rights}.</p>
                <p>{dict.footer.founder}</p>
            </div>
        </footer>
    );
}
