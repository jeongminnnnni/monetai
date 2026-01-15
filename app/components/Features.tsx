'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function Features() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t } = useLanguage();

    const features = [
        {
            icon: '✅',
            title: 'No Cannibalization',
            description: t('features.card1.desc'),
        },
        {
            icon: '✅',
            title: 'Zero Setup',
            description: t('features.card2.desc'),
        },
        {
            icon: '✅',
            title: 'Performance Pricing',
            description: t('features.card3.desc'),
        },
        {
            icon: '✅',
            title: 'A/B Testing',
            description: t('features.card4.desc'),
        },
    ];

    return (
        <section className="py-24 lg:py-32 bg-[var(--background)]" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        {t('features.title.line1')}{' '}
                        <span className="bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white bg-clip-text text-transparent">
                            Monetai
                        </span>
                        {t('features.title.line2')}
                    </h2>
                    <p className="text-lg lg:text-xl text-[var(--muted)] max-w-2xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-8 rounded-3xl border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--foreground)] transition-colors duration-500 cursor-pointer"
                        >
                            <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                                {feature.icon}
                            </div>

                            <h3 className="text-lg lg:text-xl font-bold mb-3 group-hover:text-[var(--background)] transition-colors duration-500">
                                {feature.title}
                            </h3>

                            <p className="text-[var(--muted)] group-hover:text-[var(--background)]/70 leading-relaxed transition-colors duration-500">
                                {feature.description}
                            </p>

                            {/* Hover arrow */}
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <svg
                                    className="w-6 h-6 text-[var(--background)]"
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
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
