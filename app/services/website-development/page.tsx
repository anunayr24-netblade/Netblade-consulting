'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function WebsiteDevelopmentPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const pricingPlans = [
    {
      name: 'Basic Website',
      description: 'Perfect for individuals and small startups',
      price: '₹15,000',
      color: 'blue',
      features: [
        'Up to 5 static pages',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO optimization',
        'SSL certificate included',
        'Hosting for 1 year',
        'Basic maintenance (3 months)',
        'Social media links',
        'Google Analytics setup',
      ],
      cta: 'Get Started',
      link: '/services/website-development/business',
    },
    {
      name: 'Advanced Website',
      description: 'Ideal for growing businesses',
      price: '₹35,000',
      color: 'purple',
      popular: true,
      features: [
        'Up to 15 dynamic pages',
        'Mobile & tablet responsive',
        'Contact & inquiry forms',
        'Advanced SEO optimization',
        'SSL certificate included',
        'Hosting for 1.5 years',
        'Email integration',
        'Blog section with CMS',
        'Admin dashboard access',
        'Performance optimization',
        'Backup and security setup',
        'Social media integration',
      ],
      cta: 'Choose Plan',
      link: '/services/website-development/business',
    },
    {
      name: 'Business Website',
      description: 'For established companies & enterprises',
      price: '₹60,000+',
      color: 'green',
      features: [
        'Unlimited pages & features',
        'Full desktop & mobile responsive',
        'Advanced forms & workflows',
        'Enterprise SEO optimization',
        'SSL & security features',
        'Hosting for 2 years',
        'E-commerce capabilities',
        'Content Management System',
        'Admin & user roles',
        'API integrations',
        'Performance analytics',
        'Priority support (6 months)',
        'Custom features & development',
        'Regular updates & maintenance',
      ],
      cta: 'Get Custom Quote',
      link: '/contact',
    },
    {
      name: 'Custom Website',
      description: 'Tailored solutions for unique requirements',
      price: 'Custom Quote',
      color: 'indigo',
      features: [
        'Fully customized architecture & design',
        'Unlimited pages & custom functionality',
        'Advanced integrations (CRM, ERP, APIs)',
        'Multi-language support',
        'Advanced security & compliance',
        'Real-time analytics & reporting',
        'Custom admin dashboards',
        'Scalable infrastructure',
        'Performance optimization',
        'Dedicated project manager',
        'Extended support & maintenance',
        'Training & documentation',
        'White-label options available',
        'Migration assistance',
      ],
      cta: 'Contact for Quote',
      link: '/contact',
    },
  ]

  const colorClasses = {
    blue: {
      badge: 'bg-blue-100 text-blue-800',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      border: 'border-blue-200 hover:border-blue-300',
      light: 'bg-blue-50',
    },
    purple: {
      badge: 'bg-purple-100 text-purple-800',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      border: 'border-purple-200 hover:border-purple-300',
      light: 'bg-purple-50',
    },
    green: {
      badge: 'bg-green-100 text-green-800',
      button: 'bg-green-600 hover:bg-green-700 text-white',
      border: 'border-green-200 hover:border-green-300',
      light: 'bg-green-50',
    },
    indigo: {
      badge: 'bg-indigo-100 text-indigo-800',
      button: 'bg-indigo-600 hover:bg-indigo-700 text-white',
      border: 'border-indigo-200 hover:border-indigo-300',
      light: 'bg-indigo-50',
    },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Website Development Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Professional websites designed to convert visitors into customers. Choose from our proven packages or get a custom solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan for your business needs. All plans include hosting and SSL certificate.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => {
              const colors = colorClasses[plan.color as keyof typeof colorClasses]
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${colors.border}`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-center py-2 font-bold text-sm">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  <div className={`${colors.light} pt-8 pb-8 px-8 ${plan.popular ? 'mt-8' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <p className="text-sm text-gray-600 mt-2">One-time payment (+ optional annual maintenance)</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="px-8 pb-8">
                    <h4 className="font-bold text-lg mb-4 text-gray-900">Included Features:</h4>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-500 mr-3 flex-shrink-0 mt-0.5 text-lg">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href={plan.link}
                      className={`block w-full text-center py-3 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${colors.button}`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Website Development?</h2>
            <p className="text-lg text-gray-600">We deliver more than just websites—we deliver results</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: '🎯',
                title: 'Conversion-Focused Design',
                desc: 'Every element is designed to guide visitors toward taking action',
              },
              {
                icon: '⚡',
                title: 'Lightning Fast Performance',
                desc: 'Optimized for speed—because slow websites lose customers',
              },
              {
                icon: '📱',
                title: 'Mobile First Approach',
                desc: 'Perfect on phones, tablets, and desktops—where your customers are',
              },
              {
                icon: '🔍',
                title: 'SEO Built-In',
                desc: 'Optimized for search engines to help customers find you',
              },
              {
                icon: '🔒',
                title: 'Secure & Reliable',
                desc: 'SSL certificates and regular backups keep your site safe',
              },
              {
                icon: '📊',
                title: 'Analytics Ready',
                desc: 'Track visitors and understand what works with built-in analytics',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">Simple steps to get your website live</p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                desc: 'We understand your goals, target audience, and requirements',
              },
              {
                step: '02',
                title: 'Design & Mockups',
                desc: 'Beautiful designs approved by you before we start coding',
              },
              {
                step: '03',
                title: 'Development',
                desc: 'Expert coding with clean, maintainable, and SEO-friendly code',
              },
              {
                step: '04',
                title: 'Testing & QA',
                desc: 'Thorough testing across devices and browsers',
              },
              {
                step: '05',
                title: 'Launch & Support',
                desc: 'Live deployment with ongoing support and optimization',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 items-start bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Your Website?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss which plan is right for your business and get you online today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 inline-block"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/contact#quote"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-block"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
