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

export default function RealEstatePage() {
  const featuresRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: "🏠",
      title: "Professional Property Websites",
      description: "Stunning, custom websites designed to showcase properties and convert browsers into buyers",
      details: ["Advanced property search filters", "Virtual tours integration", "Mobile-optimized viewing", "Professional photography gallery"]
    },
    {
      icon: "📸",
      title: "Virtual Tours & 3D Walkthroughs",
      description: "Immersive property viewing experience that keeps potential buyers engaged longer",
      details: ["360° property tours", "Floor plan integration", "3D visualization", "Video walkthroughs"]
    },
    {
      icon: "🎯",
      title: "Targeted Lead Generation",
      description: "Reach serious property buyers and investors with laser-focused marketing campaigns",
      details: ["Google Ads for real estate", "Social media campaigns", "Email marketing", "Lead nurturing funnels"]
    },
    {
      icon: "📊",
      title: "Real Estate Analytics",
      description: "Track every inquiry, conversion, and metric that matters for your business",
      details: ["Lead tracking dashboard", "Inquiry analytics", "Sales pipeline management", "Market insights"]
    }
  ]

  const benefits = [
    { metric: "3x", desc: "More inquiries with professional website" },
    { metric: "65%", desc: "Faster decision-making with property insights" },
    { metric: "2x", desc: "Bigger deal sizes from serious leads" },
    { metric: "24/7", desc: "Automated lead capture and follow-up" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-24 overflow-hidden">
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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">FOR REAL ESTATE PROFESSIONALS</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sell More Properties Faster With Stunning Online Presence</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              Modern property websites with virtual tours, advanced search, and targeted marketing that attracts serious buyers and accelerates sales
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-yellow-300 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  Get Your Website
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  See Live Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-8 border-b">
        <div className="container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { num: "150+", text: "Real Estate Agents Served" },
              { num: "5000+", text: "Properties Sold Online" },
              { num: "₹500Cr+", text: "Sales Facilitated" },
              { num: "98%", text: "Client Satisfaction" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={scaleIn} className="py-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{item.num}</div>
                <p className="text-sm md:text-base text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">REAL ESTATE SOLUTIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Features Built For Real Estate Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tools and marketing strategies specifically designed for property professionals</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-blue-500 mr-3 font-bold text-lg">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={statsRef} className="py-20 bg-blue-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Impact, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">What our real estate clients experience</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-3">{benefit.metric}</div>
                <p className="text-gray-700">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how real estate professionals transformed their business</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { agent: "Priya Singh", result: "Increased property inquiries by 250%", props: "Luxury residential agent" },
              { agent: "Rajesh Properties", result: "₹2Cr sales in first year with website", props: "Commercial real estate" },
              { agent: "Urban Realty", result: "Reduced sales cycle from 45 to 20 days", props: "Investment properties" }
            ].map((story, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg"
              >
                <p className="text-5xl mb-4">⭐⭐⭐⭐⭐</p>
                <p className="text-lg font-bold text-gray-900 mb-2">"{story.result}"</p>
                <p className="text-gray-700 font-semibold mb-2">{story.agent}</p>
                <p className="text-sm text-gray-600 italic">{story.props}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { q: "How long to build my property website?", a: "2-4 weeks depending on features. We can launch a basic site in 1 week." },
              { q: "Can you integrate with MLS/property databases?", a: "Yes, we integrate with major property databases and APIs for auto-listing." },
              { q: "What about mobile viewing?", a: "100% mobile-optimized. Property tours and search work perfectly on phones." },
              { q: "Do you handle photography/virtual tours?", a: "We connect you with professional photographers and tour companies. Or use your existing images." }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
              >
                <p className="font-bold text-lg text-gray-900 mb-2">Q: {faq.q}</p>
                <p className="text-gray-700">A: {faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container text-center">
          <motion.div 
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Increase Your Sales?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's discuss a real estate website strategy that works for your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  Get Your Website Today
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
