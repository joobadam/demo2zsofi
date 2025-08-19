"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Scale, Users, Building, Home, Sparkles, ArrowRight, Shield, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

export function Layout254() {
  const { t } = useLanguage();

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Scale,
      title: t('services.criminalDefenseService'),
      description: t('services.criminalDefenseServiceDescription'),
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: t('services.familyLawService'), 
      description: t('services.familyLawServiceDescription'),
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Building,
      title: t('services.corporateService'),
      description: t('services.corporateServiceDescription'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Home,
      title: t('services.realEstateService'),
      description: t('services.realEstateServiceDescription'),
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section className="relative px-[5%] py-20 md:py-28 lg:py-32 bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
          <div className="mb-16 md:mb-20 lg:mb-24">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark shadow-xl rounded-3xl flex items-center justify-center border-4 border-white/10">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="heading-h2 mb-4 font-bold md:mb-5 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                    {t('services.comprehensiveTitle')}
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1 bg-gradient-to-r  rounded-full" />
                    <span className="text-lg text-white/80 font-medium">
                      {t('services.comprehensiveSubtitle')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>

        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          {/* Left Column */}
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            {services.slice(0, 2).map((service, index) => (
              <AnimatedGroup key={index} preset="blur-slide" staggerDelay={0.15}>
                <div className="group relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:scale-105">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg border border-white/20`}>
                      <service.icon className="size-8 text-white" />
                    </div>
                  </div>
                  <h3 className="heading-h4 mb-4 font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-medium text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </AnimatedGroup>
            ))}
          </div>

          {/* Center Image */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
            <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="/images/law2.jpg"
                  alt="Professzionális jogi szolgáltatások - Dr. Szomor Zsófia Anna ügyvéd"
                  className="w-full h-[400px] md:h-[400px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
                
                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    {t('services.professional')}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedGroup>

          {/* Right Column */}
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            {services.slice(2, 4).map((service, index) => (
              <AnimatedGroup key={index + 2} preset="blur-slide" staggerDelay={0.15}>
                <div className="group relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:scale-105">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg border border-white/20`}>
                      <service.icon className="size-8 text-white" />
                    </div>
                  </div>
                  <h3 className="heading-h4 mb-4 font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-medium text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </AnimatedGroup>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
          <div className="mt-16 md:mt-20 text-center">
            <motion.button
              onClick={handleContactClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white  font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Kapcsolatfelvétel"
            >
              <span>{t('services.contactButton')}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}