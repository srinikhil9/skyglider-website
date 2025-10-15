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
    { src: '/images/Black SkyGlider View 2.jpg', alt: 'SkyGlider - Adjustment Mechanism' },
    { src: '/images/Black SkyGlider View 3.jpg', alt: 'SkyGlider - Side Angle' },
    { src: '/images/Black SkyGlider View 4.jpg', alt: 'SkyGlider - Detail View' },
    { src: '/images/Black SkyGlider View 5.jpg', alt: 'SkyGlider - Close Up' },
    { src: '/images/White SkyGlider View 1.jpg', alt: 'White SkyGlider - Main View' },
    { src: '/images/White SkyGlider View 2.jpg', alt: 'White SkyGlider - Side View' },
    { src: '/images/White SkyGlider View 3.jpg', alt: 'White SkyGlider - Detail' },
    { src: '/images/White SkyGlider View 4.jpg', alt: 'White SkyGlider - Angle View' },
    { src: '/images/Men_s Casual Shoe with SG.jpg', alt: 'SkyGlider on Men\'s Casual Shoe' },
    { src: '/images/Men_s Casual Shoe with SG 2.jpg', alt: 'SkyGlider on Men\'s Casual Shoe - Angle 2' },
    { src: '/images/Men_s Casual Shoe with SG 3.jpg', alt: 'SkyGlider on Men\'s Casual Shoe - Angle 3' },
    { src: '/images/Men_s Boot with SG.jpg', alt: 'SkyGlider on Men\'s Boot' },
    { src: '/images/Men_s Boot with SG 2.jpg', alt: 'SkyGlider on Men\'s Boot - Side View' },
    { src: '/images/Women_s Casual Shoe with SG.jpg', alt: 'SkyGlider on Women\'s Shoe' },
    { src: '/images/Women_s Casual Shoe with SG 2.jpg', alt: 'SkyGlider on Women\'s Shoe - Side View' },
    { src: '/images/Women_s Slipper with SG.jpg', alt: 'SkyGlider on Women\'s Slipper' },
    { src: '/images/Women_s Slipper with SG 2.jpg', alt: 'SkyGlider on Women\'s Slipper - Angle 2' },
    { src: '/images/SkyGlider in Airport View 1.jpg', alt: 'SkyGlider at Airport' },
    { src: '/images/SkyGlider in Airport View 2.jpg', alt: 'SkyGlider at Airport - View 2' },
    { src: '/images/SkyGlider in Airport View 3.jpg', alt: 'SkyGlider at Airport - View 3' },
    { src: '/images/SkyGlider in Backpack View 1.jpg', alt: 'SkyGlider - Portable in Backpack' },
    { src: '/images/SkyGlider in Backpack View 2.jpg', alt: 'SkyGlider - Backpack View 2' },
    { src: '/images/SkyGlider in Backpack View 3.jpg', alt: 'SkyGlider - Backpack View 3' },
    { src: '/images/Side Angle of SkyGlider on Foot.jpg', alt: 'SkyGlider Side Angle in Action' },
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
    <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      <Container>
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/SkyGlider Side Angle on Leg with Black Background.jpg" 
              alt="SkyGlider - Hero Shot"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 sm:mb-20 lg:mb-24 text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 lg:mb-8" style={{ color: '#0A0A0A' }}>
            SkyGlider
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold max-w-4xl mx-auto" style={{ color: '#1A1A1A' }}>
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
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black mb-6" style={{ color: '#0A0A0A' }}>
                About SkyGlider
              </h2>
              <p className="text-xl lg:text-2xl leading-relaxed mb-6 font-medium" style={{ color: '#1A1A1A' }}>
                SkyGlider is a simple tool designed to bring effortless movement into your daily routine. 
                Whether you're a frequent traveler or simply someone who believes in the power of movement, 
                SkyGlider will allow you to keep your legs moving.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#1A1A1A' }}>
                No complicated setup, no learning curve, no extraordinary maintenance — just fix it on 
                your shoe and roll with it (literally).
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100">
              <h3 className="text-xl lg:text-2xl font-black mb-4" style={{ color: '#0A0A0A' }}>
                What's Included
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-7 w-7 text-primary flex-shrink-0 mt-0.5 stroke-2" />
                  <span className="text-lg font-medium" style={{ color: '#1A1A1A' }}>1x SkyGlider Device</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-7 w-7 text-primary flex-shrink-0 mt-0.5 stroke-2" />
                  <span className="text-lg font-medium" style={{ color: '#1A1A1A' }}>Built-in Screw Knob Adjustment Mechanism</span>
                </li>
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl lg:text-2xl font-black mb-6" style={{ color: '#0A0A0A' }}>
                Specifications
              </h3>
              <div className="space-y-4">
                {specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-4 border-b-2 border-gray-200">
                    <span className="font-bold text-lg" style={{ color: '#0A0A0A' }}>{spec.label}</span>
                    <span className="text-lg font-medium" style={{ color: '#1A1A1A' }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
              <p className="text-xl font-bold mb-6 text-white">
                Ready to bring movement into your life?
              </p>
              <Button 
                href="https://www.tiktok.com/@skyglider" 
                variant="primary"
                className="bg-white text-primary hover:bg-gray-100 w-full shadow-lg"
              >
                Shop Now on TikTok
              </Button>
              <p className="text-base mt-4 text-center text-white font-medium">
                More platforms coming soon
              </p>
            </div>
          </motion.div>
        </div>

        {/* Colors Available Section */}
        <section className="mb-20 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#0A0A0A' }}>
              Available Colors
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold" style={{ color: '#1A1A1A' }}>
              Choose the perfect style for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square">
                <img 
                  src="/images/Black SkyGlider View 1.jpg" 
                  alt="Black SkyGlider"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl lg:text-3xl font-black mb-2" style={{ color: '#0A0A0A' }}>Black</h3>
                <p className="text-lg font-medium" style={{ color: '#1A1A1A' }}>Classic and versatile</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square">
                <img 
                  src="/images/White SkyGlider View 1.jpg" 
                  alt="White SkyGlider"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl lg:text-3xl font-black mb-2" style={{ color: '#0A0A0A' }}>White</h3>
                <p className="text-lg font-medium" style={{ color: '#1A1A1A' }}>Clean and modern</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Combo Package Section */}
        <section className="mb-20 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 lg:p-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#0A0A0A' }}>
                Combo Packages
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold max-w-3xl mx-auto" style={{ color: '#1A1A1A' }}>
                Get more, save more
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3]">
                  <img 
                    src="/images/Three Black SkyGliders (Combo Package Deal).jpg" 
                    alt="Three Pack Combo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-black mb-3" style={{ color: '#0A0A0A' }}>
                    3-Pack Combo
                  </h3>
                  <p className="text-lg font-medium" style={{ color: '#1A1A1A' }}>
                    Perfect for the whole family or multiple pairs of shoes
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3]">
                  <img 
                    src="/images/Multicolor SkyGlider Combo Package.jpg" 
                    alt="Multicolor Combo Package"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-black mb-3" style={{ color: '#0A0A0A' }}>
                    Multi-Color Pack
                  </h3>
                  <p className="text-lg font-medium" style={{ color: '#1A1A1A' }}>
                    Mix and match with different color options
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Key Features Section */}
        <section ref={featuresRef} className="mb-20 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#0A0A0A' }}>
              Key Features
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold" style={{ color: '#1A1A1A' }}>
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
                className="bg-white border-2 border-gray-200 rounded-3xl p-10 lg:p-12 hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-300"
              >
                <feature.icon className="h-16 w-16 lg:h-20 lg:w-20 text-primary mb-6 stroke-2" />
                <h3 className="text-2xl lg:text-3xl font-black mb-4" style={{ color: '#0A0A0A' }}>
                  {feature.title}
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#1A1A1A' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Perfect For Section */}
        <section ref={useCasesRef} className="mb-20 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#0A0A0A' }}>
              Perfect For
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold" style={{ color: '#1A1A1A' }}>
              SkyGlider fits into every lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-blue-100"
              >
                <div className="text-6xl lg:text-7xl mb-6">{useCase.icon}</div>
                <h3 className="text-xl lg:text-2xl font-black mb-4" style={{ color: '#0A0A0A' }}>
                  {useCase.title}
                </h3>
                <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
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
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 sm:p-16 lg:p-20 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 lg:mb-8 text-white">
            Start Your Movement Journey Today
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-10 lg:mb-14 max-w-3xl mx-auto leading-relaxed text-white font-medium">
            Join the growing community of people choosing to stay active, no matter where they are.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              href="https://www.tiktok.com/@skyglider"
              variant="primary"
              size="large"
              className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto shadow-xl"
            >
              Shop on TikTok
            </Button>
            <Button 
              href="/how-to-use"
              variant="outline"
              size="large"
              className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
            >
              Learn How to Use
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

