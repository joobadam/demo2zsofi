"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";
import { Star, Award, Shield, Users, Sparkles } from "lucide-react";

export function Header1() {
  const { t } = useLanguage();

  return (
    <header className="relative px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden" role="banner">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neutral-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-neutral-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-neutral-200/20 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20 lg:items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full mb-6">
                <Star className="w-4 h-4 text-neutral-600 animate animate-bounce" />
                <span className="text-sm font-medium text-neutral-600">Szakértő ügyvédi tanácsadás</span>
              </div>
              
              <h1 className="heading-h1 mb-5 md:mb-6 text-foreground text-left font-bold">
                {t('home.title')}
              </h1>
            </AnimatedGroup>
            
            <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
              <p className="text-xl text-neutral-dark mb-6 md:mb-8 text-left leading-relaxed">
                {t('home.subtitle')}
              </p>
            </AnimatedGroup>

            {/* CTA Buttons */}
            <AnimatedGroup preset="blur-slide" staggerDelay={0.1} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {/* Simple Black Background */}
                <div className="absolute inset-0 bg-black rounded-xl" />
                
                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  {t('home.servicesButton')}
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </div>
                </span>
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-black font-medium rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {/* Simple White Background */}
                <div className="absolute inset-0 bg-white rounded-xl" />
                
                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  {t('home.contactButton')}
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    ✉
                  </div>
                </span>
              </button>
            </AnimatedGroup>

            <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="text-sm font-medium text-neutral-600 m-10">{t('home.expertLegalAdvice')}</span>
              </div>
            </AnimatedGroup>

            {/* Trust indicators */}
            <AnimatedGroup preset="blur-slide" staggerDelay={0.1} className="mt-8 flex items-center gap-6 text-sm text-neutral-dark">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{t('home.trustedAttorney')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t('home.dataProtection')}</span>
              </div>
            </AnimatedGroup>
          </div>
          
          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
              {/* Main Image Container */}
              <div className="relative group">
                <img
                 src="/images/6930F625-6A63-441B-BA7A-65C232D77FF9.jpeg"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  alt="Dr. Szomor Zsófia Anna ügyvéd portréja"
                  loading="eager"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-neutral-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-neutral-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Star className="w-6 h-6 text-white" />
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </header>
  );
}