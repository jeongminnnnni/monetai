'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function Problem() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t } = useLanguage();

    const problems = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: t('problem.card1.title'),
            description: t('problem.card1.desc'),
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: t('problem.card2.title'),
            description: t('problem.card2.desc'),
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: t('problem.card3.title'),
            description: t('problem.card3.desc'),
        },
    ];

    return (
        <section className="py-24 lg:py-32 bg-[var(--background)]" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        {t('problem.title.line1')}{' '}
                        <span className="bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white bg-clip-text text-transparent">
                            {t('problem.title.highlight')}
                        </span>
                        {t('problem.title.line2')}
                        <br />
                        {t('problem.title.line3')}
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-8 lg:p-10 rounded-3xl border border-[var(--border)] bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50 hover:border-[var(--foreground)]/20 transition-all duration-500"
                        >
                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-[var(--foreground)]/5 text-[var(--foreground)]">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold mb-3">{problem.title}</h3>
                            <p className="text-[var(--muted)] leading-relaxed">{problem.description}</p>

                            {/* Hover effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[var(--foreground)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
