'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: "Contact Netblade Consulting | Get Free Consultation",
  description: "Get in touch with Netblade Consulting for digital marketing, web development, and business services. Free consultation available. Contact us today!",
  keywords: "contact netblade, get in touch, free consultation, digital marketing services contact, web development quote, business consulting help",
  openGraph: {
    title: "Contact Us - Netblade Consulting",
    description: "Reach out to us for your digital marketing and web development needs",
    type: "website",
    url: "https://netbladeconsulting.in/contact",
  },
};

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
      delayChildren: 0
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you shortly.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Let&apos;s Work Together</h1>
            <p className="text-xl md:text-2xl text-blue-100 drop-shadow-md">Fast. Reliable. Results-Driven Consulting Services</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to discuss your project or need expert advice? We&apos;re here to help. Our team responds within 24 hours.
              </p>

              <motion.div className="space-y-6" variants={staggerContainer} initial="hidden" whileInView="visible">
                <motion.div variants={scaleIn} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mr-4">📧</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Email</h3>
                    <p className="text-gray-700">Info@netbladeconsutling.in</p>
                  </div>
                </motion.div>

                <motion.div variants={scaleIn} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mr-4">📞</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Phone / WhatsApp</h3>
                    <p className="text-gray-700">+91-9611061413</p>
                    <p className="text-sm text-gray-600 mt-1">Available: Monday - Saturday, 9 AM - 6 PM IST</p>
                  </div>
                </motion.div>

                <motion.div variants={scaleIn} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mr-4">🌍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Location</h3>
                    <p className="text-gray-700">India</p>
                  </div>
                </motion.div>

                <motion.div variants={scaleIn} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mr-4">⏰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Response Time</h3>
                    <p className="text-gray-700">Usually reply within 24 hours</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="mt-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl mb-4">Why Reach Out to Netblade?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-yellow-300 mr-3 font-bold text-lg">✓</span>Free initial consultation</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-3 font-bold text-lg">✓</span>No long-term contracts</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-3 font-bold text-lg">✓</span>Transparent pricing</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-3 font-bold text-lg">✓</span>Customized solutions</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-3 font-bold text-lg">✓</span>Expert, certified team</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
              <div className="bg-white shadow-2xl rounded-xl p-8 border-t-4 border-blue-600">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Book Your Free Consultation</h2>
                <p className="text-gray-600 mb-6">Fill out the form and let us know how we can help your business</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="you@company.com"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-700">
                      How Can We Help? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="financial">Financial & Compliance</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="Tell us about your project, timeline, and requirements..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-primary text-lg py-4 font-bold"
                  >
                    Send Message & Get Free Consultation
                  </motion.button>

                  <p className="text-center text-xs text-gray-600 mt-4">
                    We respect your privacy. Your information is safe with us.
                  </p>
                </form>
              </div>

              <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-gray-900">💡 Not sure what you need?</h3>
                <p className="text-gray-700">
                  No problem! Book a free consultation call with our expert and we'll discuss what works best for your business.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Businesses Trust Us</h2>
            <p className="text-xl text-gray-600">Proven track record of delivering results</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible">
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Happy Clients</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">1000+</div>
              <p className="text-gray-700 font-semibold">Projects Completed</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">99%</div>
              <p className="text-gray-700 font-semibold">Satisfaction Rate</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">10+</div>
              <p className="text-gray-700 font-semibold">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible">
            {[
              { quote: "Professional team, excellent service, exceeded expectations", name: "Rajesh Kumar", company: "Tech Startup" },
              { quote: "Increased our online visibility by 300% in 6 months", name: "Priya Singh", company: "Real Estate Agency" },
              { quote: "Finally understand my finances with their expert guidance", name: "Arun Patel", company: "Business Owner" }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg"
              >
                <p className="text-yellow-400 text-2xl mb-3">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.quote}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know before reaching out</p>
          </motion.div>

          <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible">
            {[
              { q: "How soon can you start on my project?", a: "Usually within 3-5 business days. Urgent projects can be expedited." },
              { q: "What's your pricing model?", a: "We offer flexible models: fixed price, hourly, or monthly retainers. All transparent with no hidden costs." },
              { q: "Do you offer ongoing support?", a: "Yes! We provide 30-90 days of free support after project delivery, plus optional monthly support plans." },
              { q: "Will I own all the work?", a: "Absolutely. You own 100% of deliverables, code, and content created for your project." }
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
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Transformation?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Join 500+ businesses that have already achieved their goals with Netblade Consulting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="#consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block cursor-pointer"
              >
                Schedule Free Call →
              </motion.a>
              <motion.a 
                href="mailto:info@netbladeconsulting.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 inline-block"
              >
                Email Us →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
