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

export default function TradersPage() {
  const servicesRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const services = [
    {
      icon: "🏢",
      title: "Business Registration & Incorporation",
      description: "Complete business setup from concept to compliant operations",
      items: ["Company Registration (Pvt./Ltd.)", "Sole Proprietorship Setup", "Partnership Registration", "LLP Formation", "One-person company setup"]
    },
    {
      icon: "📊",
      title: "Professional Accounting Services",
      description: "Accurate bookkeeping and financial reporting that strengthens your business",
      items: ["Monthly bookkeeping", "Bank reconciliation", "Financial statements", "Balance sheet preparation", "Profit & loss statements"]
    },
    {
      icon: "💰",
      title: "GST & Tax Services",
      description: "Full GST filing, ITR processing, and tax optimization strategies",
      items: ["GST Registration & filing", "GST return filing (GSTR-1, GSTR-3B)", "Income tax filing (ITR)", "Tax planning & optimization", "Form 26AS corrections"]
    },
    {
      icon: "⚖️",
      title: "Compliance & Legal",
      description: "Stay compliant with all regulatory requirements and avoid penalties",
      items: ["Annual ROC filing (Form AOC-4)", "Director KYC", "MCA compliance", "Labor law compliance", "Industry-specific compliance"]
    },
    {
      icon: "📜",
      title: "Licenses & Registrations",
      description: "Get all required licenses and registrations for your industry",
      items: ["Trade license", "Import-export code", "FSSAI registration", "Professional licenses", "Sector-specific permits"]
    },
    {
      icon: "💳",
      title: "Loans & Credit Solutions",
      description: "Access working capital and business loans with our expert guidance",
      items: ["Bank loan processing", "Government schemes (PMMY, etc.)", "Credit rating improvement", "Vendor finance setup", "Cash flow optimization"]
    }
  ]

  const painPoints = [
    { pain: "Complex GST compliance", solution: "Automated GST filing with expert review" },
    { pain: "Tax burden eating profits", solution: "Strategic tax optimization saving up to 30%" },
    { pain: "ITR confusion and delays", solution: "Expert ITR filing completed on time, every time" },
    { pain: "Regulatory penalties", solution: "Proactive compliance monitoring and alerts" },
    { pain: "Bank loan rejections", solution: "Financial statements that impress bankers" },
    { pain: "Accounting headaches", solution: "Professional bookkeeping done for you" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 text-white py-24 overflow-hidden">
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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">FOR FINANCIAL PROFESSIONALS & BUSINESS OWNERS</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Complete Financial & Compliance Solutions For Your Business</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              From registration to compliance, from tax optimization to loan processing — we handle the complexity so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-yellow-300 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  Start Your Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block">
                  Schedule with Expert
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Challenges We Solve</h2>
            <p className="text-xl text-gray-600">Financial professionals and business owners face unique challenges. Here's how we help.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {painPoints.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-lg font-bold text-red-600 mb-2">😟 {item.pain}</p>
                <p className="text-gray-700">✓ <span className="font-semibold text-green-600">{item.solution}</span></p>
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
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">COMPREHENSIVE SOLUTIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Financial Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete suite of services covering registration, compliance, accounting, and financial advisory</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg border border-blue-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-blue-500 mr-3 font-bold">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Netblade for Financial Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your business deserves expert financial guidance and compliance support</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">CA-qualified professionals with 10+ years of industry experience</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">Quick processing without compromising on accuracy and compliance</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Proactive Advisory</h3>
              <p className="text-gray-600">Regular reviews and strategic guidance to optimize your financials</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted By Financial Professionals</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { num: "300+", text: "Businesses Supported" },
              { num: "₹100Cr+", text: "Compliance Value" },
              { num: "99.8%", text: "Filing Accuracy" },
              { num: "0", text: "Penalty Cases" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.num}</div>
                <p className="text-gray-700">{stat.text}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Questions</h2>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { q: "How much does GST registration and filing cost?", a: "Registration: ₹3,000-5,000. Monthly filing: ₹1,500-3,000 depending on complexity." },
              { q: "What documents do I need for company registration?", a: "PAN, Aadhar, address proof, DSC (digital signature). We guide you through the entire process." },
              { q: "Can you help reduce my tax burden?", a: "Yes, through strategic planning, retirement benefits, and legitimate deductions, we typically save clients 20-30%." },
              { q: "How often should I get a financial review?", a: "We recommend quarterly reviews for growing businesses, monthly for those with complex finances." }
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
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container text-center">
          <motion.div 
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Expert Financial Guidance?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's discuss your financial needs and find the right solution for your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  Book Expert Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block">
                  Talk to CA
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}