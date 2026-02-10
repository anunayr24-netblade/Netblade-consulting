'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function LoansCreditCardsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ loans: 0, approvals: 0, amount: 0, satisfaction: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    { name: "Suresh Menon", business: "Small Business Owner", text: "Got ₹25 lakh business loan approved in just 15 days! Excellent documentation support." },
    { name: "Neha Kapoor", business: "Freelancer", text: "They helped me get my first credit card with great benefits. Thank you!" },
    { name: "Karthik Reddy", business: "Real Estate Agent", text: "Home loan process made easy. They compared options and got me the best rate!" },
    { name: "Divya Singh", business: "Startup Founder", text: "Working capital loan approved within 2 weeks. Professional and reliable service!" }
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
      loans: 400 / steps,
      approvals: 85 / steps,
      amount: 50 / steps,
      satisfaction: 98 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        loans: Math.min(Math.floor(increment.loans * step), 400),
        approvals: Math.min((increment.approvals * step), 85),
        amount: Math.min(Math.floor(increment.amount * step), 50),
        satisfaction: Math.min((increment.satisfaction * step), 98)
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 gradient-animated opacity-85"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white animate-fade-in">
            Loans & Credit Cards
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-purple-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Financial assistance and credit solutions
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Business Loans</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Personal Loans</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Credit Cards</span>
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
              <div className="text-5xl font-bold mb-2">{counters.loans}+</div>
              <div className="text-purple-100 text-lg">Loans Processed</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.approvals.toFixed(0)}%</div>
              <div className="text-purple-100 text-lg">Approval Rate</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">₹{counters.amount}Cr+</div>
              <div className="text-purple-100 text-lg">Loan Amount</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-2">{counters.satisfaction.toFixed(0)}%</div>
              <div className="text-purple-100 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-12 fade-on-scroll">
            Get expert guidance for business loans, personal loans, and credit card applications. 
            We help you navigate the process and connect you with the right financial products.
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
              <h3 className="font-bold text-lg mb-2">🏢 Business Loans</h3>
              <p className="text-gray-700">Working capital and term loans for businesses</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">👤 Personal Loans</h3>
              <p className="text-gray-700">Unsecured personal loan assistance</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">💳 Credit Cards</h3>
              <p className="text-gray-700">Best credit card recommendations and applications</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">🏠 Home Loans</h3>
              <p className="text-gray-700">Mortgage and home loan guidance</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">🚗 Vehicle Loans</h3>
              <p className="text-gray-700">Car and two-wheeler loan assistance</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg card-hover">
              <h3 className="font-bold text-lg mb-2">📊 Loan Eligibility</h3>
              <p className="text-gray-700">Assessment and documentation support</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-4">How We Help You</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Compare multiple loan and credit options</li>
              <li>✓ Documentation and application assistance</li>
              <li>✓ Improve your chances of approval</li>
              <li>✓ Get competitive interest rates</li>
              <li>✓ End-to-end support until disbursement</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 fade-on-scroll">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> We provide guidance and assistance for loan applications. 
              Final approval is subject to lender&apos;s terms and conditions.
            </p>
          </div>

          <div className="text-center fade-on-scroll">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 transition-all duration-300 hover:scale-110 hover:shadow-2xl inline-block">Get Loan Assistance</Link>
            <p className="text-sm text-gray-600 mt-4">Contact us for personalized loan and credit card solutions</p>
          </div>
        </div>
      </section>
    </div>
  )
}
