'use client';

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const { lang, setLang, dict } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: dict.nav.menu.home, href: "/" },
        { label: dict.nav.menu.articles, href: "/articles" },
        { label: dict.nav.menu.mission, href: "/missionary-activities" },
        { label: dict.nav.menu.contact, href: "/contact" },
        { label: dict.nav.menu.donate, href: "/donation" },
    ];

    const NavLinks = ({ mobile = false }) => (
        <ul className={`${mobile ? 'flex flex-col gap-6 p-8 pt-16' : 'hidden lg:flex items-center gap-8'} text-sm font-bold uppercase tracking-wider`}>
            {menuItems.map((item, index) => (
                <li key={index}>
                    <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-primary transition-colors duration-200"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <nav className="flex items-center bg-cream/90 dark:bg-background-dark/90 backdrop-blur-md sticky top-0 z-[60] p-4 border-b border-primary/10 transition-all duration-300">
                <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="text-primary flex size-10 shrink-0 items-center justify-center bg-primary/5 rounded-lg border border-primary/10">
                            <span className="material-symbols-outlined text-3xl">temple_hindu</span>
                        </div>
                        <h2 className="text-primary text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">
                            {dict.nav.title}
                        </h2>
                    </div>

                    {/* Desktop Navigation */}
                    <NavLinks />

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
                            className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 active:scale-95"
                        >
                            {dict.nav.toggle}
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        {/* Hamburger Button */}
                        <button
                            className="lg:hidden flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors ml-1"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sliding Menu */}
            <div
                className={`fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            />
            <div className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-cream dark:bg-background-dark shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 border-b border-primary/10 flex justify-between items-center bg-background-light dark:bg-slate-900/50">
                    <span className="text-primary font-bold">{dict.nav.title}</span>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-primary"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <NavLinks mobile />
                <div className="absolute bottom-10 left-8 right-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-2">Connect With Us</p>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-primary">mail</span>
                        <span className="material-symbols-outlined text-primary">location_on</span>
                        <span className="material-symbols-outlined text-primary">public</span>
                    </div>
                </div>
            </div>
        </>
    );
}
