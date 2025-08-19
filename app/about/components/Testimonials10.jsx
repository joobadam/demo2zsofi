"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Testimonials10() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Kovács Anna",
      role: t("about.client"),
      company: "TechFlow Kft.",
      content: t("about.testimonial1"),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2",
    },
    {
      id: 2,
      name: "Nagy Péter",
      role: t("about.client"),
      company: "InnovateLab",
      content: t("about.testimonial2"),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2",
    },
    {
      id: 3,
      name: "Szabó Eszter",
      role: t("about.client"),
      company: "Digital Solutions",
      content: t("about.testimonial3") || "Professzionális hozzáállás és kreatív megoldások. A csapat megértette a víziómat és tökéletesen megvalósította azt.",
      rating: 5,
      avatar: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-h2 font-bold  mb-4">
            {t("about.testimonialsTitle")}
          </h2>
          <p className="text-xl text-black/50 max-w-2xl mx-auto">
            {t("about.testimonialsSubtitle")}
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative mb-16">
          <div className="bg-black rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full translate-y-12 -translate-x-12"></div>

            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-6xl text-purple-300 dark:text-purple-600 font-serif">"</div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed font-medium">
                {currentTestimonial.content}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-slate-700 dark:border-slate-600 shadow-lg"
                />
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{currentTestimonial.name}</div>
                  <div className="text-white/80">{currentTestimonial.role}</div>
                  <div className="text-purple-300 dark:text-purple-400 font-medium">{currentTestimonial.company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label={t('about.previousTestimonial')}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label={t('about.nextTestimonial')}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-purple-800 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={t('about.goToTestimonial', { number: index + 1 })}
            />
          ))}
        </div>

        {/* Preview Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`bg-black rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                index === currentIndex
                  ? "ring-2 ring-purple-400 shadow-lg"
                  : "hover:ring-1 hover:ring-white/30"
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-white/60 text-xs">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-white/80 text-sm line-clamp-3">{testimonial.content}</p>
              <div className="flex mt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-white  fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}