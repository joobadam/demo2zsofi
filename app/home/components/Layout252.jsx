"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ChevronRight, Scale, Shield, Users, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export function Layout252() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('home.criminalDefense'),
      subtitle: t('home.criminalDefenseSubtitle'),
      text: t('home.criminalDefenseText'),
      image: "/images/lawyer1.jpg",
      alt: "Büntetőjogi védelem - ügyvédi képviselet büntetőeljárásban"
    },
    {
      title: t('home.victimRepresentation'),
      subtitle: t('home.victimRepresentationSubtitle'),
      text: t('home.victimRepresentationText'),
      image: "/images/lawyer2.jpg",
      alt: "Sértetti képviselet - feljelentés és kártérítési igények"
    },
    {
      title: t('home.witnessSupport'),
      subtitle: t('home.witnessSupportSubtitle'),
      text: t('home.witnessSupportText'),
      image: "/images/malik-earnest-xgxzqRpK0UE-unsplash.jpg",
      alt: "Tanúk jogi támogatása - felkészítés meghallgatásokra"
    }
  ];

  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header Section */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.1} className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full mb-6">
            <Scale className="w-4 h-4 text-neutral-600" />
            <span className="text-sm font-medium text-neutral-600">{t('home.expertServices')}</span>
          </div>
          
          <h2 className="heading-h2 font-bold text-foreground mb-6">
            {t('home.servicesTitle')}
          </h2>
          
          <p className="text-xl text-neutral-dark max-w-3xl mx-auto leading-relaxed">
            {t('home.servicesDescription')}
          </p>
        </AnimatedGroup>

        {/* Aceternity Bento Grid - Neutral Colors */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${
                  index === 0 ? 'h-80' : 'h-48'
                }`}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                {/* Content */}
                <div className={`p-6 ${
                  index === 0 ? 'md:p-8' : ''
                }`}>
                  <h3 className={`font-bold text-foreground mb-2 group-hover:text-neutral-600 transition-colors duration-300 ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <h4 className={`font-medium mb-3 text-neutral-600 ${
                    index === 0 ? 'text-lg md:text-xl' : 'text-lg'
                  }`}>
                    {service.subtitle}
                  </h4>
                  
                  <p className={`text-neutral-dark mb-6 leading-relaxed ${
                    index === 0 ? 'text-base md:text-lg' : 'text-sm'
                  } ${
                    index === 0 ? '' : 'line-clamp-3'
                  }`}>
                    {service.text}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <Link href="/services" className="group">
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-all duration-300 hover:scale-105">
                        <span>{t('home.details')}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </Link>
                    
                    <div className="text-xs text-neutral-dark bg-neutral-100 px-3 py-1 rounded-full">
                      {index + 1}/3
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedGroup>

        {/* Bottom CTA */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.1} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-100 border border-neutral-200 rounded-full">
            <Shield className="w-5 h-5 text-neutral-600" />
            <span className="text-neutral-600 font-medium">{t('home.personalizedSolutions')}</span>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}