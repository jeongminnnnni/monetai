'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import FlowingWaveGraph from './FlowingWaveGraph';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            // Floating animation for background elements
            gsap.to('.float-element', {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 0.5,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Floating circles */}
                <div className="float-element absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-gray-200/20 to-transparent dark:from-gray-800/20 blur-3xl" />
                <div className="float-element absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-gray-300/10 to-transparent dark:from-gray-700/10 blur-3xl" />
            </div>

            {/* Flowing Wave Graph */}
            <FlowingWaveGraph />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-8">
                        {t('hero.title.line1')}
                        <br />
                        <span className="bg-gradient-to-r from-gray-600 via-gray-800 to-black dark:from-gray-400 dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                            {t('hero.title.line2')} <br /> {t('hero.title.line3')}
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg md:text-xl lg:text-2xl text-[var(--muted)] max-w-3xl mx-auto mb-12"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.a
                        href="https://dashboard.monetai.io"
                        className="group relative inline-flex items-center justify-center px-10 py-5 md:px-14 md:py-6 bg-[var(--foreground)] text-[var(--background)] text-lg md:text-xl font-semibold rounded-full overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {t('hero.cta')}
                            <svg
                                className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
