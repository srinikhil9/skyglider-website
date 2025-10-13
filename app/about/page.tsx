'use client';

import React from 'react';
import { SparklesIcon, HeartIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Container from '../components/Container';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutPage() {
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: SparklesIcon,
      title: 'Simplicity',
      description: 'We believe the best solutions are the simplest ones. No complicated features, just pure functionality.',
    },
    {
      icon: HeartIcon,
      title: 'Accessibility',
      description: 'Movement should be available to everyone. That\'s why we priced SkyGlider at the cost of a coffee.',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Movement & Health',
      description: 'Small movements lead to big changes. We\'re committed to helping people stay active, wherever they are.',
    },
    {
      icon: UserGroupIcon,
      title: 'Customer-Driven',
      description: 'Your feedback shapes our future. We\'re building this together with our community.',
    },
  ];

  return (
    <div className="py-12">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About SkyGlider
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Bringing effortless movement into every moment of your day
          </p>
        </motion.div>

        {/* Brand Story */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                In today\'s world, we spend more time sitting than ever before. Whether it\'s long flights, 
                desk jobs, or study sessions, our bodies crave movement even when we can\'t get up and walk around.
              </p>
              <p>
                That\'s where SkyGlider comes in. We created a simple, portable tool that lets you keep your 
                legs moving no matter where you are. No gym membership required, no complicated setup, no 
                learning curve—just effortless movement at your fingertips (or rather, at your feet).
              </p>
              <p>
                We believe that staying active shouldn\'t be complicated or expensive. Movement is a fundamental 
                human need, and SkyGlider makes it accessible to everyone.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              To bring effortless movement into daily routines and empower people to live more dynamic, 
              active lives—no matter where they are or what they\'re doing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              We envision a world where maintaining an active lifestyle is as simple as sitting down with 
              your SkyGlider.
            </p>
          </motion.div>
        </section>

        {/* First Iteration Callout */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent to-accent-light rounded-2xl p-8 sm:p-12 text-white text-center"
          >
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4">
              You're One of the First!
            </h2>
            <p className="text-xl mb-4 opacity-90 max-w-2xl mx-auto">
              Congratulations! You\'re among the first to use SkyGlider. This is our initial iteration, 
              and we\'re so grateful for your support and trust.
            </p>
            <p className="text-lg opacity-90">
              We look forward to your feedback in shaping future versions!
            </p>
          </motion.div>
        </section>

        {/* Pricing Philosophy */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Pricing Philosophy</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We set SkyGlider at the price of a coffee because we believe movement should be accessible 
                to everyone. We\'re not focused on maximizing profits—we\'re focused on maximizing impact.
              </p>
              <p>
                Sure, you could spend the same amount on a coffee that lasts 20 minutes. Or you could invest 
                in SkyGlider and enjoy the benefits of movement for years to come.
              </p>
              <p>
                That\'s the kind of value we\'re committed to delivering: simple, affordable, and genuinely 
                beneficial to your daily life.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What\'s Next</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                This is just the beginning. We have exciting plans for future versions of SkyGlider, 
                including potential new features, enhanced materials, and even expanded product lines.
              </p>
              <p>
                But here\'s the thing: we\'re not building this alone. Your feedback, your ideas, and your 
                experiences with SkyGlider will directly shape what comes next.
              </p>
              <p>
                We\'re committed to continuous improvement and innovation, always with the goal of making 
                movement more accessible and effortless for everyone.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Feedback CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 sm:p-12 text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Help Shape the Future of SkyGlider
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We genuinely want to hear from you. Your feedback, suggestions, and ideas are invaluable 
            to us as we continue to evolve SkyGlider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/contact"
              variant="primary"
              size="large"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Send Us Feedback
            </Button>
            <Button 
              href="/product"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Learn More About SkyGlider
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

