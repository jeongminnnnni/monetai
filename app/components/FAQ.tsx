'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';

export default function FAQ() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { t } = useLanguage();

    const faqs = [
        {
            question: t('faq.q1'),
            answer: t('faq.a1'),
        },
        {
            question: t('faq.q2'),
            answer: t('faq.a2'),
        },
        {
            question: t('faq.q3'),
            answer: t('faq.a3'),
        },
        {
            question: t('faq.q4'),
            answer: t('faq.a4'),
        },
    ];

    return (
        <section
            className="py-24 lg:py-32 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent dark:via-gray-900/30"
            ref={ref}
        >
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        {t('faq.title')}
                    </h2>
                    <p className="text-lg lg:text-xl text-[var(--muted)]">
                        {t('faq.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--background)]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors"
                            >
                                <span className="text-lg lg:text-xl font-semibold pr-4">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--foreground)]/5"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
                                    </svg>
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                                            <p className="text-[var(--muted)] leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
