'use client'

import Link from 'next/link'
import type { Metadata } from 'next'
import { useState, useEffect, useRef } from 'react'

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, PPC, Social Media Marketing",
  description: "Comprehensive digital marketing solutions - SEO, Google Ads, social media marketing, content marketing, email marketing, lead generation, and more. Flexible pricing plans available.",
  keywords: "digital marketing services, SEO agency, Google Ads management, social media marketing, PPC advertising, content marketing, email marketing, lead generation, digital transformation",
  openGraph: {
    title: "Digital Marketing Services - Grow Your Business Online",
    description: "Full-stack digital marketing solutions including SEO, ads, social media, and content strategy",
    type: "website",
    url: "https://netbladeconsulting.in/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  const [expandedService, setExpandedService] = useState<string | null>('seo')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    { name: "Amit Patel", business: "E-commerce Store", text: "Our digital marketing campaign generated 500+ qualified leads in the first month. The ROI exceeded our expectations by 300%!" },
    { name: "Neha Sharma", business: "Real Estate Agency", text: "Outstanding results! Our property listings are now getting 10x more inquiries. Professional team and excellent support." },
    { name: "Rajesh Kumar", business: "SaaS Startup", text: "From zero to hundreds of signups monthly. Their integrated marketing strategy covered all channels perfectly." },
    { name: "Priya Singh", business: "Coaching Academy", text: "Best marketing investment ever. Our batch enrollment increased from 50 to 500+ students annually!" }
  ]

  const services = [
    {
      id: 'seo',
      icon: '🔎',
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate Google with sustainable, long-term organic growth',
      shortDesc: 'Get consistent traffic from Google search without paid ads',
      whatIncluded: [
        '✓ Website SEO audit & competitor analysis',
        '✓ Keyword research & strategy planning',
        '✓ On-page SEO (meta tags, content, schema)',
        '✓ Technical SEO (speed, indexing, mobile)',
        '✓ Off-page SEO & link building',
        '✓ Local SEO & Google Business Profile',
        '✓ E-commerce & blog SEO optimization',
        '✓ Monthly SEO reporting & tracking'
      ],
      benefits: ['Sustainable traffic growth', 'Better brand authority', 'Higher conversion rates', 'Long-term cost savings']
    },
    {
      id: 'ppc',
      icon: '📢',
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Get immediate results with targeted paid advertising campaigns',
      shortDesc: 'Drive immediate traffic and sales with Google Ads',
      whatIncluded: [
        '✓ Google Ads campaign setup & management',
        '✓ Search, Display, Shopping & YouTube ads',
        '✓ Landing page optimization & testing',
        '✓ Conversion tracking & optimization',
        '✓ Retargeting campaigns (audience building)',
        '✓ Bid strategy & budget optimization',
        '✓ A/B testing & continuous improvement',
        '✓ Detailed performance reporting'
      ],
      benefits: ['Immediate traffic', 'Measurable ROI', 'Full campaign control', 'Scalable growth']
    },
    {
      id: 'smm',
      icon: '📱',
      title: 'Social Media Marketing & Advertising',
      description: 'Build your brand and engage your audience across all platforms',
      shortDesc: 'Grow your social presence on Facebook, Instagram, LinkedIn & more',
      whatIncluded: [
        '✓ Social media strategy & account setup',
        '✓ Content creation (posts, reels, stories, videos)',
        '✓ Daily posting & content calendar management',
        '✓ Community management & engagement',
        '✓ Facebook, Instagram, LinkedIn ads',
        '✓ Lead generation & sales campaigns',
        '✓ Influencer collaborations',
        '✓ Social media analytics & reporting'
      ],
      benefits: ['Brand awareness', 'Direct customer engagement', 'Community building', 'Sales generation']
    },
    {
      id: 'content',
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Create valuable content that attracts and converts your audience',
      shortDesc: 'Strategic content that drives traffic and builds authority',
      whatIncluded: [
        '✓ Content strategy & planning',
        '✓ Blog writing & SEO articles',
        '✓ Website copy & landing page content',
        '✓ Copywriting (product descriptions, CTAs)',
        '✓ Case studies & whitepapers',
        '✓ Content calendar management',
        '✓ Multimedia content (infographics, videos)',
        '✓ Content distribution strategy'
      ],
      benefits: ['Organic traffic growth', 'Lead generation', 'Thought leadership', 'Improved SEO']
    },
    {
      id: 'email',
      icon: '📧',
      title: 'Email Marketing',
      description: 'Convert leads into customers with targeted email campaigns',
      shortDesc: 'Build relationships and drive sales through email',
      whatIncluded: [
        '✓ Email campaign design & strategy',
        '✓ Newsletter creation & distribution',
        '✓ Automation workflows & sequences',
        '✓ Lead nurturing campaigns',
        '✓ Email list segmentation',
        '✓ A/B testing & optimization',
        '✓ Performance analytics & tracking',
        '✓ Inbox placement optimization'
      ],
      benefits: ['High ROI', 'Customer retention', 'Repeat sales', 'Measurable metrics']
    },
    {
      id: 'leads',
      icon: '🎯',
      title: 'Lead Generation Services',
      description: 'Build a steady pipeline of qualified leads ready to buy',
      shortDesc: 'Fill your sales funnel with qualified prospects',
      whatIncluded: [
        '✓ Lead magnet creation (ebooks, checklists)',
        '✓ Landing page design & optimization',
        '✓ Lead capture form setup',
        '✓ CRM integration & automation',
        '✓ Lead scoring & qualification',
        '✓ Follow-up sequence automation',
        '✓ Lead magnet distribution',
        '✓ Conversion rate optimization'
      ],
      benefits: ['Consistent pipeline', 'Quality leads', 'Lower cost per lead', 'Sales-ready prospects']
    },
    {
      id: 'ecommerce',
      icon: '🛒',
      title: 'E-commerce Marketing',
      description: 'Boost sales for online stores with specialized strategies',
      shortDesc: 'Increase product sales and customer lifetime value',
      whatIncluded: [
        '✓ Shopify & WooCommerce marketing',
        '✓ Product listing optimization',
        '✓ Marketplace ads (Amazon, Flipkart)',
        '✓ Cart abandonment campaigns',
        '✓ Sales funnel optimization',
        '✓ Upsell & cross-sell strategies',
        '✓ Product review management',
        '✓ Inventory-driven campaigns'
      ],
      benefits: ['Higher AOV', 'Repeat customers', 'Platform optimization', 'Sales growth']
    },
    {
      id: 'local',
      icon: '📍',
      title: 'Local Business Marketing',
      description: 'Dominate local search and attract customers in your area',
      shortDesc: 'Get customers in your city with local SEO & ads',
      whatIncluded: [
        '✓ Google Business Profile optimization',
        '✓ Local review management',
        '✓ Local citations & listings',
        '✓ Map ranking optimization',
        '✓ Local service ads',
        '✓ Hyperlocal ad campaigns',
        '✓ Local schema markup',
        '✓ Reputation management'
      ],
      benefits: ['Local visibility', 'Foot traffic', 'Phone inquiries', 'Local authority']
    }
  ]

  const premiumServices = [
    { icon: '🚀', title: 'Growth Hacking', desc: 'Rapid growth strategies for startups' },
    { icon: '🧭', title: 'Marketing Strategy Consulting', desc: 'Expert guidance for your business' },
    { icon: '📊', title: 'Conversion Rate Optimization', desc: 'Turn more visitors into customers' },
    { icon: '🗺️', title: 'Customer Journey Mapping', desc: 'Understand your customer touchpoints' },
    { icon: '🤖', title: 'AI Marketing Automation', desc: 'Automate with artificial intelligence' },
    { icon: '⭐', title: 'Reputation Management', desc: 'Manage your online presence' }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        .gradient-animated {
          background: linear-gradient(-45deg, #3b82f6, #2563eb, #1e40af, #1e3a8a);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        .service-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .service-card:hover {
          box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
          transform: translateY(-5px);
        }
        .service-card.active {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border: 2px solid #2563eb;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 gradient-animated opacity-90"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white animate-fade-in">
            Digital Marketing Services
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-blue-100 font-medium animate-slide-in max-w-3xl" style={{ animationDelay: '0.2s' }}>
            Complete digital marketing solutions to grow your business—from SEO and PPC to social media, email marketing, and more
          </p>
          <p className="text-lg text-blue-200 mt-4 max-w-3xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            🎯 We offer 15+ specialized services backed by data analytics and proven strategies
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Core Services</h2>
            <p className="text-xl text-gray-600">Choose services that fit your business goals—or combine them for maximum impact</p>
          </div>

          {/* Services with Expandable Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card p-8 rounded-2xl border-2 transition-all duration-300 ${
                  expandedService === service.id
                    ? 'active col-span-1 md:col-span-2'
                    : 'border-gray-200 bg-white'
                }`}
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.shortDesc}</p>
                  </div>
                  <div className={`text-2xl transition-transform duration-300 ${expandedService === service.id ? 'rotate-45' : ''}`}>
                    ➕
                  </div>
                </div>

                {expandedService === service.id && (
                  <div className="mt-6 pt-6 border-t-2 border-gray-200 animate-fade-in">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.whatIncluded.map((item, idx) => (
                          <div key={idx} className="text-gray-700 flex items-start">
                            <span className="mr-2">{item.substring(0, 1)}</span>
                            <span>{item.substring(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="text-gray-700 flex items-center">
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Other Services We Offer</h3>
            <p className="text-gray-600">Beyond our core services, we also provide:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: '🎥', title: 'Video Marketing', desc: 'YouTube SEO, video ads, short-form content strategy' },
              { icon: '🌐', title: 'Website Services', desc: 'Design, WordPress dev, speed optimization, CRO' },
              { icon: '📊', title: 'Analytics & Reporting', desc: 'GA setup, dashboards, ROI analysis, tracking' },
              { icon: '🤖', title: 'Marketing Automation', desc: 'CRM automation, chatbots, WhatsApp automation' },
              { icon: '📲', title: 'WhatsApp Marketing', desc: 'Bulk campaigns, chatbot flows, customer support' },
              { icon: '🧠', title: 'Branding Services', desc: 'Brand strategy, logo design, messaging, positioning' }
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-2">{service.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🚀 Premium Services (High-Value Add-Ons)</h3>
            <p className="text-blue-100 text-lg">For businesses ready to scale and optimize aggressively</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumServices.map((service, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                <p className="text-blue-100">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Netblade for Digital Marketing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '📈 Data-Driven Approach', desc: 'Every decision backed by analytics and performance metrics' },
              { title: '🎯 Customized Strategies', desc: 'No one-size-fits-all—we tailor solutions to your business' },
              { title: '🤝 Dedicated Support', desc: 'You get a team that\'s committed to your success' },
              { title: '💹 Transparent Reporting', desc: 'Clear monthly reports showing ROI and key metrics' },
              { title: '🔄 Continuous Optimization', desc: 'We\'re always testing and improving your campaigns' },
              { title: '⭐ Proven Results', desc: '500+ clients, 1000+ successful campaigns' }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Success Stories from Our Clients</h2>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="transition-all duration-500 ease-in-out">
              <div className="mb-6">
                <p className="text-xl text-gray-700 italic text-center min-h-[100px] flex items-center justify-center">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </p>
              </div>
              <div className="text-center">
                <p className="font-bold text-blue-600 text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].business}</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the right package for your business or customize your own combination of services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Starter Package */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 text-sm mb-4">Perfect for small businesses</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-blue-600">₹15,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 pt-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Includes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">SEO Setup & Optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Monthly SEO Reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Google Business Profile Setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Keyword Research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Keyword Planning & Selection (15 Keywords)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Keyword Optimization Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Social Media Presence Setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">1 Social Media Post per Week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold">✗</span>
                    <span className="text-gray-400">Paid Ads Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold">✗</span>
                    <span className="text-gray-400">Social Media Strategy</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block">
                Get Started
              </Link>
            </div>

            {/* Growth Package */}
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative lg:scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold">POPULAR</span>
              </div>
              <div className="mb-6 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600 text-sm mb-4">Best for growing businesses</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-blue-600">₹35,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="border-t-2 border-blue-200 pt-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">All Starter + Includes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Google Ads Setup & Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">₹5,000/month Ad Budget Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Social Media Strategy & Setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Monthly Content Calendar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">2 Social Posts per Week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Keyword Planning & Selection (40 Keywords)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Advanced Keyword Support & Optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold">✗</span>
                    <span className="text-gray-400">Daily Social Media Posts</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                Start Now
              </Link>
            </div>

            {/* Pro Package */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600 text-sm mb-4">For established businesses</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-blue-600">₹65,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 pt-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">All Growth + Includes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">₹10,000/month Ad Budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Daily Social Media Posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Video Content Creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Email Campaign Setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Weekly Reporting & Calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Lead Generation Strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Keyword Planning & Selection (100 Keywords)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Comprehensive Keyword Strategy & Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">Keyword Performance Tracking & Analysis</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block">
                Get Started
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-300 text-sm mb-4">For high-growth enterprises</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-blue-300">Custom</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">₹1,00,000+/month</p>
              </div>
              <div className="border-t-2 border-gray-700 pt-6 mb-6">
                <h4 className="font-bold mb-4">All Pro + Includes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">✓</span>
                    <span className="text-gray-200">Unlimited Ad Budget Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">✓</span>
                    <span className="text-gray-200">Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">✓</span>
                    <span className="text-gray-200">Multi-channel Campaign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">✓</span>
                    <span className="text-gray-200">Custom Analytics Dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">✓</span>
                    <span className="text-gray-200">Monthly Strategy Reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">✓</span>
                    <span className="text-gray-200">Unlimited Keyword Planning & Selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">✓</span>
                    <span className="text-gray-200">Advanced Keyword Research & Competitive Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">✓</span>
                    <span className="text-gray-200">Real-time Keyword Performance Monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">✓</span>
                    <span className="text-gray-200">24/7 Support & Priority</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Pricing Notes */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Packages Available</h3>
            <p className="text-gray-700 mb-4">
              Don't see exactly what you need? Mix and match services or create a custom package tailored to your business goals and budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">💰 No Setup Fees</p>
                <p className="text-gray-700 font-semibold">Start immediately</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">📅 Flexible Contracts</p>
                <p className="text-gray-700 font-semibold">Month-to-month options</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">🎯 Performance Guaranteed</p>
                <p className="text-gray-700 font-semibold">Results or adjustment</p>
              </div>
            </div>
            <Link href="/contact" className="inline-block mt-6 btn-primary text-lg px-8 py-4">
              Schedule Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Digital Marketing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {[
              { num: '1', title: 'Discovery', desc: 'Understand your business, goals & audience' },
              { num: '2', title: 'Strategy', desc: 'Create custom digital marketing roadmap' },
              { num: '3', title: 'Execution', desc: 'Launch campaigns across all channels' },
              { num: '4', title: 'Optimization', desc: 'Test, analyze & improve continuously' },
              { num: '5', title: 'Growth', desc: 'Scale what works, measure everything' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold shadow-lg">
                  {step.num}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <p className="text-gray-700 mb-6">
              Ready to grow your business with proven digital marketing strategies?
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
              Start Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
