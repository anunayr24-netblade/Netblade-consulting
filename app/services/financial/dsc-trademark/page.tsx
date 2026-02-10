'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function DSCTrademarkPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ dsc: 0, trademarks: 0, clients: 0, experience: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    { name: "Abhishek Thakur", business: "Startup Founder", text: "Got my trademark registered smoothly! They handled objections perfectly and my brand is now protected." },
    { name: "Ritika Malhotra", business: "Company Director", text: "DSC received in 2 days! Super fast service for our MCA compliance needs." },
    { name: "Mohit Jain", business: "E-commerce Seller", text: "Trademark search was thorough and filing process was hassle-free. Highly professional!" },
    { name: "Shalini Rao", business: "Creative Agency", text: "Protected our brand name and logo. Great support throughout the trademark registration journey!" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

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
      dsc: 400 / steps,
      trademarks: 250 / steps,
      clients: 600 / steps,
      experience: 10 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        dsc: Math.min(Math.floor(increment.dsc * step), 400),
        trademarks: Math.min(Math.floor(increment.trademarks * step), 250),
        clients: Math.min(Math.floor(increment.clients * step), 600),
        experience: Math.min(Math.floor(increment.experience * step), 10)
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 gradient-animated opacity-85"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white animate-fade-in">
            DSC & Trademark Services
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-blue-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Digital signature and brand protection services
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Digital Signature</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Trademark Filing</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Brand Protection</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container relative z-10" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="fade-on-scroll">
              <div className="text-5xl font-bold mb-2">{counters.dsc}+</div>
              <div className="text-blue-100 text-lg">DSC Issued</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.trademarks}+</div>
              <div className="text-blue-100 text-lg">Trademarks Registered</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">{counters.clients}+</div>
              <div className="text-blue-100 text-lg">Happy Clients</div>
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
            Secure your digital transactions and protect your brand identity with our DSC and 
            trademark registration services. Essential for modern business operations and brand protection.
          </p>

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
              <h3 className="font-bold text-lg mb-2">🔐 Digital Signature Certificate (DSC)</h3>
              <p className="text-gray-700">Class 2 and Class 3 DSC for business compliance and e-filing</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-glow">
              <h3 className="font-bold text-lg mb-2">™️ Trademark Registration</h3>
              <p className="text-gray-700">Protect your brand name and logo with official trademark</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-glow">
              <h3 className="font-bold text-lg mb-2">🔍 Trademark Search</h3>
              <p className="text-gray-700">Comprehensive trademark availability check and clearance</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-glow">
              <h3 className="font-bold text-lg mb-2">📜 Copyright Registration</h3>
              <p className="text-gray-700">Protect your creative works, content, and intellectual property</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-glow">
              <h3 className="font-bold text-lg mb-2">🔄 DSC Renewal</h3>
              <p className="text-gray-700">Timely renewal of digital signatures before expiry</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-glow">
              <h3 className="font-bold text-lg mb-2">⚖️ Trademark Objections</h3>
              <p className="text-gray-700">Expert handling of trademark objections and legal replies</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Why You Need These Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ DSC mandatory for MCA filings, GST registration, and e-tenders</li>
              <li>✓ Protect your brand from unauthorized use and infringement</li>
              <li>✓ Legal ownership and exclusive rights to your business identity</li>
              <li>✓ Enhanced credibility and trust with customers</li>
              <li>✓ Prevent competitors from using similar brand names</li>
              <li>✓ Secure digital transactions with government portals</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Get DSC & Trademark Services</Link>
            <p className="text-sm text-gray-600 mt-4">Contact us for consultation and quick processing</p>
          </div>
        </div>
      </section>
    </div>
  )
}
