'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function Mission() {
    const { dict } = useLanguage();
    const { objectives } = dict.mission;

    const objectiveItems = [
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
        <div className="px-4 py-8 bg-cream dark:bg-background-dark/40">
            <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-saffron">auto_awesome</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">
                    {dict.mission.title}
                </h2>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8 max-w-2xl border-l-4 border-primary/20 pl-4 py-1 italic">
                "{dict.mission.primary}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectiveItems.map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/50 dark:bg-background-dark/20 border border-primary/5 hover:border-primary/20 transition-all">
                        <div className="bg-primary/10 h-10 w-10 shrink-0 flex items-center justify-center rounded-lg text-primary">
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
