'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { dict } = useLanguage();

    return (
        <div className="@container">
            <div className="@[480px]:px-4 @[480px]:py-4">
                <div className="relative flex flex-col @[480px]:rounded-2xl overflow-hidden bg-background-dark group border border-primary/5 shadow-2xl shadow-primary/5">
                    {/* Image Part: Shows full aspect on mobile, fixed height with zoom effect on desktop */}
                    <div
                        className="w-full aspect-[4/3] @[640px]:aspect-auto @[640px]:h-[480px] bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-[1.02]"
                        style={{
                            backgroundImage: `url("/pancharatra_banner.jpg")`
                        }}
                    />

                    {/* Text Content: Below the image on small screens, Overlay with gradient on large screens */}
                    <div className="p-6 @[640px]:absolute @[640px]:inset-0 @[640px]:flex @[640px]:flex-col @[640px]:justify-end @[640px]:bg-gradient-to-t @[640px]:from-background-dark @[640px]:via-background-dark/40 @[640px]:to-transparent @[640px]:p-10">
                        <div className="flex flex-col gap-3 max-w-2xl animate-fade-in">
                            <span className="text-saffron font-bold tracking-widest text-[10px] uppercase border-l-2 border-primary pl-2 h-4 mb-1">
                                {/* Optional: Add Welcome text or category here */}
                            </span>
                            <h1 className="text-cream text-2xl @[640px]:text-4xl font-bold leading-tight drop-shadow-xl text-balance">
                                {dict.hero.welcome}
                            </h1>
                            <p className="text-cream/70 text-sm @[640px]:text-lg mb-4 leading-relaxed max-w-xl">
                                {dict.hero.subtext}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <button className="bg-primary text-white font-bold py-3 px-8 rounded-full self-start shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-wider">
                                    {dict.hero.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
