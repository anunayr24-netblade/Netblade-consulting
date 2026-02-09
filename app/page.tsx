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
      src: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1920&q=80',
      alt: 'Digital Marketing',
      title: 'Grow Your Brand Online',
      description: 'Data-driven marketing strategies that attract and convert your target audience'
    },
    {
      src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80',
      alt: 'Financial Services',
      title: 'Financial Clarity & Compliance',
      description: 'Expert guidance for business finance, GST, and tax compliance'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
      alt: 'Business Growth',
      title: 'Scale Your Business',
      description: 'Integrated solutions for sustainable business growth and success'
    }
  ]

  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="bg-gray-900 py-8">
        <div className="container">
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
      <section ref={whyChooseRef} className="py-16 bg-gray-50">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="section-title">Why Netblade Consulting?</h2>
            <p className="section-subtitle">Your trusted partner for digital transformation and financial success</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn} whileHover={{ y: -10, scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
              <motion.div className="text-4xl mb-4" animate={{ rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎯</motion.div>
              <h3 className="text-xl font-bold mb-3">One-Stop Solution</h3>
              <p className="text-gray-600">All your digital & financial needs under one roof</p>
            </motion.div>
            <motion.div variants={scaleIn} whileHover={{ y: -10, scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
              <motion.div className="text-4xl mb-4" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>📊</motion.div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Approach</h3>
              <p className="text-gray-600">Compliance-focused and analytics-based decisions</p>
            </motion.div>
            <motion.div variants={scaleIn} whileHover={{ y: -10, scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
              <motion.div className="text-4xl mb-4" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>💰</motion.div>
              <h3 className="text-xl font-bold mb-3">Affordable & Scalable</h3>
              <p className="text-gray-600">Transparent pricing that grows with your business</p>
            </motion.div>
            <motion.div variants={scaleIn} whileHover={{ y: -10, scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
              <motion.div className="text-4xl mb-4" animate={{ rotate: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>✨</motion.div>
              <h3 className="text-xl font-bold mb-3">Personalized Strategies</h3>
              <p className="text-gray-600">Custom solutions, not cookie-cutter templates</p>
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

          {/* Website Development */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-10 rounded-2xl shadow-xl border border-blue-200"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
                <motion.img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&q=80" 
                  alt="Website Development" 
                  className="w-full md:w-48 h-48 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Website Development Services</h3>
                  <p className="text-lg text-gray-700 mt-2">
                    High-performance, secure, and conversion-focused websites built to scale
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                In today&apos;s digital-first world, your website is more than just an online address — it is your 
                brand identity, sales engine, and credibility builder. We design and develop websites tailored 
                to your business goals.
              </p>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Business & Corporate Websites</h4>
                  <p className="text-sm text-gray-600">Professional sites for companies & consultants</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Real Estate Websites</h4>
                  <p className="text-sm text-gray-600">Property listings with lead generation</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ WordPress Development</h4>
                  <p className="text-sm text-gray-600">Flexible, easy-to-manage websites</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Static & Dynamic Websites</h4>
                  <p className="text-sm text-gray-600">Fast static or database-driven dynamic sites</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Website Redesign</h4>
                  <p className="text-sm text-gray-600">Modernize & optimize existing sites</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Maintenance & Support</h4>
                  <p className="text-sm text-gray-600">Regular updates & security monitoring</p>
                </motion.div>
              </motion.div>
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-lg">What You Get:</h4>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  initial="hidden"
                  animate={servicesInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                >
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Clean & modern UI design</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Mobile & tablet responsive</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ SEO-ready structure</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Contact & lead forms</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Fast page speed</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Secure admin access</motion.p>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services/website-development/business" className="inline-block mt-6 btn-primary">
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Digital Marketing */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={slideInRight}
          >
            <motion.div 
              className="bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 p-10 rounded-2xl shadow-xl border border-green-200"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
                <motion.img 
                  src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop&q=80" 
                  alt="Digital Marketing" 
                  className="w-full md:w-48 h-48 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Digital Marketing Services</h3>
                  <p className="text-lg text-gray-700 mt-2">
                    Grow Your Brand, Leads & Revenue with Smart Digital Marketing
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                In a competitive digital world, simply being online is not enough. Your business needs visibility, 
                engagement, and consistent leads. We provide data-driven digital marketing solutions designed to 
                attract the right audience and convert them into paying customers.
              </p>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Search Engine Optimization (SEO)</h4>
                  <p className="text-sm text-gray-600">Rank higher on Google for long-term traffic</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Social Media Marketing</h4>
                  <p className="text-sm text-gray-600">Build brand authority & engage audience</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Google Ads & PPC</h4>
                  <p className="text-sm text-gray-600">Instant visibility with targeted ads</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Content Marketing</h4>
                  <p className="text-sm text-gray-600">Educate, build trust & drive conversions</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Local Business Marketing</h4>
                  <p className="text-sm text-gray-600">Dominate local search results</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Lead Generation</h4>
                  <p className="text-sm text-gray-600">Qualified leads, not random traffic</p>
                </motion.div>
              </motion.div>
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-lg">Our Approach:</h4>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  initial="hidden"
                  animate={servicesInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                >
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Performance-focused marketing</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Transparent reporting</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Ethical growth strategies</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Real business growth focus</motion.p>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services/digital-marketing/seo" className="inline-block mt-6 btn-primary">
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Financial & Compliance Services */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <motion.div 
              className="bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-10 rounded-2xl shadow-xl border border-yellow-200"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
                <motion.img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=80" 
                  alt="Financial Services" 
                  className="w-full md:w-48 h-48 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Financial & Compliance Services</h3>
                  <p className="text-lg text-gray-700 mt-2">
                    Simplifying Business Finance & Compliance for Sustainable Growth
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Managing finances and compliance can be complex and time-consuming. We provide practical, 
                transparent, and compliance-focused financial support services that help you stay organized, 
                compliant, and growth-ready. Handle the financial groundwork so you can focus on your business.
              </p>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ GST Registration & Compliance</h4>
                  <p className="text-sm text-gray-600">Registration, filing & guidance support</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Income Tax Filing</h4>
                  <p className="text-sm text-gray-600">Individual & business tax assistance</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Business Registration</h4>
                  <p className="text-sm text-gray-600">Proprietorship, MSME & documentation</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Financial Documentation</h4>
                  <p className="text-sm text-gray-600">Bookkeeping & structuring guidance</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Compliance Advisory</h4>
                  <p className="text-sm text-gray-600">Ongoing regulatory guidance</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Business Structuring</h4>
                  <p className="text-sm text-gray-600">Financial clarity & planning support</p>
                </motion.div>
              </motion.div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
                <p className="text-sm text-gray-700">
                  <strong>⚠ Note:</strong> We do not provide investment advisory, trading, or stock market-related 
                  services under this brand. All services are compliance-focused and provided with clear guidance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-lg">Why Choose Us:</h4>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  initial="hidden"
                  animate={servicesInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                >
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Compliance-focused approach</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Clear & honest guidance</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Affordable & transparent pricing</motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-700">✓ Long-term support mindset</motion.p>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services/financial/gst-registration" className="inline-block mt-6 btn-primary">
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>
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
                  <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop&q=80" alt="Traders" className="w-full h-48 object-cover" />
                </motion.div>
                <motion.div className="p-6" whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}>
                  <h3 className="text-xl font-bold mb-3">Traders & Investors</h3>
                  <p className="text-gray-600">Master the market with expert guidance</p>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Why Choose Netblade Consulting?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Your success is our mission — Experience the difference</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              variants={slideInLeft} 
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex items-start p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg"
            >
              <motion.div 
                className="text-4xl mr-5 text-blue-600"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >✓</motion.div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Integrated Expertise</h3>
                <p className="text-gray-700 leading-relaxed">Tech + Marketing + Finance all in one place — Seamless coordination across all aspects of your business</p>
              </div>
            </motion.div>
            <motion.div 
              variants={slideInRight} 
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex items-start p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg"
            >
              <motion.div 
                className="text-4xl mr-5 text-green-600"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >✓</motion.div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-900">Honest Consulting</h3>
                <p className="text-gray-700 leading-relaxed">No false promises, just real results — Transparent communication and actionable strategies</p>
              </div>
            </motion.div>
            <motion.div 
              variants={slideInLeft} 
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex items-start p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg"
            >
              <motion.div 
                className="text-4xl mr-5 text-purple-600"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >✓</motion.div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-900">Scalable Solutions</h3>
                <p className="text-gray-700 leading-relaxed">Grow as your business grows — Flexible services designed to expand with your ambitions</p>
              </div>
            </motion.div>
            <motion.div 
              variants={slideInRight} 
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex items-start p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg"
            >
              <motion.div 
                className="text-4xl mr-5 text-orange-600"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >✓</motion.div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-orange-900">Client-First Approach</h3>
                <p className="text-gray-700 leading-relaxed">Building long-term partnerships — Dedicated support and personalized attention every step of the way</p>
              </div>
            </motion.div>
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
