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

export default function StartupsPage() {
  const servicesRef = useRef(null)
  const challengesRef = useRef(null)
  const ctaRef = useRef(null)

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const challengesInView = useInView(challengesRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const challenges = [
    {
      title: "Limited Budget",
      description: "Can't afford expensive enterprise solutions",
      solution: "Affordable, scalable packages starting small and growing with you"
    },
    {
      title: "Rapid Growth Needed",
      description: "Need solutions that can scale quickly",
      solution: "Flexible infrastructure designed for 10x growth"
    },
    {
      title: "Compliance Confusion",
      description: "Complex GST, ITR, and tax requirements",
      solution: "Expert guidance ensuring you stay compliant from day one"
    },
    {
      title: "Marketing On A Shoestring",
      description: "Need marketing results with minimal spend",
      solution: "Data-driven strategies delivering maximum ROI"
    }
  ]

  const services = [
    {
      icon: "🌐",
      title: "Startup Websites & Branding",
      description: "Professional online presence that establishes credibility and converts visitors into customers",
      features: ["Custom domain setup", "Mobile-responsive design", "Basic SEO optimization", "Contact forms & CMS"]
    },
    {
      icon: "📱",
      title: "Startup Marketing Packages",
      description: "Targeted digital marketing to reach your ideal customers without breaking the bank",
      features: ["Social media strategy", "Google My Business setup", "Content marketing basics", "Lead generation funnels"]
    },
    {
      icon: "💼",
      title: "Legal & Financial Setup",
      description: "Get your startup properly registered and structured for growth and compliance",
      features: ["Company registration", "GST registration", "Bank account setup", "Compliance documentation"]
    },
    {
      icon: "📊",
      title: "Growth Analytics & Tracking",
      description: "Understand your startup metrics and make data-driven decisions",
      features: ["Analytics setup", "Customer tracking", "Performance dashboards", "Monthly reports"]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
            animate={{ x: [0, -80, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">FOR STARTUPS & SMALL BUSINESSES</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Launch, Grow & Scale Your Startup <motion.span 
                className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >With Confidence</motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              From incorporation to market dominance — We're your complete startup partner. Website, marketing, finances, and compliance, all handled by experts who understand startup challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-yellow-300 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  🚀 Get Started Free
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section ref={challengesRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={challengesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">WE UNDERSTAND YOUR CHALLENGES</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Startup Challenges We Solve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every startup founder faces hurdles. We've built solutions specifically for your stage and needs.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            animate={challengesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {challenges.map((challenge, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900">😟 {challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900">✓ <span className="font-normal">{challenge.solution}</span></p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">STARTUP SUCCESS PACKAGE</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need To Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our integrated services designed specifically for startup needs and budgets</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-blue-500 mr-3 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us For Startups */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Startups Choose Netblade</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're not a corporate agency — we're startup founders ourselves who understand your journey</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn} className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Affordable & Flexible</h3>
              <p className="text-gray-600">Start small, pay as you grow. No long-term contracts required.</p>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">Get your website live and marketing started in weeks, not months.</p>
            </motion.div>
            <motion.div variants={scaleIn} className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Startup-Focused</h3>
              <p className="text-gray-600">We know your needs. Tailored solutions for early-stage growth.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Startup Success Stories */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Startup Success Stories</h2>
            <p className="text-xl text-gray-600">See how other startups used our services to kick off</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { name: "TechStart Co.", result: "250% website traffic in 3 months", desc: "SaaS startup" },
              { name: "EduConnect", result: "1000+ student leads/month", desc: "EdTech startup" },
              { name: "LocalVendor", result: "5x ROI in first 6 months", desc: "Marketplace startup" }
            ].map((story, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg"
              >
                <p className="text-5xl mb-4">⭐⭐⭐⭐⭐</p>
                <p className="text-lg font-bold text-gray-900 mb-2">{story.result}</p>
                <p className="text-gray-600 mb-4">{story.name}</p>
                <p className="text-sm text-gray-500 italic">{story.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-3xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Startup FAQs</h2>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { q: "How much does it cost to build a startup website?", a: "Starting at ₹15,000 for a basic website or ₹50,000+ for full-featured sites. We offer startup packages that grow with you." },
              { q: "How long to get my startup registered?", a: "2-3 weeks for company registration, GST registration, and bank account setup." },
              { q: "Can I start with just a website?", a: "Yes! Most startups begin with a website, then add marketing and financial services as they grow." },
              { q: "Do you offer payment plans?", a: "Absolutely. We offer flexible payment terms and monthly retention plans starting at ₹10,000." }
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

      {/* Final CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your Startup?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation today and let's discuss your startup journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  🚀 Book Free Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  Schedule a Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
