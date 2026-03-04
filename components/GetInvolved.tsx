'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function GetInvolved() {
    const { dict } = useLanguage();

    const activities = [
        { icon: "volunteer_activism", label: dict.getInvolved.donate },
        { icon: "groups", label: dict.getInvolved.volunteer },
        { icon: "restaurant", label: dict.getInvolved.prasadam },
    ];

    return (
        <div className="px-4 py-8 mb-4 bg-saffron/10 dark:bg-saffron/5">
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-4 text-center">
                {dict.getInvolved.title}
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="min-w-[140px] flex-1 bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer border border-primary/5"
                    >
                        <span className="material-symbols-outlined text-3xl text-primary mb-2">
                            {activity.icon}
                        </span>
                        <p className="text-sm font-bold">{activity.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
