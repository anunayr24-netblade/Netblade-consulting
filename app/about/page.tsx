'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ clients: 0, projects: 0, satisfaction: 0, growth: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const projectHighlights = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: 'E-Commerce Platform Launch',
      description: 'Built a complete e-commerce solution with 500+ products, resulting in ₹2Cr+ revenue in first year',
      category: 'Website Development'
    },
    {
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80',
      title: 'Digital Marketing Campaign',
      description: 'Generated 10,000+ qualified leads for a real estate client with 300% ROI',
      category: 'Digital Marketing'
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      title: 'Tax & Compliance Services',
      description: 'Helped 200+ businesses save ₹50L+ in taxes through strategic planning',
      category: 'Financial Services'
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      title: 'Startup Growth Package',
      description: 'Supported 50+ startups from registration to scaling, with 80% still thriving',
      category: 'Integrated Solutions'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectHighlights.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
      clients: 500 / steps,
      projects: 1000 / steps,
      satisfaction: 99 / steps,
      growth: 300 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        clients: Math.min(Math.floor(increment.clients * step), 500),
        projects: Math.min(Math.floor(increment.projects * step), 1000),
        satisfaction: Math.min(Math.floor(increment.satisfaction * step), 99),
        growth: Math.min(Math.floor(increment.growth * step), 300)
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .gradient-animated {
          background: linear-gradient(-45deg, #1e3a8a, #1e40af, #3b82f6, #2563eb);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden gradient-animated">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl animate-fade-in">About Netblade Consulting</h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-blue-100 font-medium max-w-3xl">Building bridges between technology, marketing, and financial success — Your complete growth partner</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
              <span className="font-semibold">✓ Since 2015</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
              <span className="font-semibold">✓ 500+ Clients</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
              <span className="font-semibold">✓ 1000+ Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}></div>
        </div>
        <div className="container relative z-10" ref={statsRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">{counters.clients}+</div>
              <div className="text-blue-100 text-lg">Happy Clients</div>
              <p className="text-sm text-blue-200 mt-2">Across India</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">{counters.projects}+</div>
              <div className="text-purple-100 text-lg">Projects Delivered</div>
              <p className="text-sm text-purple-200 mt-2">On Time & Budget</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">{counters.satisfaction}%</div>
              <div className="text-indigo-100 text-lg">Client Satisfaction</div>
              <p className="text-sm text-indigo-200 mt-2">5-Star Reviews</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">{counters.growth}%</div>
              <div className="text-pink-100 text-lg">Avg. Business Growth</div>
              <p className="text-sm text-pink-200 mt-2">Year Over Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights Carousel */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">REAL PROJECTS, REAL RESULTS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See how we've helped businesses achieve their goals</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Carousel Images */}
              <div className="relative h-[500px]">
                {projectHighlights.map((project, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="inline-block px-4 py-1 bg-blue-600 rounded-full text-sm font-semibold mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                      <p className="text-xl text-gray-200">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {projectHighlights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-700">Websites Launched</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-sm text-gray-700">Marketing Campaigns</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">300+</div>
                <div className="text-sm text-gray-700">Tax Returns Filed</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹10Cr+</div>
                <div className="text-sm text-gray-700">Client Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-5xl">
      {/* Who We Are - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">WHO WE ARE</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Complete Growth Partner
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Netblade Consulting is a <span className="font-semibold text-blue-600">multi-service consulting powerhouse</span> that brings together expertise in 
                Website Development, Digital Marketing, and Financial Services under one roof.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We understand that modern businesses don't need fragmented solutions — they need an <span className="font-semibold text-purple-600">integrated approach</span> where 
                technology, marketing, and finances work together seamlessly.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-600 text-2xl mr-3">✓</span>
                  <p className="text-gray-700"><span className="font-semibold">Founded in 2015</span> with a vision to democratize business growth</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 text-2xl mr-3">✓</span>
                  <p className="text-gray-700"><span className="font-semibold">Team of 25+ experts</span> in tech, marketing, and finance</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 text-2xl mr-3">✓</span>
                  <p className="text-gray-700"><span className="font-semibold">Serving 15+ industries</span> from startups to established businesses</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Team collaboration" 
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Transparency Section - Combined */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}></div>
        </div>

        <div className="container max-w-6xl relative z-10">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To <span className="font-bold text-blue-600">empower businesses and individuals</span> with integrated technology, 
              marketing, and financial solutions that drive <span className="font-bold text-purple-600">measurable growth</span> and 
              long-term <span className="font-bold text-pink-600">success</span>
            </p>
          </div>

          {/* Mission Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Build Through Technology</h3>
              <p className="text-gray-700">
                Create modern, scalable, and secure digital solutions that establish strong online presence and drive business efficiency
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Grow Through Marketing</h3>
              <p className="text-gray-700">
                Implement data-driven strategies that increase visibility, generate quality leads, and boost revenue consistently
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-600">Succeed Through Finance</h3>
              <p className="text-gray-700">
                Provide transparent financial guidance enabling informed decisions and achievement of long-term financial goals
              </p>
            </div>
          </div>

          {/* Transparency Commitment */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Transparency Pledge</h3>
                <p className="text-xl text-gray-600">Built on trust, honesty, and clear communication</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start p-4 bg-blue-50 rounded-xl">
                  <span className="text-3xl mr-4">📊</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Clear Reporting</h4>
                    <p className="text-gray-700">Regular, detailed reports showing exactly what we're doing and the results we're achieving</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-purple-50 rounded-xl">
                  <span className="text-3xl mr-4">💬</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Honest Communication</h4>
                    <p className="text-gray-700">No jargon, no false promises — just straightforward advice and realistic timelines</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-pink-50 rounded-xl">
                  <span className="text-3xl mr-4">💵</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Transparent Pricing</h4>
                    <p className="text-gray-700">Clear quotations with no hidden fees. You know exactly what you're paying for</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-xl">
                  <span className="text-3xl mr-4">🎯</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Accountability</h4>
                    <p className="text-gray-700">We measure our success by your results and take full ownership of outcomes</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-600">
                <p className="text-lg text-gray-800">
                  <span className="font-bold">Our Promise:</span> Every client gets a dedicated account manager, 
                  monthly progress reports, and 24/7 access to support. Your success is tracked, measured, and optimized continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4">THE NETBLADE DIFFERENCE</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Not just another agency — We're your strategic growth partner</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
              <div className="flex items-start mb-4">
                <div className="text-5xl mr-4 group-hover:scale-110 transition-transform">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-900">Integrated 360° Approach</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Unlike agencies that specialize in just one area, we offer a <span className="font-semibold">complete ecosystem</span> of services. 
                    Your website, marketing campaigns, and financial compliance work together seamlessly for maximum impact.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-blue-600 mr-2">→</span>Single point of contact for everything</li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">→</span>No coordination hassles between vendors</li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">→</span>Unified strategy for faster growth</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 via-white to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
              <div className="flex items-start mb-4">
                <div className="text-5xl mr-4 group-hover:scale-110 transition-transform">🏆</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-green-900">Results Over Promises</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We believe in <span className="font-semibold">honest, transparent communication</span>. No jargon, no false promises, no inflated expectations.
                    Every strategy is measured, analyzed, and optimized for real, trackable ROI.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-green-600 mr-2">→</span>Monthly performance reports</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">→</span>Clear KPIs and measurable outcomes</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">→</span>Data-backed decision making</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 via-white to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-purple-500">
              <div className="flex items-start mb-4">
                <div className="text-5xl mr-4 group-hover:scale-110 transition-transform">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-purple-900">Agile & Responsive</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Market changes fast, and so do we. Our <span className="font-semibold">agile approach</span> means quick turnarounds, 
                    rapid iterations, and the flexibility to pivot strategies when needed without bureaucratic delays.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-purple-600 mr-2">→</span>Fast implementation timelines</li>
                    <li className="flex items-center"><span className="text-purple-600 mr-2">→</span>Quick response to market shifts</li>
                    <li className="flex items-center"><span className="text-purple-600 mr-2">→</span>Flexible engagement models</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 via-white to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500">
              <div className="flex items-start mb-4">
                <div className="text-5xl mr-4 group-hover:scale-110 transition-transform">💎</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-orange-900">Long-Term Partnership</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We don't just complete projects and disappear. We <span className="font-semibold">build lasting relationships</span> and 
                    grow alongside your business, celebrating your wins and supporting through challenges.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="text-orange-600 mr-2">→</span>Dedicated account managers</li>
                    <li className="flex items-center"><span className="text-orange-600 mr-2">→</span>24/7 support availability</li>
                    <li className="flex items-center"><span className="text-orange-600 mr-2">→</span>Ongoing optimization & support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">Excellence</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Delivering exceptional quality in every project, exceeding expectations with meticulous attention to detail
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-green-500">
              <div className="text-6xl mb-6 text-center">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-green-600">Integrity</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Operating with honesty, transparency, and ethical practices in all our business dealings
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-purple-500">
              <div className="text-6xl mb-6 text-center">💡</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-purple-600">Innovation</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Embracing new technologies and creative strategies to stay ahead of market trends
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-orange-500">
              <div className="text-6xl mb-6 text-center">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-600">Growth</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Focused on sustainable, measurable growth for our clients and continuous improvement
              </p>
            </div>
          </div>

          {/* Additional Values */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-blue-700">🎓 Continuous Learning</h4>
              <p className="text-gray-700 text-sm">Staying updated with latest industry trends and technologies</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-green-700">👥 Client Success</h4>
              <p className="text-gray-700 text-sm">Your achievements are our primary measure of success</p>
            </div>
           <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-purple-700">🌟 Collaboration</h4>
              <p className="text-gray-700 text-sm">Working together as true partners in your journey</p>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Transform Your Business?</h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Join 500+ successful businesses who trust Netblade Consulting for their growth
            </p>
            <p className="text-lg mb-10 text-blue-50">
              Let&apos;s discuss how our integrated approach can accelerate your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-block"
              >
                Schedule Free Consultation
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 inline-block"
              >
                Explore Our Services
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-6">✓ No commitment required | Free expert consultation | Response within 24 hours</p>
          </div>
        </div>
      </section>
    </div>
  )
}
