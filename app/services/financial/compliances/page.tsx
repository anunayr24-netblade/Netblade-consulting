'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function CompliancesPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ clients: 0, filings: 0, ontime: 0, experience: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    { name: "Vikram Malhotra", business: "Tech Startup", text: "They handle all our ROC compliances flawlessly. Never missed a single deadline!" },
    { name: "Anjali Desai", business: "Manufacturing Co.", text: "ESI and PF compliance made simple. No more worries about statutory regulations!" },
    { name: "Rohit Sharma", business: "Consulting Firm", text: "Complete TDS filing support. Our audits pass smoothly every time!" },
    { name: "Kavya Nair", business: "Export Business", text: "Professional compliance calendar keeps us ahead of all due dates. Highly recommended!" }
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
      clients: 350 / steps,
      filings: 1500 / steps,
      ontime: 100 / steps,
      experience: 8 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        clients: Math.min(Math.floor(increment.clients * step), 350),
        filings: Math.min(Math.floor(increment.filings * step), 1500),
        ontime: Math.min((increment.ontime * step), 100),
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
          background: linear-gradient(-45deg, #7c3aed, #6d28d9, #5b21b6, #4c1d95);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.4);
          transform: translateY(-5px);
        }
      `}</style>

      <section className="relative text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 gradient-animated opacity-85"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white animate-fade-in">
            Business Compliances
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-purple-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Stay compliant with all regulatory requirements
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ ROC Compliance</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ ESI & PF</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ TDS Returns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container relative z-10" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="fade-on-scroll">
              <div className="text-5xl font-bold mb-2">{counters.clients}+</div>
              <div className="text-purple-100 text-lg">Compliant Businesses</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.filings}+</div>
              <div className="text-purple-100 text-lg">Successful Filings</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">{counters.ontime.toFixed(0)}%</div>
              <div className="text-purple-100 text-lg">On-Time Filing</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-2">{counters.experience}+</div>
              <div className="text-purple-100 text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-12 fade-on-scroll">
            Ensure your business stays compliant with all statutory and regulatory requirements. 
            We provide comprehensive compliance management services to keep you worry-free.
          </p>

          {/* Testimonials Carousel */}
          <div className="mb-16 fade-on-scroll">
            <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-50 animate-float"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">What Our Clients Say</h3>
                <div className="transition-all duration-500 ease-in-out">
                  <div className="text-center">
                    <p className="text-gray-700 text-lg italic mb-4 min-h-[80px] flex items-center justify-center px-4">
                      &quot;{testimonials[currentTestimonial].text}&quot;
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
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">📋 ROC Compliance</h3>
              <p className="text-gray-700">Annual filings and MCA compliance</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">📊 Annual Returns</h3>
              <p className="text-gray-700">Filing of annual returns and statements</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">🏦 ESI & PF Compliance</h3>
              <p className="text-gray-700">Employee statutory compliance management</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">📝 TDS Returns</h3>
              <p className="text-gray-700">Quarterly TDS filing and compliance</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">⚖️ Legal Compliance</h3>
              <p className="text-gray-700">Statutory registers and board meetings</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">📅 Compliance Calendar</h3>
              <p className="text-gray-700">Timely reminders for all due dates</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Why Business Compliance Matters</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Avoid penalties and legal consequences</li>
              <li>✓ Maintain good standing with authorities</li>
              <li>✓ Build trust with stakeholders</li>
              <li>✓ Ensure smooth business operations</li>
              <li>✓ Peace of mind with expert handling</li>
            </ul>
          </div>

          <div className="text-center fade-on-scroll">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 transition-all duration-300 hover:scale-110 hover:shadow-2xl inline-block">Get Compliance Support</Link>
            <p className="text-sm text-gray-600 mt-4">Contact us for complete compliance management services</p>
          </div>
        </div>
      </section>
    </div>
  )
}
