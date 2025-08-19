"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ChevronRight, Phone, Mail, MessageCircle, Clock, MapPin, Sparkles, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

export function Layout4() {
  const { t } = useLanguage();
  const phoneNumber = "+36309713467";
  const emailAddress = "drszomorzsofia@gmail.com";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=Jogi konzultáció kérése`;
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phoneNumber'),
      value: phoneNumber,
      action: handleCallClick,
      color: "from-blue-500 to-indigo-500",
      href: `tel:${phoneNumber}`
    },
    {
      icon: Mail,
      title: t('contact.emailAddress'),
      value: emailAddress,
      action: handleEmailClick,
      color: "from-green-500 to-emerald-500",
      href: `mailto:${emailAddress}?subject=Jogi konzultáció kérése`
    }
  ];

  return (
    <section className="relative px-[5%] py-20 md:py-28 lg:py-32 bg-black text-white overflow-hidden">
    

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-16 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-16 lg:gap-x-24">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.15}>
            <div>
              {/* Enhanced header section */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark shadow-xl rounded-3xl flex items-center justify-center border-4 border-white/10">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="mb-2 font-semibold text-primary text-lg">Kapcsolat</p>
                  <h2 className="heading-h2 font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                    {t('contact.contactTitle')}
                  </h2>
                </div>
              </div>
              
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                {t('contact.contactSubtitle')}
              </p>
              
              {/* Modern contact info cards */}
              <div className="grid grid-cols-1 gap-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`relative w-12 h-12 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <info.icon className="size-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h6 className="heading-h6 mb-2 font-bold text-white">
                          {info.title}
                        </h6>
                        <a 
                          href={info.href}
                          className="text-lg text-white/90 hover:text-white transition-colors duration-200 break-all"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced CTA buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  onClick={handleCallClick}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r bg-black text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Ugrás a telefonhíváshoz"
                  type="button"
                >
                  <Phone className="size-5" />
                  <span>{t('contact.callButton')}</span>
                </motion.button>
                
                <motion.button
                  onClick={handleEmailClick}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-white/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Ugrás az email küldéshez"
                  type="button"
                >
                  <Mail className="size-5" />
                  <span>{t('contact.emailButton')}</span>
                  <ChevronRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </div>
          </AnimatedGroup>
          
          {/* Enhanced image section */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.1}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="/images/6930F625-6A63-441B-BA7A-65C232D77FF9.jpeg"
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Dr. Szomor Zsófia Anna ügyvédi iroda - személyes konzultáció"
                  loading="lazy"
                />
                {/* Enhanced gradient overlay */}
          
                
                {/* Floating info badges */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {t('contact.appointmentRequired')}
                  </span>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-primary backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {t('contact.professional')}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}