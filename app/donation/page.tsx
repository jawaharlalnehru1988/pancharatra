'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function DonationPage() {
    const { dict } = useLanguage();

    const donationOptions = [
        { title: dict.donation.options.oneTime.title, desc: dict.donation.options.oneTime.desc, icon: "star_rate" },
        { title: dict.donation.options.monthly.title, desc: dict.donation.options.monthly.desc, icon: "calendar_today" },
        { title: dict.donation.options.project.title, desc: dict.donation.options.project.desc, icon: "architecture" }
    ];

    const trustDetails = [
        { label: dict.donation.bank.details.name, value: "Pancharatra Foundation" },
        { label: dict.donation.bank.details.bank, value: "State Bank of India (SBI)" },
        { label: dict.donation.bank.details.branch, value: "Kanyakumari Branch" },
        { label: dict.donation.bank.details.type, value: "Current Account" },
        { label: dict.donation.bank.details.status, value: "Exemption Pending Approval" }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
            <Navbar />

            <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">{dict.getInvolved.donate}</span>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-6">
                            {dict.nav.menu.donate}
                        </h1>
                        <p className="text-lg text-foreground-light dark:text-foreground-dark/70 max-w-2xl mx-auto italic border-y border-primary/10 py-8 px-4">
                            "{dict.donation.quote}"
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {donationOptions.map((opt, i) => (
                            <div key={i} className="group p-10 rounded-3xl bg-cream dark:bg-slate-900/50 border border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer text-center">
                                <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/5 group-hover:scale-110">
                                    <span className="material-symbols-outlined text-4xl">{opt.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">{opt.title}</h3>
                                <p className="text-foreground-light/70 dark:text-foreground-dark/60 leading-relaxed mb-8">
                                    {opt.desc}
                                </p>
                                <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95 group-hover:shadow-primary/20">
                                    {dict.donation.cta}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Bank Details & Legacy */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <div className="space-y-8 p-10 md:p-12 bg-primary/5 rounded-3xl border border-primary/10">
                            <h2 className="text-3xl font-bold text-primary mb-2">{dict.donation.bank.title}</h2>
                            <p className="text-foreground-light/70 dark:text-foreground-dark/60 mb-8 max-w-md">
                                {dict.donation.bank.desc}
                            </p>
                            <div className="space-y-4">
                                {trustDetails.map((detail, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-primary/10">
                                        <span className="text-foreground-light/60 dark:text-foreground-dark/50 font-medium">{detail.label}</span>
                                        <span className="text-foreground-light dark:text-foreground-dark font-bold">{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6">
                                <p className="text-xs text-foreground-light/50 dark:text-foreground-dark/40 max-w-sm italic">
                                    * Please email your receipt to donation@pancharatra.org for your official receipt and tax documents.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-12">
                            <div className="space-y-6">
                                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">{dict.donation.help.title}</h3>
                                <ul className="space-y-6">
                                    {dict.donation.help.items.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start group">
                                            <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">check_circle</span>
                                            <p className="text-foreground-light dark:text-foreground-dark/70">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 rounded-3xl bg-cream dark:bg-slate-900/50 border border-primary/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 animate-pulse group-hover:scale-150 transition-transform duration-[3s]"></div>
                                <p className="text-lg text-primary font-bold italic relative z-10">
                                    "One who has health, wealth, intelligence and words should use them all for the welfare of others."
                                </p>
                                <p className="text-xs text-foreground-light/50 dark:text-foreground-dark/40 mt-4 relative z-10">— Bhagavata Purana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
