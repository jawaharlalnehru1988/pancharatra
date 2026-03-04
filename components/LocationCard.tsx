'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function LocationCard() {
    const { dict } = useLanguage();

    return (
        <div className="px-4 py-6">
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-background-dark border border-primary/10 p-6 transition-all hover:shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 animate-pulse"></div>
                <h2 className="text-xl font-bold mb-2 relative z-10">{dict.location.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 relative z-10">
                    {dict.location.desc}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>{dict.location.city}</span>
                </div>
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden group">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfDXx5DDpQM2ANdkO9ac6J2DKIwj_EH557EKoUO1FoAh_HaTu_Yy6x8U8m9uQamRtlG9rXwqIL0G5a6GJNqvyIl1iavPiV5VC_ncNwkp1_7uQKnuOU4kRBAaGIcc55xIbEDS4vw2qBC-yXiljWYFEHcjawsGiIUqkj7EWKX0ze60BZJqb7WXrruKerAwZZbxfweCipwoGysFyDX7T1kE0sLhxWyu-Ks1_rJFn2_njb7a221SBdCKcz0xyybSC_CO4jTQVy72Ycvahw"
                        alt="Scenic aerial view of Kanyakumari temple and sea"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <button className="w-full border-2 border-primary text-primary font-bold py-2 rounded-lg hover:bg-primary/5 transition-colors">
                    {dict.location.map}
                </button>
            </div>
        </div>
    );
}
