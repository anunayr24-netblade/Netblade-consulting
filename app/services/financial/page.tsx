'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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

export default function FinancialServicesPage() {
  const servicesRef = useRef(null)

  const services = [
    {
      id: 'itr',
      title: 'Income Tax Return (ITR) Filing',
      description: 'Expert guidance for filing your income tax returns accurately and on time',
      icon: '📋',
      color: 'blue',
      link: '/services/financial/itr',
      benefits: ['Accurate filing', 'Timely submission', 'Expert guidance', 'Maximum refunds']
    },
    {
      id: 'gst',
      title: 'GST Returns & Compliance',
      description: 'Simplified GST filing, returns management, and compliance services',
      icon: '💼',
      color: 'green',
      link: '/services/financial/gst-returns',
      benefits: ['Timely GST filing', 'Input tax credit optimization', 'Compliance support', 'Audit assistance']
    },
    {
      id: 'registrations',
      title: 'Business Registrations',
      description: 'Register your business with all necessary government bodies and departments',
      icon: '📝',
      color: 'purple',
      link: '/services/financial/registrations',
      benefits: ['Company registration', 'LLP setup', 'Partnership registration', 'GeM & MSME registration']
    },
    {
      id: 'accounting',
      title: 'Accounting & Balance Sheet',
      description: 'Professional bookkeeping, financial statement preparation, and audit support',
      icon: '📊',
      color: 'orange',
      link: '/services/financial/accounting-balance-sheet',
      benefits: ['Bookkeeping', 'Financial statements', 'Balance sheet preparation', 'Audit support']
    },
    {
      id: 'compliance',
      title: 'Statutory Compliance',
      description: 'Ensure your business meets all statutory requirements and regulations',
      icon: '✅',
      color: 'red',
      link: '/services/financial/compliances',
      benefits: ['MCA compliance', 'Labor law compliance', 'Annual filings', 'Regulatory updates']
    },
    {
      id: 'dsc',
      title: 'DSC & Trademark Registration',
      description: 'Digital Signature Certificate and intellectual property protection services',
      icon: '🔐',
      color: 'indigo',
      link: '/services/financial/dsc-trademark',
      benefits: ['DSC issuance', 'Trademark search', 'Trademark filing', 'IP protection']
    },
    {
      id: 'loans',
      title: 'Loans & Credit Solutions',
      description: 'Guidance for business loans, credit facilities, and financial planning',
      icon: '💰',
      color: 'cyan',
      link: '/services/financial/loans-credit-cards',
      benefits: ['Loan consultation', 'Credit enhancement', 'Facility analysis', 'Financial planning']
    }
  ]

  const colorClasses = {
    blue: 'from-blue-50 via-white to-blue-100 border-blue-500',
    green: 'from-green-50 via-white to-green-100 border-green-500',
    purple: 'from-purple-50 via-white to-purple-100 border-purple-500',
    orange: 'from-orange-50 via-white to-orange-100 border-orange-500',
    red: 'from-red-50 via-white to-red-100 border-red-500',
    indigo: 'from-indigo-50 via-white to-indigo-100 border-indigo-500',
    cyan: 'from-cyan-50 via-white to-cyan-100 border-cyan-500'
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Financial Services & Compliance</h1>
            <p className="text-xl md:text-2xl text-blue-100 drop-shadow-md mb-8 max-w-3xl">
              Expert financial guidance, tax compliance, and business registration services to keep your business secure and compliant
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all inline-block text-center"
              >
                Get Expert Advice
              </Link>
              <a 
                href="#services" 
                className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all inline-block text-center"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" ref={servicesRef} className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">OUR FINANCIAL SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Financial Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete suite of financial services designed to support your business growth, compliance, and financial success
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className={`group bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 overflow-hidden hover:-translate-y-2`}
              >
                <Link href={service.link} className="block h-full">
                  <div className="p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 bg-${service.color}-500`}></span>
                          {benefit}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                      Learn More →
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Financial Services?</h2>
            <p className="text-xl text-gray-600">
              Expert professionals with years of experience in financial management and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Expert Knowledge</h3>
              <p className="text-gray-700">
                Our team stays updated with latest tax laws, regulations, and compliance requirements to provide accurate guidance
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Timely Compliance</h3>
              <p className="text-gray-700">
                We ensure all your filings, returns, and compliance activities are completed on time to avoid penalties
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Personalized Solutions</h3>
              <p className="text-gray-700">
                Customized financial strategies tailored to your business size, industry, and specific financial needs
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Cost Optimization</h3>
              <p className="text-gray-700">
                We identify tax-saving opportunities and ensure you're paying only what's legally required
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How We Help Your Business</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-3 text-blue-900">📊 Tax Planning & Optimization</h3>
              <p className="text-gray-700">
                Strategic tax planning to minimize your tax liability while ensuring full compliance with all regulations
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-3 text-green-900">📝 Compliance Management</h3>
              <p className="text-gray-700">
                Comprehensive compliance services covering GST, income tax, MCA, labor laws, and other statutory requirements
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-3 text-purple-900">💰 Financial Advisory</h3>
              <p className="text-gray-700">
                Expert financial advice for loans, credit facilities, financial planning, and business growth strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                Ready for Financial Clarity & Compliance?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Let our expert financial team handle your compliance, taxes, and financial planning
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-block"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/about" 
                  className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg transition-all duration-300 inline-block"
                >
                  Learn More About Us
                </Link>
              </div>

              <p className="text-sm text-blue-200 mt-8">✓ Free consultation | ✓ No hidden charges | ✓ Transparent pricing</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
