'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function SEOPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ keywords: 0, traffic: 0, rankings: 0, clients: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    { name: "Amit Verma", business: "E-commerce Store", text: "Our organic traffic increased by 250% in 6 months! Rankings improved for all target keywords." },
    { name: "Priya Joshi", business: "Law Firm", text: "Now ranking #1 for our main practice areas in local search. Phone calls doubled!" },
    { name: "Rajesh Kumar", business: "Healthcare Clinic", text: "SEO brought us consistent patients every month. ROI is amazing compared to paid ads!" },
    { name: "Sneha Patel", business: "Digital Agency", text: "Professional SEO service. Regular reports and visible results month over month!" }
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
      keywords: 5000 / steps,
      traffic: 300 / steps,
      rankings: 150 / steps,
      clients: 200 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        keywords: Math.min(Math.floor(increment.keywords * step), 5000),
        traffic: Math.min(Math.floor(increment.traffic * step), 300),
        rankings: Math.min(Math.floor(increment.rankings * step), 150),
        clients: Math.min(Math.floor(increment.clients * step), 200)
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
          background: linear-gradient(-45deg, #059669, #047857, #065f46, #064e3b);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
          transform: translateY(-5px);
        }
      `}</style>

      <section className="relative text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 gradient-animated opacity-85"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white animate-fade-in">
            Search Engine Optimization (SEO)
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-green-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Rank higher on Google and drive organic traffic to your website
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Keyword Research</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ On-Page SEO</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Link Building</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container relative z-10" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="fade-on-scroll">
              <div className="text-5xl font-bold mb-2">{counters.keywords}+</div>
              <div className="text-green-100 text-lg">Keywords Ranked</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.traffic}%</div>
              <div className="text-green-100 text-lg">Avg Traffic Growth</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">{counters.rankings}+</div>
              <div className="text-green-100 text-lg">Page 1 Rankings</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-2">{counters.clients}+</div>
              <div className="text-green-100 text-lg">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-12 fade-on-scroll">
            SEO is not just about rankings – it&apos;s about connecting with your target audience when 
            they&apos;re actively searching for your products or services. Our data-driven SEO strategies 
            deliver sustainable, long-term results.
          </p>

          {/* Testimonials Carousel */}
          <div className="mb-16 fade-on-scroll">
            <div className="bg-gradient-to-r from-green-100 via-green-50 to-green-100 p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-50 animate-float"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">What Our Clients Say</h3>
                <div className="transition-all duration-500 ease-in-out">
                  <div className="text-center">
                    <p className="text-gray-700 text-lg italic mb-4 min-h-[80px] flex items-center justify-center px-4">
                      &quot;{testimonials[currentTestimonial].text}&quot;
                    </p>
                    <p className="font-bold text-green-700">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].business}</p>
                  </div>
                </div>
                
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-green-600 w-8' : 'bg-green-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 fade-on-scroll">
            <div className="bg-green-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">🔍 Keyword Research</h3>
              <p className="text-gray-700">Target the right keywords your customers are searching for</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">⚙️ On-Page SEO</h3>
              <p className="text-gray-700">Optimize content, meta tags, and site structure</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">🔗 Link Building</h3>
              <p className="text-gray-700">Build authority with high-quality backlinks</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">📝 Content Strategy</h3>
              <p className="text-gray-700">Create SEO-optimized content that ranks and converts</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">🏪 Local SEO</h3>
              <p className="text-gray-700">Dominate local search results in your area</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">📊 Analytics & Reporting</h3>
              <p className="text-gray-700">Track rankings, traffic, and conversions</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Our SEO Process</h3>
            <div className="space-y-3">
              <p className="text-gray-700">✓ <strong>Audit:</strong> Comprehensive analysis of your current SEO performance</p>
              <p className="text-gray-700">✓ <strong>Strategy:</strong> Custom SEO roadmap based on your goals</p>
              <p className="text-gray-700">✓ <strong>Implementation:</strong> On-page and off-page optimization</p>
              <p className="text-gray-700">✓ <strong>Monitoring:</strong> Continuous tracking and refinement</p>
              <p className="text-gray-700">✓ <strong>Reporting:</strong> Monthly reports with actionable insights</p>
            </div>
          </div>

          <div className="text-center fade-on-scroll">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 transition-all duration-300 hover:scale-110 hover:shadow-2xl inline-block">Boost Your Rankings</Link>
            <p className="text-sm text-gray-600 mt-4">Contact us for a free SEO audit and strategy session</p>
          </div>
        </div>
      </section>
    </div>
  )
}
