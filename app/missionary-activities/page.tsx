'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function MissionPage() {
    const { dict } = useLanguage();
    const { objectives } = dict.mission;

    const activityItems = [
        { icon: "menu_book", ...objectives.spiritual },
        { icon: "psychology", ...objectives.krishna },
        { icon: "diversity_3", ...objectives.community },
        { icon: "campaign", ...objectives.sankirtana },
        { icon: "eco", ...objectives.living },
        { icon: "library_books", ...objectives.literature },
        { icon: "restaurant", ...objectives.prasadam },
        { icon: "temple_hindu", ...objectives.temple },
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
            <Navbar />

            <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">{dict.mission.title}</span>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-6">
                            {dict.nav.menu.mission}
                        </h1>
                        <p className="text-lg text-foreground-light dark:text-foreground-dark/70 max-w-3xl mx-auto italic border-y border-primary/10 py-8 px-4">
                            "{dict.mission.primary}"
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activityItems.map((item, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-cream dark:bg-slate-900/50 border border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-4">{item.title}</h3>
                                <p className="text-foreground-light/70 dark:text-foreground-dark/60 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-primary mb-6">{dict.getInvolvedExtra.join}</h2>
                            <p className="text-foreground-light/80 dark:text-foreground-dark/70 mb-8 max-w-xl">
                                {dict.getInvolvedExtra.desc}
                            </p>
                            <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                                {dict.getInvolvedExtra.volunteer}
                            </button>
                        </div>
                        <div className="relative size-64 md:size-80 flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>
                            <span className="material-symbols-outlined text-[150px] md:text-[200px] text-primary relative z-10 opacity-20 group-hover:opacity-40 transition-opacity">
                                volunteer_activism
                            </span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
