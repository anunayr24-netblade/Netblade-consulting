'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function BusinessWebsitePage() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({})
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, satisfaction: 0, uptime: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const pricingPlans = [
    {
      name: 'Basic Website',
      description: 'Perfect for individuals and small startups',
      price: '₹9,000',
      color: 'blue',
      features: [
        'Up to 12 static pages',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO optimization',
        'SSL certificate included',
        'Hosting & Domain for 1 year',
        'Maintenance for 1 year',
        'Social media links',
        'Google Analytics setup',
      ],
      cta: 'Get Started',
      link: '/contact',
    },
    {
      name: 'Advanced Website',
      description: 'Ideal for growing businesses',
      price: '₹20,000',
      color: 'purple',
      popular: true,
      features: [
        'Up to 50 dynamic pages',
        'Mobile & tablet responsive',
        'Contact & inquiry forms',
        'Advanced SEO optimization',
        'SSL certificate included',
        'Hosting & Domain for 1 years',
        'Email integration',
        'Blog section with CMS',
        'Admin dashboard access',
        'Performance optimization',
        'Backup and security setup',
        'Social media integration',
      ],
      cta: 'Choose Plan',
      link: '/contact',
    },
    {
      name: 'Business Website',
      description: 'For established companies & enterprises',
      price: '₹35,000+',
      color: 'green',
      features: [
        'Unlimited pages & features',
        'Full desktop & mobile responsive',
        'Advanced forms & workflows',
        'Enterprise SEO optimization',
        'SSL & security features',
        'Hosting & Domain for 2 years',
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

  const colorClasses: { [key: string]: { button: string; bg: string; text: string } } = {
    blue: {
      button: 'bg-blue-600 hover:bg-blue-700',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
    },
    purple: {
      button: 'bg-purple-600 hover:bg-purple-700',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
    },
    green: {
      button: 'bg-green-600 hover:bg-green-700',
      bg: 'bg-green-50',
      text: 'text-green-600',
    },
    indigo: {
      button: 'bg-indigo-600 hover:bg-indigo-700',
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
    },
  }

  const toggleFlip = (cardId: string) => {
    setFlippedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }))
  }

  const testimonials = [
    { name: "Manish Agarwal", business: "Consulting Firm", text: "Professional website that perfectly represents our brand. Leads increased by 300%!" },
    { name: "Sanjay Reddy", business: "Manufacturing Co.", text: "Fast, responsive, easy to update. Best investment for our business!" },
    { name: "Preeti Menon", business: "Healthcare Startup", text: "Modern design with all features we needed. Patients love the appointment booking!" },
    { name: "Kunal Sharma", business: "Financial Services", text: "SEO-friendly website brought us to top of Google. Great work!" }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Stats counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsVisible) {
          setStatsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [statsVisible])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const increment = {
      projects: 250 / steps,
      clients: 180 / steps,
      satisfaction: 98 / steps,
      uptime: 99.9 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        projects: Math.min(Math.floor(increment.projects * step), 250),
        clients: Math.min(Math.floor(increment.clients * step), 180),
        satisfaction: Math.min((increment.satisfaction * step), 98),
        uptime: Math.min((increment.uptime * step), 99.9)
      })
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
  }

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
        .fade-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .badge-float {
          animation: float 3s ease-in-out infinite;
        }
        .badge-float:nth-child(2) {
          animation-delay: 0.5s;
        }
        .badge-float:nth-child(3) {
          animation-delay: 1s;
        }
        .gradient-animated {
          background: linear-gradient(-45deg, #1e40af, #1e3a8a, #1e293b, #0f172a);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
          transform: translateY(-5px);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 gradient-animated opacity-85"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white animate-fade-in">
            Website Development Services
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-blue-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Build a Powerful Digital Presence That Works for Your Business
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Custom Development</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Mobile Responsive</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ SEO Optimized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container relative z-10" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="fade-on-scroll">
              <div className="text-5xl font-bold mb-2">{counters.projects}+</div>
              <div className="text-blue-100 text-lg">Projects Delivered</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.clients}+</div>
              <div className="text-blue-100 text-lg">Happy Clients</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">{counters.satisfaction.toFixed(0)}%</div>
              <div className="text-blue-100 text-lg">Client Satisfaction</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-2">{counters.uptime.toFixed(1)}%</div>
              <div className="text-blue-100 text-lg">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="mb-12 fade-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Build a Powerful Online Presence</h2>
            <p className="text-lg text-gray-700 mb-4">
              In today&apos;s digital-first world, your website is more than just an online address — it is your 
              brand identity, sales engine, and credibility builder.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              At Netblade Consulting, we design and develop high-performance, secure, and conversion-focused 
              websites tailored to your business goals.
            </p>
            <p className="text-lg text-gray-700">
              Whether you&apos;re a startup, real estate professional, consultant, or growing business, we create 
              websites that are fast, responsive, and built to scale.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="mb-16 fade-on-scroll">
            <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-50 animate-float"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">What Our Clients Say</h3>
                <div className="transition-all duration-500 ease-in-out">
                  <div className="text-center">
                    <p className="text-gray-700 text-lg italic mb-4 min-h-[80px] flex items-center justify-center px-4">
                      &quot;{testimonials[currentTestimonial].text}&quot;
                    </p>
                    <p className="font-bold text-blue-700">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].business}</p>
                  </div>
                </div>
                
                <div className="flex justify-center gap-2 mt-6">
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
          </div>

          {/* Why Choose Netblade - Pitching Section */}
          <div className="mb-16 fade-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Netblade Consulting?</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Industry-leading expertise and proven results for your business
              </p>
            </div>

            {/* Scrolling Container */}
            <div className="relative w-full overflow-hidden">
              {/* Scrolling Track */}
              <div className="flex overflow-hidden">
                <div className="flex gap-3 tech-scroll whitespace-nowrap py-6">
                  {/* Pitching Points */}
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Lightning-Fast Performance</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Enterprise Security</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Mobile-First Design</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Conversion Focused</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Data-Driven Decisions</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Dedicated Support</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">ISO Certified Team</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">10+ Years Experience</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">500+ Sites Launched</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">4.9/5 Rating</span></div>
                  </div>

                  {/* Repeat for seamless loop */}
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Lightning-Fast Performance</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Enterprise Security</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Mobile-First Design</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Below */}
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-900 max-w-4xl mx-auto leading-relaxed">
                At Netblade Consulting, we combine cutting-edge technology with strategic business insights to deliver websites that not only look beautiful but actively drive growth. Our proven methodology has helped hundreds of businesses establish powerful online presences, increasing their qualified leads and revenue. Whether you're a startup, established business, or enterprise looking to transform your digital presence, our team of certified professionals is ready to build your success story. We don't just build websites—we build competitive advantages.
              </p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-6">🚀 Our Website Development Solutions</h3>
            
            {/* Grid layout for cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business & Corporate Websites Card */}
              <div 
                className="relative h-[450px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'business-corporate': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['business-corporate'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <h4 className="font-bold text-xl mb-3">✅ Business & Corporate Websites</h4>
                    <p className="text-gray-700 mb-3 text-sm">
                      Professional websites designed to establish trust, showcase services, and generate inquiries.
                    </p>
                    <p className="font-semibold mb-2">Ideal for:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-3 ml-4 text-sm">
                      <li>Companies & startups</li>
                      <li>Consultants & service providers</li>
                      <li>Local businesses</li>
                    </ul>
                    <p className="font-semibold mb-2">Features:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 text-sm">
                      <li>Clean & modern UI</li>
                      <li>Mobile & tablet responsive</li>
                      <li>SEO-ready structure</li>
                      <li>Contact & lead forms</li>
                    </ul>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full shadow-md">More details</span>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <h4 className="font-bold text-xl mb-3">💡 Why Choose Us</h4>
                    <div className="space-y-3 text-sm overflow-y-auto h-[360px]">
                      <div>
                        <p className="font-semibold mb-1">🎯 Brand-Focused Design:</p>
                        <p className="text-white/90">We create websites that reflect your brand identity, values, and professionalism, helping you stand out from competitors.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📱 Mobile-First Approach:</p>
                        <p className="text-white/90">Over 60% of users browse on mobile. We ensure your site looks perfect on every device, delivering seamless experience.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🔍 SEO Optimized:</p>
                        <p className="text-white/90">Built with clean code, fast loading, and proper structure to rank higher on Google and attract organic traffic.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💼 Lead Generation:</p>
                        <p className="text-white/90">Strategic placement of contact forms, CTAs, and trust signals to convert visitors into customers.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">⚡ Fast Performance:</p>
                        <p className="text-white/90">Optimized images, lazy loading, and caching ensure lightning-fast page loads for better user retention.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🔒 Secure & Reliable:</p>
                        <p className="text-white/90">SSL certificates, regular backups, and security best practices to protect your business and customer data.</p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">← Back</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Estate Websites Card */}
              <div 
                className="relative h-[450px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'real-estate': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['real-estate'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <h4 className="font-bold text-xl mb-3">✅ Real Estate Websites</h4>
                    <p className="text-gray-700 mb-3 text-sm">
                      Property listing websites with advanced search, filters, and lead capture systems.
                    </p>
                    <p className="font-semibold mb-2">Ideal for:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-3 ml-4 text-sm">
                      <li>Real estate agents & brokers</li>
                      <li>Property developers</li>
                      <li>Rental & leasing businesses</li>
                    </ul>
                    <p className="font-semibold mb-2">Features:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 text-sm">
                      <li>Property listing management</li>
                      <li>Search & filter functionality</li>
                      <li>Lead capture forms</li>
                      <li>Image galleries & virtual tours</li>
                    </ul>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full shadow-md">More details</span>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <h4 className="font-bold text-xl mb-3">💡 Why Choose Us</h4>
                    <div className="space-y-3 text-sm overflow-y-auto h-[360px]">
                      <div>
                        <p className="font-semibold mb-1">🏘️ Property Showcase:</p>
                        <p className="text-white/90">Beautiful image galleries, virtual tours, and detailed property descriptions that sell properties faster.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🔍 Advanced Search:</p>
                        <p className="text-white/90">Filter by location, price, size, amenities - help buyers find their dream property in seconds.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📲 Lead Capture:</p>
                        <p className="text-white/90">Contact forms, inquiry buttons, and WhatsApp integration to capture every potential buyer's information.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📊 Easy Management:</p>
                        <p className="text-white/90">Admin panel to add, edit, delete property listings with ease - no technical knowledge required.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🗺️ Map Integration:</p>
                        <p className="text-white/90">Google Maps showing exact property locations, nearby amenities, and neighborhood insights.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💼 Agent Profiles:</p>
                        <p className="text-white/90">Showcase your team with professional profiles and direct contact options for each agent.</p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">← Back</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WordPress Development Card */}
              <div 
                className="relative h-[450px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'wordpress': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['wordpress'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <h4 className="font-bold text-xl mb-3">✅ WordPress Development</h4>
                    <p className="text-gray-700 mb-3 text-sm">
                      Flexible, easy-to-manage websites using the world&apos;s most popular CMS platform.
                    </p>
                    <p className="font-semibold mb-2">Ideal for:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-3 ml-4 text-sm">
                      <li>Blogs & content sites</li>
                      <li>E-commerce stores</li>
                      <li>Business websites with frequent updates</li>
                    </ul>
                    <p className="font-semibold mb-2">Features:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 text-sm">
                      <li>User-friendly admin panel</li>
                      <li>Custom theme development</li>
                      <li>Plugin integration</li>
                      <li>Regular updates & maintenance</li>
                    </ul>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full shadow-md">More details</span>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <h4 className="font-bold text-xl mb-3">💡 Why Choose Us</h4>
                    <div className="space-y-3 text-sm overflow-y-auto h-[360px]">
                      <div>
                        <p className="font-semibold mb-1">✏️ Easy to Update:</p>
                        <p className="text-white/90">Update content, add pages, upload images without touching code. Perfect for non-technical users.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🎨 Custom Design:</p>
                        <p className="text-white/90">We build custom themes matching your brand - not generic templates that look like everyone else's.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🔌 Plugin Power:</p>
                        <p className="text-white/90">Integrate contact forms, SEO tools, analytics, security, and thousands of features through plugins.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🛒 E-commerce Ready:</p>
                        <p className="text-white/90">Add WooCommerce for online store, payment gateways, inventory management, and order tracking.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📈 SEO Friendly:</p>
                        <p className="text-white/90">WordPress is loved by search engines. We optimize it further with proper structure and SEO plugins.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🔄 Regular Updates:</p>
                        <p className="text-white/90">We keep your WordPress, themes, and plugins updated for security, performance, and new features.</p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">← Back</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static & Dynamic Websites Card */}
              <div 
                className="relative h-[450px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'static-dynamic': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['static-dynamic'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <h4 className="font-bold text-xl mb-3">✅ Static & Dynamic Websites</h4>
                    <p className="text-gray-700 mb-3 text-sm">
                      Choose between lightning-fast static sites or feature-rich database-driven dynamic websites.
                    </p>
                    <p className="font-semibold mb-2">Ideal for:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-3 ml-4 text-sm">
                      <li>Portfolio & brochure websites (Static)</li>
                      <li>Web applications & portals (Dynamic)</li>
                      <li>E-commerce & membership sites (Dynamic)</li>
                    </ul>
                    <p className="font-semibold mb-2">Features:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 text-sm">
                      <li>Optimized performance</li>
                      <li>Scalable architecture</li>
                      <li>Database integration (Dynamic)</li>
                      <li>API integration capabilities</li>
                    </ul>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full shadow-md">More details</span>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-orange-600 to-orange-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <h4 className="font-bold text-xl mb-3">💡 Why Choose Us</h4>
                    <div className="space-y-3 text-sm overflow-y-auto h-[360px]">
                      <div>
                        <p className="font-semibold mb-1">⚡ Static Sites (Next.js, React):</p>
                        <p className="text-white/90">Lightning-fast loading, superior SEO, maximum security. Perfect for portfolios, landing pages, and brochure sites.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🚀 Dynamic Sites (Node.js, PHP):</p>
                        <p className="text-white/90">Database-driven with user authentication, dashboards, real-time updates. Ideal for web apps and portals.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📊 Database Integration:</p>
                        <p className="text-white/90">MySQL, MongoDB, PostgreSQL - store and manage data efficiently with proper structure and security.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🔗 API Development:</p>
                        <p className="text-white/90">RESTful APIs to connect your website with mobile apps, third-party services, and external systems.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">👥 User Management:</p>
                        <p className="text-white/90">Registration, login, profiles, permissions - complete user management system customized to your needs.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📈 Scalable Architecture:</p>
                        <p className="text-white/90">Built to grow with your business - handle increasing traffic and features without performance issues.</p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">← Back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-6">What You Get</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Mobile-Responsive Design</h4>
                  <p className="text-gray-700 text-sm">Perfect display on all devices and screen sizes</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">SEO-Friendly Structure</h4>
                  <p className="text-gray-700 text-sm">Built to rank well on search engines</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Fast Loading Speed</h4>
                  <p className="text-gray-700 text-sm">Optimized performance for better user experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Secure & Reliable</h4>
                  <p className="text-gray-700 text-sm">SSL certificates and security best practices</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Easy Content Management</h4>
                  <p className="text-gray-700 text-sm">Update your content without technical knowledge</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Analytics Integration</h4>
                  <p className="text-gray-700 text-sm">Track visitor behavior and measure success</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Contact Forms & CTAs</h4>
                  <p className="text-gray-700 text-sm">Capture leads and engage with visitors</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Social Media Integration</h4>
                  <p className="text-gray-700 text-sm">Connect with your audience on all platforms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack - Scrolling Train Effect */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">🛠️ Our Complete Technology Stack</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                27+ cutting-edge technologies powering our web solutions
              </p>
            </div>

            {/* Scrolling Container */}
            <style>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .tech-scroll {
                animation: scroll-left 70s linear infinite;
              }
              .tech-scroll:hover {
                animation-play-state: paused;
              }
              .tech-card {
                transition: all 0.3s ease;
              }
            `}</style>

            <div className="relative w-full overflow-hidden">
              {/* Scrolling Track */}
              <div className="flex overflow-hidden">
                <div className="flex gap-3 tech-scroll whitespace-nowrap py-6">
                  {/* Frontend */}
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">React</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Next.js</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Vue.js</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">JS</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">TS</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">HTML5</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">CSS3</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Tailwind</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Bootstrap</span></div>
                  </div>

                  {/* Backend */}
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Node.js</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Express</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">PHP</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Laravel</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Python</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">WordPress</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Docker</span></div>
                  </div>

                  {/* Database */}
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">MongoDB</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">MySQL</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">PostgreSQL</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Firebase</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">GraphQL</span></div>
                  </div>

                  {/* DevOps */}
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Git</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">GitHub</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">AWS</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">G.Cloud</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">CI/CD</span></div>
                  </div>

                  {/* Repeat for seamless loop */}
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">React</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Next.js</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Vue.js</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16 fade-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven 4-step methodology that delivers exceptional results
              </p>
            </div>

            {/* Scrolling Container */}
            <div className="relative w-full overflow-hidden">
              {/* Scrolling Track */}
              <div className="flex overflow-hidden">
                <div className="flex gap-3 tech-scroll whitespace-nowrap py-6">
                  {/* Process Steps */}
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Discovery & Planning</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Design & Prototyping</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Development & Testing</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Launch & Support</span></div>
                  </div>

                  {/* Repeat for seamless loop */}
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Discovery & Planning</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Design & Prototyping</span></div>
                  </div>
                  <div className="flex-shrink-0 tech-card">
                    <div className="px-6 py-4 bg-white/30 backdrop-blur rounded-lg hover:bg-white/40 transition-all hover:scale-105 flex items-center justify-center"><span className="text-red-800 text-2xl font-bold whitespace-nowrap drop-shadow">Development & Testing</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Below */}
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-900 max-w-4xl mx-auto leading-relaxed">
                Our streamlined development process ensures every project is delivered on time, within budget, and exceeding expectations. From the initial discovery phase where we deeply understand your business goals and target audience, through meticulous design and rigorous testing, to final launch and ongoing support—we manage every detail with precision. This systematic approach has enabled us to successfully launch hundreds of websites, with each one built to perform, convert, and grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan for your business needs. All plans include hosting and SSL certificate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => {
              const colors = colorClasses[plan.color]
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-gray-200`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-center py-2 font-bold text-sm z-10">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  <div className={`${colors.bg} pt-8 pb-8 px-8 ${plan.popular ? 'mt-8' : ''}`}>
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
                      className={`block w-full text-center py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 ${colors.button}`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Business Website?</h2>
          <p className="text-xl mb-8">Let&apos;s create a powerful online presence for your business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              Get Started Today
            </Link>
            <Link href="/contact#quote" className="btn-primary text-lg px-8 py-4 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
