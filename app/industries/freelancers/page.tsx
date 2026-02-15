'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

export default function FreelancersPage() {
  const servicesRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-blue-600 to-purple-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">FOR FREELANCERS & CONSULTANTS</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build Your Personal Brand & Attract Premium Clients</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              Stand out from the competition with a professional website, strong online presence, and proven systems that attract high-value clients who value your expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-orange-600 hover:bg-yellow-300 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  Build Your Portfolio
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  Free Strategy Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">FREELANCER SOLUTIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services For High-Earning Freelancers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to build a sustainable, profitable freelance business</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              { icon: "💼", title: "Professional Portfolio Websites", desc: "Stunning portfolios that showcase your work and convince clients you're the right choice" },
              { icon: "🎯", title: "Personal Brand Building", desc: "Establish authority as an expert in your niche with strategic branding and positioning" },
              { icon: "🔗", title: "LinkedIn & Social Marketing", desc: "Build a strong professional network and generate consistent leads from social platforms" },
              { icon: "💰", title: "Freelance Financial Management", desc: "Professional accounting and financial guidance tailored for freelancers and consultants" }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-orange-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Freelancers Trust Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We specialize in helping freelancers build premium positioning and attract ideal clients</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              { icon: "⭐", title: "Premium Positioning", desc: "Stand out as a high-value expert" },
              { icon: "💼", title: "Professional Image", desc: "Portfolio that impresses clients" },
              { icon: "🤝", title: "Client Attraction", desc: "Systems that bring ideal clients" },
              { icon: "📈", title: "Higher Rates", desc: "Justify premium pricing" },
              { icon: "🎯", title: "Niche Focus", desc: "Dominate your specialty" },
              { icon: "🔒", title: "Business Security", desc: "Proper financial setup" }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Freelancer Success Stories</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { story: "Increased rates by 50% with better positioning", name: "Amit Designer", specialty: "UI/UX Designer" },
              { story: "3x more inbound client inquiries", name: "Priya Copywriter", specialty: "Content Strategist" },
              { story: "Booked out 3 months in advance", name: "Raj Consultant", specialty: "Business Coach" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-gradient-to-br from-orange-50 to-purple-50 p-8 rounded-xl shadow-lg"
              >
                <p className="text-5xl mb-4">⭐⭐⭐⭐⭐</p>
                <p className="text-lg font-bold text-gray-900 mb-2">"{item.story}"</p>
                <p className="text-gray-700 font-semibold mb-2">{item.name}</p>
                <p className="text-sm text-gray-600 italic">{item.specialty}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-orange-600 via-blue-600 to-purple-600 text-white">
        <div className="container text-center">
          <motion.div 
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Level Up Your Freelance Career?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">Start building your premium positioning and attracting ideal clients today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-orange-600 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  Start Your Portfolio
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  Schedule Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
