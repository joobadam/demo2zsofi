"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Sparkles } from "lucide-react";

export function Layout89() {
  const { t } = useLanguage();

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="help"
      className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-100/30 to-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="heading-h2 font-bold text-foreground bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                {t('home.helpTitle')}
              </h2>
            </div>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
            <p className="text-medium text-neutral-600 mb-8 md:mb-10 leading-relaxed">
              {t('home.helpDescription')}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                aria-label={t('home.helpContactButtonAria')}
              >
                <span>{t('home.helpContactButton')}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </AnimatedGroup>
        </div>

        <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group hover:scale-105 transition-transform duration-300">
              <img
                src="/images/handshake.jpg"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                alt="Professzionális jogi segítségnyújtás - kézfogás üzleti környezetben"
                loading="lazy"
              />
              
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/20 via-transparent to-neutral-900/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-900/30" />
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-neutral-800">✨ {t('home.professional')}</span>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}