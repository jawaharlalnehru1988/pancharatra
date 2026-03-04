'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import Link from 'next/link';

export default function ArticlesPage() {
    const { dict } = useLanguage();

    const categories = [
        { title: dict.articles.categories.teachings, icon: "book_2" },
        { title: dict.articles.categories.wisdom, icon: "school" },
        { title: dict.articles.categories.bhakti, icon: "self_improvement" },
        { title: dict.articles.categories.service, icon: "volunteer_activism" }
    ];

    const placeholderArticles = dict.articles.list.map((article, index) => ({
        ...article,
        category: categories[index % categories.length].title
    }));

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
            <Navbar />

            <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">{dict.articles.title}</span>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-6">
                            {dict.nav.menu.articles}
                        </h1>
                        <p className="text-lg text-foreground-light dark:text-foreground-dark/70 max-w-2xl mx-auto">
                            {dict.articles.subtitle}
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-cream dark:bg-slate-900/50 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all cursor-pointer group hover:-translate-y-1">
                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">{cat.icon}</span>
                                </div>
                                <h3 className="font-bold text-sm text-primary uppercase tracking-wider">{cat.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Article List */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {placeholderArticles.map((article, i) => (
                            <div key={i} className="group bg-cream dark:bg-slate-900/50 rounded-3xl border border-primary/5 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-primary/10 hover:border-primary/20">
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded-md">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-foreground-light/50 dark:text-foreground-dark/40">• {article.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-foreground-light/70 dark:text-foreground-dark/60 mb-6 line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold group/link">
                                        {dict.articles.readMore}
                                        <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-16 flex justify-center">
                        <div className="flex gap-2">
                            <button className="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</button>
                            <button className="size-10 rounded-full bg-cream dark:bg-slate-900/50 text-primary flex items-center justify-center font-bold border border-primary/10 hover:bg-primary/5">2</button>
                            <button className="size-10 rounded-full bg-cream dark:bg-slate-900/50 text-primary flex items-center justify-center font-bold border border-primary/10 hover:bg-primary/5">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
