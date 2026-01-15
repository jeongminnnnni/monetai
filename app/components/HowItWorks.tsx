'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/app/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const { t } = useLanguage();

    const steps = [
        {
            number: '01',
            title: 'User Behavior Analysis',
            subtitle: t('how.step1.subtitle'),
            description: t('how.step1.desc'),
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'Purchase Prediction',
            subtitle: t('how.step2.subtitle'),
            description: t('how.step2.desc'),
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Targeted Promotions',
            subtitle: t('how.step3.subtitle'),
            description: t('how.step3.desc'),
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            ),
        },
    ];

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Animate timeline line
            gsap.fromTo(
                '.timeline-line',
                { scaleY: 0, transformOrigin: 'top' },
                {
                    scaleY: 1,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        end: 'bottom 40%',
                        scrub: 1,
                    },
                }
            );

            // Animate step cards on scroll
            gsap.utils.toArray('.step-card').forEach((card, i) => {
                gsap.fromTo(
                    card as Element,
                    { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card as Element,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/50 dark:to-transparent"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        {t('how.title.line1')}{' '}
                        <span className="bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white bg-clip-text text-transparent">
                            {t('how.title.highlight')}
                        </span>
                        {t('how.title.line2')}
                        {t('how.title.line3') && (
                            <>
                                <br />
                                {t('how.title.line3')}
                            </>
                        )}
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
                        <div className="timeline-line h-full w-full bg-gradient-to-b from-[var(--foreground)] via-[var(--foreground)] to-transparent" />
                    </div>

                    {/* Steps */}
                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`step-card relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                                    <div className="p-8 lg:p-10 rounded-3xl border border-[var(--border)] bg-[var(--background)] hover:shadow-xl transition-all duration-500">
                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                                            <span className="text-sm font-mono text-[var(--muted)]">{step.number}</span>
                                            <span className="h-px flex-1 max-w-[60px] bg-[var(--border)]" />
                                        </div>
                                        <div className={`inline-flex p-3 rounded-2xl bg-[var(--foreground)]/5 mb-4`}>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-bold mb-1">{step.title}</h3>
                                        <p className="text-[var(--muted)] font-medium mb-3">{step.subtitle}</p>
                                        <p className="text-[var(--muted)] leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Timeline dot */}
                                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--foreground)] border-4 border-[var(--background)] z-10" />

                                {/* Spacer for alternating layout */}
                                <div className="hidden lg:block lg:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
