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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      category: 'Website Development',
      icon: '🌐',
      color: 'from-blue-500 to-blue-600',
      description: 'Build your online presence with professional, responsive websites',
      services: [
        {
          title: 'Business Website Development',
          description: 'Custom-built professional business websites optimized for conversions',
          link: '/services/website-development/business',
          features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Mobile First']
        },
        {
          title: 'Real Estate Websites',
          description: 'Specialized websites for real estate agents with property listing features',
          link: '/services/website-development/real-estate',
          features: ['Property Listings', 'Virtual Tours', 'Lead Capture', 'CRM Integration']
        },
        {
          title: 'WordPress Development',
          description: 'Flexible and powerful WordPress websites for easy management',
          link: '/services/website-development/wordpress',
          features: ['Easy to Manage', 'Plugin Ecosystem', 'Scalable', 'Cost Effective']
        },
        {
          title: 'Website Redesign',
          description: 'Modernize your existing website with latest design and technology',
          link: '/services/website-development/redesign',
          features: ['Modern Design', 'Performance Optimization', 'User Experience', 'Analytics']
        }
      ]
    },
    {
      category: 'Digital Marketing',
      icon: '📊',
      color: 'from-green-500 to-green-600',
      description: 'Drive traffic, leads, and sales with comprehensive digital marketing',
      services: [
        {
          title: 'Search Engine Optimization (SEO)',
          description: 'Rank higher on Google and drive organic traffic to your website',
          link: '/services/digital-marketing/seo',
          features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Local SEO']
        },
        {
          title: 'Google Ads & PPC',
          description: 'Run targeted paid advertising campaigns to get immediate results',
          link: '/services/digital-marketing/google-ads',
          features: ['Search Ads', 'Display Ads', 'Shopping Ads', 'Retargeting']
        },
        {
          title: 'Social Media Marketing',
          description: 'Build your brand and engage your audience across all social platforms',
          link: '/services/digital-marketing/social-media',
          features: ['Content Strategy', 'Daily Posting', 'Community Management', 'Analytics']
        },
        {
          title: 'Content Marketing',
          description: 'Create valuable content that attracts and converts your audience',
          link: '/services/digital-marketing/content-marketing',
          features: ['Blog Writing', 'Copywriting', 'Video Content', 'Content Calendar']
        },
        {
          title: 'Complete Digital Marketing',
          description: 'All-in-one digital marketing solutions with flexible pricing',
          link: '/services/digital-marketing',
          features: ['15+ Services', 'Flexible Plans', 'Keyword Planning', 'Expert Support']
        }
      ]
    },
    {
      category: 'Financial Services',
      icon: '💰',
      color: 'from-amber-500 to-amber-600',
      description: 'Expert financial services and compliance solutions for your business',
      services: [
        {
          title: 'Business Registration',
          description: 'Complete assistance with company registration and compliance',
          link: '/services/financial/registrations',
          features: ['GST Registration', 'Company Registration', 'PAN/TAN', 'MSME Certificate']
        },
        {
          title: 'Income Tax Returns (ITR)',
          description: 'Professional ITR filing services for individuals and businesses',
          link: '/services/financial/itr',
          features: ['Individual ITR', 'Business ITR', 'Tax Planning', 'Audit Support']
        },
        {
          title: 'Accounting & Balance Sheet',
          description: 'Complete bookkeeping and financial statement preparation',
          link: '/services/financial/accounting-balance-sheet',
          features: ['Bookkeeping', 'Balance Sheet', 'P&L Statements', 'Monthly Reports']
        },
        {
          title: 'GST & GST Returns',
          description: 'GST registration, filing, and compliance management',
          link: '/services/financial/gst-returns',
          features: ['GST Filing', 'ITC Management', 'Reconciliation', 'Audit Support']
        },
        {
          title: 'DSC & Trademark',
          description: 'Digital Signature Certificate and Trademark registration services',
          link: '/services/financial/dsc-trademark',
          features: ['DSC Issuance', 'Trademark Registration', 'Copyright', 'Patent Filing']
        },
        {
          title: 'Compliance Services',
          description: 'Ensure your business meets all regulatory requirements',
          link: '/services/financial/compliances',
          features: ['Annual Compliances', 'Regulatory Updates', 'Audit Support', 'Risk Management']
        },
        {
          title: 'Loans & Credit Cards',
          description: 'Guidance on business loans, credit cards, and financial products',
          link: '/services/financial/loans-credit-cards',
          features: ['Business Loans', 'Credit Cards', 'Working Capital', 'Equipment Finance']
        }
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Complete solutions for your digital transformation and business growth
            </p>
            <p className="text-lg text-blue-200 max-w-3xl">
              From website development to digital marketing and financial compliance, we offer comprehensive services tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((serviceCategory, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div className={`bg-gradient-to-br ${serviceCategory.color} text-white p-8 rounded-2xl shadow-lg h-full`}>
                  <div className="text-5xl mb-4">{serviceCategory.icon}</div>
                  <h2 className="text-3xl font-bold mb-3">{serviceCategory.category}</h2>
                  <p className="text-lg text-blue-100">{serviceCategory.description}</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-blue-200">
                      {serviceCategory.services.length} specialized services
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services by Category */}
      {services.map((serviceCategory, catIdx) => (
        <section key={catIdx} className={catIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <div className="py-20">
            <div className="container max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="text-5xl mb-4">{serviceCategory.icon}</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{serviceCategory.category}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {serviceCategory.description}
                </p>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {serviceCategory.services.map((service, idx) => (
                  <motion.div key={idx} variants={fadeInUp}>
                    <Link href={service.link}>
                      <div className="bg-white border-2 border-gray-100 rounded-xl p-6 h-full hover:shadow-xl hover:border-blue-400 transition-all duration-300 cursor-pointer">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-700 mb-6">{service.description}</p>
                        
                        {/* Features */}
                        <div className="mb-6">
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">✓</span>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                            Learn More
                          </span>
                          <span className="text-blue-600 text-xl">→</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Netblade?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, experience, and customer success to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: '⚡', title: 'Fast Results', desc: 'Quick implementation and measurable results' },
              { icon: '📊', title: 'Data-Driven', desc: 'All decisions backed by analytics' },
              { icon: '🤝', title: 'Expert Team', desc: '500+ satisfied clients & 1000+ projects' },
              { icon: '💰', title: 'Affordable', desc: 'Flexible pricing for all business sizes' }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business grow with our comprehensive services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 inline-block rounded-lg font-semibold">
                Book Free Consultation
              </Link>
              <Link href="/contact#quote" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
