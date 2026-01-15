'use client';

import { useLanguage } from '@/app/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-12 lg:py-16 bg-[var(--background)] border-t border-[var(--border)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Company Info */}
                    <div className="space-y-3 text-sm text-[var(--muted)]">
                        <p>
                            <span className="font-semibold text-[var(--foreground)]">{t('footer.company')}</span>
                            <span className="mx-2">|</span>
                            {t('footer.ceo')}
                        </p>
                        <p>{t('footer.address')}</p>
                        <p>
                            {t('footer.business')}
                            <span className="mx-2">|</span>
                            {t('footer.ecommerce')}
                        </p>
                    </div>

                    {/* Logo and Links */}
                    <div className="flex flex-col items-start lg:items-end gap-4">
                        <img
                            src="/monetai.brandmark.white.svg"
                            alt="Monetai"
                            className="h-7 w-auto dark:invert"
                        />
                        <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
                            <a href="#" className="hover:text-[var(--foreground)] transition-colors">
                                {t('footer.terms')}
                            </a>
                            <a href="#" className="hover:text-[var(--foreground)] transition-colors">
                                {t('footer.privacy')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-[var(--border)]">
                    <p className="text-sm text-[var(--muted)] text-center lg:text-left">
                        Copyright © Monetai. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
