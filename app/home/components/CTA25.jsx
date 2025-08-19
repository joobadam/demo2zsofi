"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export function CTA25() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.1} className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">{t('home.contact')}</span>
            </div>
          </div>

          {/* Title */}
          <div className="mb-6">
            <h2 className="heading-h2 font-bold text-white mb-4">
              {t('home.ctaTitle')}
            </h2>
            <div className="w-24 h-1 bg-white/30 rounded-full mx-auto"></div>
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              {t('home.ctaDescription')}
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <Link href="/contact" className="group">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-2xl hover:bg-neutral-100 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl">
                <span>{t('home.ctaContactButton')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8">
            <div className="flex items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>{t('home.trustedAttorney')}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>{t('home.freeConsultation')}</span>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}