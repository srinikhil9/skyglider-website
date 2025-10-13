'use client';

import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleToggle = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqCategories: FAQCategory[] = [
    {
      title: 'Product Information',
      faqs: [
        {
          id: 'product-1',
          question: 'What is SkyGlider?',
          answer:
            'SkyGlider is a simple, portable tool designed to bring effortless movement into your daily routine. It attaches to your shoe and allows you to keep your legs moving while sitting, perfect for travelers, office workers, students, and anyone looking to combat a sedentary lifestyle.',
        },
        {
          id: 'product-2',
          question: 'How does it work?',
          answer:
            'SkyGlider sits under the front part of your foot while you\'re seated. You can roll your foot back and forth or laterally, creating smooth, natural movement. The built-in screw knob mechanism allows you to adjust the width to fit any shoe size securely.',
        },
        {
          id: 'product-3',
          question: 'What sizes does it fit?',
          answer:
            'SkyGlider features an adjustable width mechanism that fits all shoe sizes. Simply use the built-in screw knob to adjust until you get a snug, comfortable fit.',
        },
        {
          id: 'product-4',
          question: 'What is it made of?',
          answer:
            'SkyGlider is made from durable, smooth-rolling components designed to provide consistent performance. The materials are chosen for their longevity and low-maintenance requirements.',
        },
      ],
    },
    {
      title: 'Usage & Safety',
      faqs: [
        {
          id: 'usage-1',
          question: 'Is it safe to use?',
          answer:
            'Yes, SkyGlider is safe when used as directed. Always use it on flat, non-slip surfaces while seated. Do not stand or walk while using the device. If you have severe foot or ankle conditions, consult a healthcare professional before use.',
        },
        {
          id: 'usage-2',
          question: 'Can I walk while using it?',
          answer:
            'No, SkyGlider is designed for sitting use only. Do not attempt to stand or walk while using the device, as this could lead to instability or injury.',
        },
        {
          id: 'usage-3',
          question: 'How do I clean it?',
          answer:
            'Cleaning SkyGlider is simple—just wipe it down with a damp cloth when needed. The device requires minimal maintenance, making it easy to keep in good condition.',
        },
        {
          id: 'usage-4',
          question: 'Can I use it with any shoe?',
          answer:
            'Yes! The adjustable width mechanism works with any type of shoe—sneakers, dress shoes, sandals, and more. You can even use it with bare feet or socks.',
        },
        {
          id: 'usage-5',
          question: 'What surfaces can I use it on?',
          answer:
            'SkyGlider works best on flat, non-slip surfaces like carpeted floors, rubber mats, or stable hard floors. Avoid using it on slippery or uneven surfaces.',
        },
      ],
    },
    {
      title: 'Purchasing & Shipping',
      faqs: [
        {
          id: 'purchase-1',
          question: 'Where can I buy SkyGlider?',
          answer:
            'You can purchase SkyGlider on our TikTok Shop. We\'re working on making it available on additional platforms soon. Check our product page for the latest purchasing options.',
        },
        {
          id: 'purchase-2',
          question: 'How much does it cost?',
          answer:
            'SkyGlider is priced at about the cost of a coffee—we believe movement should be accessible to everyone. Visit our TikTok Shop for current pricing.',
        },
        {
          id: 'purchase-3',
          question: 'Do you ship internationally?',
          answer:
            'Shipping availability depends on the platform you purchase from. Check the TikTok Shop listing for current shipping options and international availability.',
        },
        {
          id: 'purchase-4',
          question: "What's your return policy?",
          answer:
            'Return policies are determined by the platform where you make your purchase. For TikTok Shop orders, please refer to their return policy. If you have any issues, contact us directly and we\'ll do our best to help.',
        },
      ],
    },
    {
      title: 'Support & Feedback',
      faqs: [
        {
          id: 'support-1',
          question: 'How do I contact support?',
          answer:
            'You can reach us through our contact page or email us directly at hello@theskyglider.com. We typically respond within 24-48 hours during business days.',
        },
        {
          id: 'support-2',
          question: 'Can I provide feedback?',
          answer:
            'Absolutely! We welcome and encourage feedback from our users. Your input helps shape future versions of SkyGlider. Use our contact form or email us with your thoughts, suggestions, and ideas.',
        },
        {
          id: 'support-3',
          question: 'Is there a warranty?',
          answer:
            'As this is our first iteration, we\'re committed to customer satisfaction. If you experience any issues with your SkyGlider, please contact us and we\'ll work with you to find a solution.',
        },
        {
          id: 'support-4',
          question: 'Are there instructions included?',
          answer:
            'Yes, basic usage instructions are included. You can also find detailed getting-started information on our "How to Use" page, which covers setup, safety guidelines, and tips for the best experience.',
        },
      ],
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about SkyGlider. Can't find what you're looking for? 
            Feel free to contact us!
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div ref={categoriesRef} className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq) => (
                  <Accordion
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === faq.id}
                    onToggle={() => handleToggle(faq.id)}
                  />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 sm:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/contact"
              variant="primary"
              size="large"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Contact Us
            </Button>
            <Button 
              href="/how-to-use"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              How to Use Guide
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}


