'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function DailyPrograms() {
    const { dict } = useLanguage();
    const { items: i } = dict.programs;

    const programs = [
        { title: i.mangala.title, time: "4:30 AM", description: i.mangala.desc, icon: "sunny" },
        { title: i.japa.title, time: "5:00 AM", description: i.japa.desc, icon: "auto_awesome" },
        { title: i.guru.title, time: "7:00 AM", description: i.guru.desc, icon: "temple_hindu" },
        { title: i.class.title, time: "7:30 AM", description: i.class.desc, icon: "menu_book" },
        { title: i.mission.title, time: "9:00 AM", description: i.mission.desc, icon: "groups" },
        { title: i.sandhya.title, time: "6:00 PM", description: i.sandhya.desc, icon: "bedtime" },
        { title: i.shayana.title, time: "8:00 PM", description: i.shayana.desc, icon: "king_bed" },
        { title: i.close.title, time: "8:30 PM", description: i.close.desc, icon: "lock" },
    ];

    return (
        <div className="px-4 py-6">
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-4">
                {dict.programs.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs.map((program, index) => (
                    <div
                        key={index}
                        className="flex items-center p-4 bg-white dark:bg-background-dark border border-primary/10 rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group"
                    >
                        <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary">{program.icon}</span>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-slate-100">{program.title}</p>
                            <p className="text-xs text-slate-500">{program.time} • {program.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
