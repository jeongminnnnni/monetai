'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/app/context/LanguageContext';

export default function FinalCTA() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 lg:py-32 bg-[var(--foreground)]" ref={ref}>
            <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[var(--background)] mb-6 leading-snug">
                        {t('cta.title.line1')}
                        <br />
                        {t('cta.title.line2')}
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg lg:text-xl text-[var(--background)]/70 max-w-2xl mx-auto mb-12"
                    >
                        {t('cta.subtitle.line1')}
                        <br />
                        {t('cta.subtitle.line2')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.a
                            href="https://calendly.com/monetai-jay"
                            className="group inline-flex items-center gap-3 px-10 py-5 md:px-14 md:py-6 bg-[var(--background)] text-[var(--foreground)] text-lg md:text-xl font-semibold rounded-full"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {t('cta.button')}
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
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--background)]/20 to-transparent" />
            </div>
        </section >
    );
}
