'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, dictionary } from '@/lib/dictionary';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    dict: typeof dictionary.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('ta'); // Default is Tamil

    useEffect(() => {
        const savedLang = localStorage.getItem('pancharatra-lang') as Language;
        if (savedLang) setLang(savedLang);
    }, []);

    const handleSetLang = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem('pancharatra-lang', newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang: handleSetLang, dict: dictionary[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
