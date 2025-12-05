'use client';

import React from 'react';
import { CheckCircleIcon, AdjustmentsHorizontalIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import Container from '../components/Container';
import Button from '../components/Button';
import ImageGallery from '../components/ImageGallery';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProductPage() {
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [useCasesRef, useCasesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const productImages = [
    { src: '/images/Black SkyGlider View 1.jpg', alt: 'SkyGlider - Main View' },
    { src: '/images/Men_s Casual Shoe with SG.jpg', alt: 'SkyGlider on Casual Shoe' },
    { src: '/images/Black SkyGlider View 3.jpg', alt: 'SkyGlider - Side Angle' },
    { src: '/images/Women_s Casual Shoe with SG.jpg', alt: 'SkyGlider on Women\'s Shoe' },
    { src: '/images/SkyGlider in Backpack View 1.jpg', alt: 'SkyGlider - Portable Design' },
  ];

  const keyFeatures = [
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Adjustable Width',
      description: 'Built-in screw knob mechanism adjusts to fit any shoe size perfectly. From sneakers to dress shoes.',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Smooth Rolling Motion',
      description: 'Experience effortless back-and-forth or lateral movement. Designed for natural, fluid motion.',
    },
    {
      icon: CheckCircleIcon,
      title: 'Compact & Portable',
      description: 'Lightweight design fits easily in any bag. Take movement with you wherever you go.',
    },
    {
      icon: CheckCircleIcon,
      title: 'Universal Fit',
      description: 'Works with any shoe type and size. Adjustable mechanism ensures secure, snug fit every time.',
    },
  ];

  const useCases = [
    {
      icon: '✈️',
      title: 'Frequent Travelers',
      description: 'Perfect for long flights, airport waiting areas, and hotel rooms. Keep circulation going while you\'re on the move.',
    },
    {
      icon: '💼',
      title: 'Office Workers',
      description: 'Ideal for desk jobs and long meetings. Combat sitting fatigue and maintain leg movement throughout the workday.',
    },
    {
      icon: '📚',
      title: 'Students',
      description: 'Great for study sessions and lectures. Stay focused while keeping your body subtly active.',
    },
    {
      icon: '❤️',
      title: 'Health-Conscious',
      description: 'Anyone looking to combat a sedentary lifestyle. Small movements add up to big health benefits.',
    },
  ];

  const specifications = [
    { label: 'Weight', value: 'Lightweight & Portable' },
    { label: 'Materials', value: 'Durable, Smooth-Rolling Components' },
    { label: 'Adjustability', value: 'Fits All Shoe Sizes' },
    { label: 'Maintenance', value: 'Minimal - Just Wipe Clean' },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 lg:mb-6">
            SkyGlider
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium">
            Your simple solution for effortless movement, anywhere you sit
          </p>
        </motion.div>

        {/* Product Gallery and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 mb-16 sm:mb-20 lg:mb-28">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageGallery images={productImages} />
          </motion.div>

          {/* Product Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                About SkyGlider
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 font-normal">
                SkyGlider is a simple tool designed to bring effortless movement into your daily routine. 
                Whether you're a frequent traveler or simply someone who believes in the power of movement, 
                SkyGlider will allow you to keep your legs moving.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No complicated setup, no learning curve, no extraordinary maintenance — just fix it on 
                your shoe and roll with it (literally).
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-black/5 rounded-xl p-6 border border-black/10">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What's Included
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1x SkyGlider Device</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Built-in Screw Knob Adjustment Mechanism</span>
                </li>
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Specifications
              </h3>
              <div className="space-y-3">
                {specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-700">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase CTA */}
            <div className="bg-black rounded-xl p-6 text-white border border-white/10">
              <p className="text-lg font-semibold mb-4">
                Ready to bring movement into your life?
              </p>
              <Button
                href="https://www.tiktok.com/@theskygliderofficial"
                variant="primary"
                className="w-full"
              >
                Shop Now on TikTok
              </Button>
              <p className="text-sm mt-3 text-white/80 text-center">
                More platforms coming soon
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Features Section */}
        <section ref={featuresRef} className="mb-16 sm:mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Key Features
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700">
              Designed for simplicity, built for movement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300"
              >
                <feature.icon className="h-12 w-12 lg:h-14 lg:w-14 text-black mb-6" />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Perfect For Section */}
        <section ref={useCasesRef} className="mb-16 sm:mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Perfect For
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700">
              SkyGlider fits into every lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 lg:p-10 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl lg:text-6xl mb-6">{useCase.icon}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-black rounded-2xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-xl border border-white/10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white">
            Start Your Movement Journey Today
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join the growing community of people choosing to stay active, no matter where they are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              href="https://www.tiktok.com/@theskygliderofficial"
              variant="primary"
              size="large"
              className="w-full sm:w-auto"
            >
              Shop on TikTok
            </Button>
            <Button
              href="/how-to-use"
              variant="secondary"
              size="large"
              className="w-full sm:w-auto"
            >
              Learn How to Use
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

