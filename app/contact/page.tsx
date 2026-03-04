'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function ContactPage() {
    const { dict } = useLanguage();

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
            <Navbar />

            <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">{dict.contact.title}</span>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-6">
                            {dict.nav.menu.contact}
                        </h1>
                        <p className="text-lg text-foreground-light dark:text-foreground-dark/70 max-w-2xl mx-auto">
                            {dict.contact.subtitle}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Form */}
                        <div className="bg-cream dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-primary/10 shadow-2xl shadow-primary/5">
                            <h2 className="text-2xl font-bold text-primary mb-8">{dict.contact.form.title}</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground-light/70 dark:text-foreground-dark/60 ml-1">{dict.contact.form.name}</label>
                                        <input
                                            type="text"
                                            placeholder={dict.contact.form.placeholders.name}
                                            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-primary/10 focus:border-primary outline-none transition-all placeholder:text-foreground-light/30 dark:placeholder:text-foreground-dark/20 text-foreground-light dark:text-foreground-dark"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground-light/70 dark:text-foreground-dark/60 ml-1">{dict.contact.form.email}</label>
                                        <input
                                            type="email"
                                            placeholder={dict.contact.form.placeholders.email}
                                            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-primary/10 focus:border-primary outline-none transition-all placeholder:text-foreground-light/30 dark:placeholder:text-foreground-dark/20 text-foreground-light dark:text-foreground-dark"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground-light/70 dark:text-foreground-dark/60 ml-1">{dict.contact.form.subject}</label>
                                    <input
                                        type="text"
                                        placeholder={dict.contact.form.placeholders.subject}
                                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-primary/10 focus:border-primary outline-none transition-all placeholder:text-foreground-light/30 dark:placeholder:text-foreground-dark/20 text-foreground-light dark:text-foreground-dark"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground-light/70 dark:text-foreground-dark/60 ml-1">{dict.contact.form.message}</label>
                                    <textarea
                                        rows={5}
                                        placeholder={dict.contact.form.placeholders.message}
                                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-primary/10 focus:border-primary outline-none transition-all placeholder:text-foreground-light/30 dark:placeholder:text-foreground-dark/20 text-foreground-light dark:text-foreground-dark resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                    {dict.contact.form.send}
                                </button>
                            </form>
                        </div>

                        {/* Info & Map */}
                        <div className="space-y-12">
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">{dict.contact.info.address}</h3>
                                    <p className="text-foreground-light/70 dark:text-foreground-dark/60">
                                        {dict.location.city},<br />
                                        Tamil Nadu, India.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">{dict.contact.info.email}</h3>
                                    <p className="text-foreground-light/70 dark:text-foreground-dark/60 underline">
                                        info@pancharatra.org<br />
                                        connect@pancharatra.org
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-6">{dict.contact.mapTitle}</h3>
                                <div className="relative w-full h-[300px] rounded-3xl overflow-hidden border border-primary/10 group">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfDXx5DDpQM2ANdkO9ac6J2DKIwj_EH557EKoUO1FoAh_HaTu_Yy6x8U8m9uQamRtlG9rXwqIL0G5a6GJNqvyIl1iavPiV5VC_ncNwkp1_7uQKnuOU4kRBAaGIcc55xIbEDS4vw2qBC-yXiljWYFEHcjawsGiIUqkj7EWKX0ze60BZJqb7WXrruKerAwZZbxfweCipwoGysFyDX7T1kE0sLhxWyu-Ks1_rJFn2_njb7a221SBdCKcz0xyybSC_CO4jTQVy72Ycvahw"
                                        alt="Scenic aerial view of Kanyakumari temple and sea"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                                        <button className="px-8 py-3 bg-white text-primary rounded-xl font-bold shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                                            <span className="material-symbols-outlined">map</span>
                                            {dict.location.map}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
