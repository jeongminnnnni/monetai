'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-[var(--border)]'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Left Section: Logo & Menu */}
                    <div className="flex items-center gap-12">
                        {/* Logo */}
                        <motion.button
                            onClick={scrollToTop}
                            className="flex items-center cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <img
                                src="/monetai.brandmark.white.svg"
                                alt="Monetai"
                                className="h-8 w-auto dark:invert"
                            />
                        </motion.button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href="https://dashboard.monetai.io"
                                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                            >
                                {t('nav.dashboard')}
                            </a>
                            <a
                                href="https://docs.monetai.io"
                                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                            >
                                {t('nav.docs')}
                            </a>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="p-2 hover:bg-[var(--border)] rounded-full transition-colors flex items-center gap-2"
                            title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                                <path
                                    strokeLinecap="round"
                                    strokeWidth="1.5"
                                    d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                                />
                            </svg>
                            <span className="text-xs font-medium uppercase">{language}</span>
                        </button>
                        <span className="w-px h-5 bg-[var(--border)]" />
                        <motion.a
                            href="https://calendly.com/monetai-jay"
                            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {t('nav.contact')}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="p-2 hover:bg-[var(--border)] rounded-lg transition-colors"
                            title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
                        >
                            <span className="text-xs font-medium uppercase">{language}</span>
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 hover:bg-[var(--border)] rounded-lg transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[var(--background)] border-t border-[var(--border)]"
                    >
                        <div className="px-6 py-4 space-y-4">
                            <a
                                href="https://dashboard.monetai.io"
                                className="block text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
                            >
                                {t('nav.dashboard')}
                            </a>
                            <a
                                href="https://docs.monetai.io"
                                className="block text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
                            >
                                {t('nav.docs')}
                            </a>
                            <a
                                href="https://calendly.com/monetai-jay"
                                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-full"
                            >
                                {t('nav.contact')}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
