'use client'

import { useState } from 'react'

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
    // Handle form submission
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
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')" }}
        ></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl drop-shadow-md">Let&apos;s Build, Grow & Optimize Your Business</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have a project in mind? Questions about our services? We're here to help. 
                Reach out and let's discuss how we can help your business grow.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">info@netbladeconsulting.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone / WhatsApp</h3>
                    <p className="text-gray-700">+91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🌍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-700">India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">⏰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Why Choose Netblade Consulting?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free initial consultation</li>
                  <li>✓ Quick response time (24-48 hours)</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ Customized solutions</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white shadow-xl rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6" id="consultation">Book a Free Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="website-development">Website Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="seo">SEO Services</option>
                      <option value="social-media">Social Media Marketing</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="financial-services">Financial Services</option>
                      <option value="stock-market-education">Stock Market Education</option>
                      <option value="gst-registration">GST Registration</option>
                      <option value="tax-filing">Tax Filing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg" id="quote">
                <h3 className="font-bold text-xl mb-3">Request a Quote</h3>
                <p className="mb-4">
                  Need a detailed quote for your project? Fill out the form above and mention 
                  &quot;Quote Request&quot; in your message, or email us directly at 
                  info@netbladeconsulting.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join hundreds of satisfied clients who have achieved their business goals with Netblade Consulting
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-700 text-sm">Quick project delivery without compromising quality</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold mb-2">Affordable Pricing</h3>
              <p className="text-gray-700 text-sm">Transparent rates that fit your budget</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Results Driven</h3>
              <p className="text-gray-700 text-sm">Focused on delivering measurable outcomes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
