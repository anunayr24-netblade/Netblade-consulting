'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
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
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function CoachesPage() {
  const servicesRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">FOR COACHES & EDUCATORS</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Expand Your Impact & Scale Your Coaching Business Online</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              From beautiful websites to student management to marketing that converts — everything you need to build a thriving online coaching business
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-yellow-300 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  Start Your Online Presence
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  Schedule Free Call
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
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">COACHING SOLUTIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services Built For Coaches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to build authority, attract clients, and scale your coaching business</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              { icon: "🎓", title: "Professional Coach Websites", desc: "Stunning websites that establish authority and convert visitors into coaching clients" },
              { icon: "📱", title: "Course & Content Platforms", desc: "Launch and manage online courses with student dashboards, progress tracking, and certification" },
              { icon: "📊", title: "Social Media Marketing", desc: "Build audience and authority across social platforms with strategic content and posting" },
              { icon: "📧", title: "Email Marketing & Funnels", desc: "Nurture leads and convert them into paying coaching clients with automated sequences" }
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
      <section ref={benefitsRef} className="py-20 bg-blue-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Coaches Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We specialize in helping coaches build profitable, sustainable online businesses</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              { icon: "💡", title: "Specialized Knowledge", desc: "We understand the coaching industry" },
              { icon: "🎯", title: "Client-Focused", desc: "Strategies proven to attract coaching clients" },
              { icon: "⚡", title: "Fast Setup", desc: "Get online and start earning in weeks" }
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From Coaches Like You</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { result: "2x client bookings in 3 months", name: "Sarah Coach", desc: "Life Coach" },
              { result: "Launched online course with 500+ students", name: "Priya Sharma", desc: "Business Coach" },
              { result: "₹50L revenue in first year", name: "Raj Kapoor", desc: "Career Coach" }
            ].map((story, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg"
              >
                <p className="text-5xl mb-4">⭐⭐⭐⭐⭐</p>
                <p className="text-lg font-bold text-gray-900 mb-2">"{story.result}"</p>
                <p className="text-gray-700 font-semibold mb-2">{story.name}</p>
                <p className="text-sm text-gray-600 italic">{story.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container text-center">
          <motion.div 
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Coaching Business?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's build your online coaching empire together</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  Get Started Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  Schedule Free Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
