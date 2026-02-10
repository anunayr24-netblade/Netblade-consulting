'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function GSTReturnsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ registrations: 0, returns: 0, compliance: 0, experience: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    { name: "Sameer Joshi", business: "E-commerce Seller", text: "GST filing made so easy! They handle everything - GSTR-1, GSTR-3B, and annual returns on time." },
    { name: "Pooja Verma", business: "Restaurant Owner", text: "Saved me from GST penalties with their timely reminders and professional filing services!" },
    { name: "Karan Bajaj", business: "Trader", text: "Got my GST registration in 3 days and they manage all my monthly returns. Stress-free!" },
    { name: "Divya Nair", business: "Service Provider", text: "Expert team helped me with ITC reconciliation and saved thousands in taxes. Highly recommended!" }
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
      registrations: 600 / steps,
      returns: 5000 / steps,
      compliance: 99.5 / steps,
      experience: 8 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        registrations: Math.min(Math.floor(increment.registrations * step), 600),
        returns: Math.min(Math.floor(increment.returns * step), 5000),
        compliance: Math.min((increment.compliance * step), 99.5),
        experience: Math.min(Math.floor(increment.experience * step), 8)
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
          background: linear-gradient(-45deg, #1e3a8a, #1e293b, #312e81, #1e40af);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        .card-glow {
          transition: all 0.3s ease;
        }
        .card-glow:hover {
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.4);
          transform: translateY(-5px);
        }
      `}</style>

      <section className="relative text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 gradient-animated opacity-85"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white animate-fade-in">
            GST & GST Returns
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-blue-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Complete GST registration and return filing services
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ GST Registration</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Return Filing</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container relative z-10" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="fade-on-scroll">
              <div className="text-5xl font-bold mb-2">{counters.registrations}+</div>
              <div className="text-blue-100 text-lg">GST Registrations</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.returns}+</div>
              <div className="text-blue-100 text-lg">Returns Filed</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">{counters.compliance.toFixed(1)}%</div>
              <div className="text-blue-100 text-lg">On-Time Filing</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-2">{counters.experience}+</div>
              <div className="text-blue-100 text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-12 fade-on-scroll">
            Navigate GST registration and compliance with ease. We provide expert guidance and support to 
            help your business stay compliant with tax regulations and avoid penalties.
          </p>

          {/* Testimonials Carousel */}
          <div className="mb-16 fade-on-scroll">
            <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100 p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-50 animate-float"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">What Our Clients Say</h3>
                <div className="transition-all duration-500 ease-in-out">
                  <div className="text-center">
                    <p className="text-gray-700 text-lg italic mb-4 min-h-[80px] flex items-center justify-center px-4">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <p className="font-bold text-purple-700">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].business}</p>
                  </div>
                </div>
                
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-purple-600 w-8' : 'bg-purple-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 fade-on-scroll">
            <div className="bg-purple-50 p-6 rounded-lg card-glow">
              <h3 className="font-bold text-lg mb-2">📝 GST Registration</h3>
              <p className="text-gray-700">Complete assistance with GST registration process for all business types</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-glow">
              <h3 className="font-bold text-lg mb-2">📊 Return Filing Support</h3>
              <p className="text-gray-700">Expert guidance on GSTR-1, GSTR-3B, and other monthly/quarterly returns</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-glow">
              <h3 className="font-bold text-lg mb-2">⚖️ Compliance Guidance</h3>
              <p className="text-gray-700">Stay compliant with GST rules, regulations and avoid penalties</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-glow">
              <h3 className="font-bold text-lg mb-2">💡 Advisory Support</h3>
              <p className="text-gray-700">Expert consultation for GST-related queries and tax planning</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Who Needs GST Registration?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for services)</li>
              <li>✓ E-commerce sellers and online businesses</li>
              <li>✓ Inter-state suppliers of goods and services</li>
              <li>✓ Businesses required to collect tax at source</li>
              <li>✓ Input Service Distributors</li>
              <li>✓ Agents and aggregators</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Get GST Assistance</Link>
            <p className="text-sm text-gray-600 mt-4">Contact us for free consultation on GST services</p>
          </div>
        </div>
      </section>
    </div>
  )
}
