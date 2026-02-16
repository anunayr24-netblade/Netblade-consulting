'use client'

import Link from 'next/link'
import Carousel from '@/components/Carousel'
import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

// Animation variants
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]
const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT }
  }
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT }
  }
}

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT }
  }
}

export default function HomePage() {
  const servicesRef = useRef(null)
  const industriesRef = useRef(null)
  const whyChooseRef = useRef(null)
  const ctaRef = useRef(null)
  
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const industriesInView = useInView(industriesRef, { once: true, margin: "-100px" })
  const whyChooseInView = useInView(whyChooseRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })
  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
      alt: 'Website Development',
      title: 'Build Powerful Websites',
      description: 'Modern, secure, and conversion-focused websites tailored to your business goals'
    },
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
      alt: 'Team Collaboration',
      title: 'Your Trusted Growth Partner',
      description: 'Expert team dedicated to driving your business success with personalized solutions'
    },
    {
      src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80',
      alt: 'Digital Marketing',
      title: 'Grow Your Brand Online',
      description: 'Data-driven marketing strategies that attract and convert your target audience'
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
      alt: 'Business Analytics',
      title: 'Data-Driven Decisions',
      description: 'Transform insights into action with our comprehensive business analytics solutions'
    },
    {
      src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80',
      alt: 'Financial Services',
      title: 'Financial Clarity & Compliance',
      description: 'Expert guidance for business finance, GST, and tax compliance'
    },
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      alt: 'Modern Workspace',
      title: 'Professional Excellence',
      description: 'Delivering quality services with cutting-edge technology and industry expertise'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
      alt: 'Business Growth',
      title: 'Scale Your Business',
      description: 'Integrated solutions for sustainable business growth and success'
    },
    {
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80',
      alt: 'Success Strategy',
      title: '360° Business Solutions',
      description: 'Technology, marketing, and financial services working together for your success'
    }
  ]

  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 opacity-30">
            <motion.div 
              className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
              animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
              animate={{ 
                x: [0, -80, 0],
                y: [0, -60, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
              animate={{ 
                x: [0, -50, 0],
                y: [0, 40, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
        </div>
        <div className="container relative z-10">
          <Carousel images={carouselImages} />
        </div>
      </section>

      {/* Tagline Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: EASE_IN_OUT }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: EASE_IN_OUT }}
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
            >
              Empowering Businesses with <motion.span 
                className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >Technology</motion.span>, <motion.span 
                className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >Marketing</motion.span> & <motion.span 
                className="bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >Financial</motion.span> Expertise
            </motion.h1>
            <motion.p 
              className="text-xl md:text-3xl mb-8 text-blue-100 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Technology. Growth. Financial Clarity.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-blue-50 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              From websites that convert to marketing that drives growth and financial guidance that ensures compliance – we're your one-stop solution for business success.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
                  🚀 Get Started Today
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/about" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl border-2 border-white/30 transition-colors duration-300 inline-block">
                  Learn More About Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Netblade Consulting */}
      <section ref={whyChooseRef} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4 shadow-lg">THE NETBLADE ADVANTAGE</span>
            <h2 className="section-title text-5xl md:text-6xl mb-6">Why Netblade Consulting?</h2>
            <p className="section-subtitle text-xl max-w-3xl mx-auto">Your trusted partner for digital transformation and financial success — Where expertise meets innovation</p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn} className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >500+</motion.div>
              <div className="text-gray-600 font-semibold">Happy Clients</div>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >1000+</motion.div>
              <div className="text-gray-600 font-semibold">Projects Done</div>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >99%</motion.div>
              <div className="text-gray-600 font-semibold">Satisfaction</div>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >10+</motion.div>
              <div className="text-gray-600 font-semibold">Years Exp.</div>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              variants={scaleIn} 
              whileHover={{ y: -15, scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <motion.div 
                className="text-5xl mb-6 relative z-10" 
                animate={{ rotate: [0, 10, 0] }} 
                transition={{ duration: 3, repeat: Infinity }}
              >🎯</motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">One-Stop Solution</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">Website development, digital marketing, and financial compliance — all expertly managed under one roof for seamless coordination</p>
            </motion.div>

            <motion.div 
              variants={scaleIn} 
              whileHover={{ y: -15, scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <motion.div 
                className="text-5xl mb-6 relative z-10" 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 3, repeat: Infinity }}
              >📊</motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">Result-Driven</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">Data-backed strategies with measurable ROI. Every decision is compliance-focused and analytics-based for guaranteed success</p>
            </motion.div>

            <motion.div 
              variants={scaleIn} 
              whileHover={{ y: -15, scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <motion.div 
                className="text-5xl mb-6 relative z-10" 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 3, repeat: Infinity }}
              >💰</motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">Transparent Pricing</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">No hidden costs, no surprises. Affordable packages with clear pricing that scales as your business grows</p>
            </motion.div>

            <motion.div 
              variants={scaleIn} 
              whileHover={{ y: -15, scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-purple-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <motion.div 
                className="text-5xl mb-6 relative z-10" 
                animate={{ rotate: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity }}
              >✨</motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">Customized Strategy</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">Tailored solutions designed specifically for your industry, target audience, and business goals — never generic templates</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">WHAT WE OFFER</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive solutions designed to power your growth and success</p>
          </motion.div>

          {/* Services Grid - Horizontal Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Website Development */}
            <motion.div variants={scaleIn}>
              <motion.div 
                className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-8 rounded-2xl shadow-xl border border-blue-200 h-full flex flex-col"
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&q=80" 
                  alt="Website Development" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Website Development</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  High-performance, secure, and conversion-focused websites built to scale your business
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">✓ Business & Corporate Websites</p>
                  <p className="text-sm text-gray-600">✓ Real Estate Websites</p>
                  <p className="text-sm text-gray-600">✓ WordPress Development</p>
                  <p className="text-sm text-gray-600">✓ Website Redesign</p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                  <Link href="/services/website-development/business" className="inline-block btn-primary w-full text-center">
                    Learn More →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div variants={scaleIn}>
              <motion.div 
                className="bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 p-8 rounded-2xl shadow-xl border border-green-200 h-full flex flex-col"
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop&q=80" 
                  alt="Digital Marketing" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Marketing</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  Grow your brand, leads & revenue with data-driven digital marketing strategies
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">✓ Search Engine Optimization (SEO)</p>
                  <p className="text-sm text-gray-600">✓ Social Media Marketing</p>
                  <p className="text-sm text-gray-600">✓ Google Ads & PPC</p>
                  <p className="text-sm text-gray-600">✓ Content Marketing</p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                  <Link href="/services/digital-marketing" className="inline-block btn-primary w-full text-center">
                    Learn More →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Financial & Compliance Services */}
            <motion.div variants={scaleIn}>
              <motion.div 
                className="bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-8 rounded-2xl shadow-xl border border-yellow-200 h-full flex flex-col"
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=80" 
                  alt="Financial Services" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial & Compliance</h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  Simplifying business finance & compliance for sustainable growth and peace of mind
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">✓ GST Registration & Filing</p>
                  <p className="text-sm text-gray-600">✓ Income Tax Filing (ITR)</p>
                  <p className="text-sm text-gray-600">✓ Business Registration</p>
                  <p className="text-sm text-gray-600">✓ Compliance Advisory</p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                  <Link href="/services/financial" className="inline-block btn-primary w-full text-center">
                    Learn More →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* View All Services Button */}
          <motion.div 
            className="text-center mt-16"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <Link href="/services" className="btn-primary text-lg px-8 py-4 inline-block">
              View All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section ref={industriesRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={industriesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">WHO WE WORK WITH</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tailored solutions designed for diverse business needs across industries</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={industriesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Link href="/industries/startups" className="block bg-white rounded-lg shadow-lg overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop&q=80" alt="Startups" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div className="p-6" whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}>
                  <h3 className="text-xl font-bold mb-3">Startups & Small Businesses</h3>
                  <p className="text-gray-600">Launch and scale your business with confidence</p>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Link href="/industries/real-estate" className="block bg-white rounded-lg shadow-lg overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=300&fit=crop&q=80" alt="Real Estate" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div className="p-6" whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}>
                  <h3 className="text-xl font-bold mb-3">Real Estate Consultants</h3>
                  <p className="text-gray-600">Showcase properties and attract buyers online</p>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Link href="/industries/traders" className="block bg-white rounded-lg shadow-lg overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop&q=80" alt="Financial Professionals" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div className="p-6" whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}>
                  <h3 className="text-xl font-bold mb-3">Financial Professionals</h3>
                  <p className="text-gray-600">Complete financial and compliance solutions</p>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Link href="/industries/coaches" className="block bg-white rounded-lg shadow-lg overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=300&fit=crop&q=80" alt="Coaches" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div className="p-6" whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}>
                  <h3 className="text-xl font-bold mb-3">Coaches & Educators</h3>
                  <p className="text-gray-600">Expand your reach and impact</p>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Link href="/industries/freelancers" className="block bg-white rounded-lg shadow-lg overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop&q=80" alt="Freelancers" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div className="p-6" whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}>
                  <h3 className="text-xl font-bold mb-3">Freelancers & Professionals</h3>
                  <p className="text-gray-600">Build your personal brand online</p>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=300&fit=crop&q=80" alt="Local Business" className="w-full h-48 object-cover" />
              </motion.div>
              <motion.div className="p-6" whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}>
                <h3 className="text-xl font-bold mb-3">Local & Service Businesses</h3>
                <p className="text-gray-600">Dominate your local market digitally</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Value Proposition */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-40">
          <motion.div 
            className="absolute top-0 left-1/4 w-2 h-2 bg-blue-500 rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-20 right-1/4 w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/3 w-2 h-2 bg-purple-500 rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              ✓ TRUSTED BY 500+ BUSINESSES
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Why Choose Netblade Consulting?</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your success is our mission — Experience the <span className="text-blue-600 font-semibold">Netblade difference</span> where innovation meets dedication
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              variants={slideInLeft} 
              whileHover={{ y: -15, scale: 1.03, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.25)" }}
              className="relative p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-xl border border-blue-100 overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-start relative z-10">
                <motion.div 
                  className="text-5xl mr-6 text-blue-600 bg-blue-100 p-4 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >🎯</motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Integrated 360° Expertise</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-blue-600">Tech + Marketing + Finance</span> — A rare combination that saves you time, money, and coordination headaches
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>Single point of contact</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>Seamless team coordination</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>Holistic growth strategy</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={slideInRight} 
              whileHover={{ y: -15, scale: 1.03, boxShadow: "0 25px 50px rgba(16, 185, 129, 0.25)" }}
              className="relative p-8 bg-gradient-to-br from-green-50 via-white to-green-100 rounded-2xl shadow-xl border border-green-100 overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-start relative z-10">
                <motion.div 
                  className="text-5xl mr-6 text-green-600 bg-green-100 p-4 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >🎖️</motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-900">Honest & Ethical Consulting</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-green-600">No false promises, just real results</span> — Our reputation is built on transparency, integrity, and proven performance
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Clear communication</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Realistic timelines</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Measurable outcomes</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={slideInLeft} 
              whileHover={{ y: -15, scale: 1.03, boxShadow: "0 25px 50px rgba(168, 85, 247, 0.25)" }}
              className="relative p-8 bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-2xl shadow-xl border border-purple-100 overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-start relative z-10">
                <motion.div 
                  className="text-5xl mr-6 text-purple-600 bg-purple-100 p-4 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >📈</motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-900">Scalable & Future-Ready</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-purple-600">Grow without limits</span> — Our flexible solutions and modular services evolve with your ambitions and market demands
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span>Flexible packages</li>
                    <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span>Easy upgrades</li>
                    <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span>Latest technologies</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={slideInRight} 
              whileHover={{ y: -15, scale: 1.03, boxShadow: "0 25px 50px rgba(249, 115, 22, 0.25)" }}
              className="relative p-8 bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-2xl shadow-xl border border-orange-100 overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-start relative z-10">
                <motion.div 
                  className="text-5xl mr-6 text-orange-600 bg-orange-100 p-4 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >❤️</motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-900">Client-First, Always</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-orange-600">Your success = Our success</span> — We're not just service providers, we're your dedicated growth partners invested in your journey
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>24/7 support available</li>
                    <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Personalized attention</li>
                    <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Long-term partnerships</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-2 rounded-2xl shadow-2xl"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-xl p-8 md:p-12">
              <p className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Trusted by startups, SMEs, and established businesses across India 🇮🇳
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Data Security</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-green-600 mb-2">ISO</div>
                  <div className="text-sm text-gray-600">Quality Standard</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-purple-600 mb-2">CA</div>
                  <div className="text-sm text-gray-600">Certified Team</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-pink-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Exp.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div 
              className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: EASE_IN_OUT }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
              animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: EASE_IN_OUT }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
              animate={{ y: [0, -20, 0], x: [0, 20, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: EASE_IN_OUT }}
            />
          </div>
        </div>
        <div className="container text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              LET&apos;S GET STARTED
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Ready to Transform Your <motion.span 
                className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >Business</motion.span>?
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-blue-100 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Let&apos;s build, grow, and optimize together — achieve your goals with expert guidance
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl inline-flex items-center justify-center gap-2">
                  📞 Book Free Consultation
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact#quote" className="bg-transparent backdrop-blur-sm border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 inline-flex items-center justify-center gap-2">
                  📋 Get a Quote
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
