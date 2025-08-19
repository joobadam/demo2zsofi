"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

export function Header44() {
  const { t } = useLanguage();

  const handleLearnMoreClick = () => {
    // Scroll to services section to show more about expertise
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
            <div>
              <h2 className="heading-h1 mb-5 font-bold md:mb-6 text-foreground">
                {t('about.title')}
              </h2>
            </div>
            
            <div>
              <p className="text-medium text-neutral-dark mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
              
              <p className="text-medium text-neutral-dark mb-6 leading-relaxed">
                {t('about.description2')}
              </p>
            </div>
            
            <div>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Black button, same style as in Header1.jsx */}
                <Link href="/services">
                <button
                  onClick={handleLearnMoreClick}
                  className="group relative inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-xl overflow-hidden"
                  aria-label={t('about.learnMoreButtonAria')}
                >
                
                  {/* Simple Black Background */}
                  <div className="absolute inset-0 bg-black rounded-xl" />
                  <span className="relative z-10 flex items-center gap-2">
                    {t('about.learnMoreButton')}
                    <span
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </button>
                </Link>
                {/* White button, same style as in Header1.jsx */}
                <Link href="/contact">
                <button
                  onClick={handleContactClick}
                  className="group relative inline-flex items-center gap-2 px-6 py-3 text-black font-medium rounded-xl overflow-hidden"
                  aria-label={t('about.contactButtonAria')}
                >
                  {/* Simple White Background */}
                  <div className="absolute inset-0 bg-white rounded-xl" />
                  <span className="relative z-10 flex items-center gap-2">
                    {t('about.contactButton')}
                    <span
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      ✉
                    </span>
                  </span>
                </button>
                </Link>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}