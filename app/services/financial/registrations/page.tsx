'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function RegistrationsPage() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({})
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ registrations: 0, companies: 0, licenses: 0, experience: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const toggleFlip = (cardId: string) => {
    setFlippedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }))
  }

  const testimonials = [
    { name: "Arjun Mehta", business: "Tech Startup Founder", text: "Got my Private Limited Company registered in just 7 days! Professional team and hassle-free process." },
    { name: "Kavita Singh", business: "Restaurant Owner", text: "FSSAI license and company registration done smoothly. They handled everything from start to finish!" },
    { name: "Ravi Kumar", business: "E-commerce Seller", text: "Quick GST and GeM registration helped me start selling to government departments. Highly recommended!" },
    { name: "Neha Gupta", business: "Consultant", text: "LLP registration was so easy with their guidance. All documentation perfectly handled!" }
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
      registrations: 800 / steps,
      companies: 300 / steps,
      licenses: 500 / steps,
      experience: 12 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        registrations: Math.min(Math.floor(increment.registrations * step), 800),
        companies: Math.min(Math.floor(increment.companies * step), 300),
        licenses: Math.min(Math.floor(increment.licenses * step), 500),
        experience: Math.min(Math.floor(increment.experience * step), 12)
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
            Business Registrations
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-blue-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Complete registration services for your business
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Company Registration</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Licenses & Certifications</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Fast & Reliable</span>
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
              <div className="text-blue-100 text-lg">Registrations Done</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.companies}+</div>
              <div className="text-blue-100 text-lg">Companies Registered</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">{counters.licenses}+</div>
              <div className="text-blue-100 text-lg">Licenses Issued</div>
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
            Get your business registered with ease. We provide comprehensive guidance and support 
            for all types of business registrations including company incorporation, partnership, 
            proprietorship, licenses, certifications, and more.
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

          {/* Business Structure Registrations */}
          <div className="mb-16 fade-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">Business Structure Registrations</h2>
            
            <div className="space-y-8">
              {/* Company Registration */}
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-purple-700">🏢 Company Registration</h3>
                <p className="text-gray-700 mb-3">
                  Register your company as Private Limited, Public Limited, One Person Company (OPC), or Limited Liability Partnership (LLP).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Private Limited Company</div>
                  <div className="text-sm text-gray-600">✓ One Person Company (OPC)</div>
                  <div className="text-sm text-gray-600">✓ Limited Liability Partnership (LLP)</div>
                  <div className="text-sm text-gray-600">✓ Public Limited Company</div>
                  <div className="text-sm text-gray-600">✓ Section 8 Company (NGO)</div>
                  <div className="text-sm text-gray-600">✓ Nidhi Company</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Includes: Name approval, MOA/AOA drafting, DIN/DSC, incorporation certificate
                </p>
              </div>

              {/* Partnership Registration */}
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-purple-700">🤝 Partnership Firm Registration</h3>
                <p className="text-gray-700 mb-3">
                  Register your partnership firm with detailed partnership deed covering all terms, profit sharing, and responsibilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Partnership Deed Drafting</div>
                  <div className="text-sm text-gray-600">✓ Partnership Firm Registration</div>
                  <div className="text-sm text-gray-600">✓ PAN Application for Firm</div>
                  <div className="text-sm text-gray-600">✓ Bank Account Opening Support</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Ideal for 2-20 partners looking to start a business together
                </p>
              </div>

              {/* Proprietorship */}
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-purple-700">👤 Proprietorship Registration</h3>
                <p className="text-gray-700 mb-3">
                  Simplest and most cost-effective business structure for individual entrepreneurs. Full control with minimal compliance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Business Name Registration</div>
                  <div className="text-sm text-gray-600">✓ PAN Card Application</div>
                  <div className="text-sm text-gray-600">✓ GST Registration Support</div>
                  <div className="text-sm text-gray-600">✓ Current Account Opening Assistance</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Perfect for freelancers, consultants, and small business owners
                </p>
              </div>
            </div>
          </div>

          {/* Licenses & Certifications */}
          <div className="mb-16 fade-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">Licenses & Certifications</h2>
            
            <div className="space-y-8">
              {/* FSSAI */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">🍽️ FSSAI License (Food License)</h3>
                <p className="text-gray-700 mb-3">
                  Food Safety and Standards Authority of India license - mandatory for food businesses, manufacturers, traders, and restaurants.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-sm text-gray-600">✓ Basic Registration (₹12 lakhs turnover)</div>
                  <div className="text-sm text-gray-600">✓ State License (₹12-20 crores)</div>
                  <div className="text-sm text-gray-600">✓ Central License (₹20+ crores)</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Required for: Food manufacturers, restaurants, cafes, bakeries, cloud kitchens, food traders
                </p>
              </div>

              {/* GeM */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">🛒 GeM Registration</h3>
                <p className="text-gray-700 mb-3">
                  Government e-Marketplace registration to sell products and services directly to government departments and PSUs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Seller Registration on GeM Portal</div>
                  <div className="text-sm text-gray-600">✓ Product/Service Listing Support</div>
                  <div className="text-sm text-gray-600">✓ OEM/Brand Authorization</div>
                  <div className="text-sm text-gray-600">✓ Catalog Upload Assistance</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Open huge opportunities for government contracts and tenders
                </p>
              </div>

              {/* IEC */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">🌍 IEC (Import Export Code)</h3>
                <p className="text-gray-700 mb-3">
                  10-digit code mandatory for import and export of goods and services from India. Issued by DGFT (Directorate General of Foreign Trade).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ IEC Code Application</div>
                  <div className="text-sm text-gray-600">✓ Document Preparation</div>
                  <div className="text-sm text-gray-600">✓ IEC Modification Support</div>
                  <div className="text-sm text-gray-600">✓ IEC Surrender Assistance</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Lifetime validity with no renewal required - essential for export-import businesses
                </p>
              </div>

              {/* ISO Certification */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">⭐ ISO Certification</h3>
                <p className="text-gray-700 mb-3">
                  International quality management system certification to enhance credibility and meet international standards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-sm text-gray-600">✓ ISO 9001 (Quality Management)</div>
                  <div className="text-sm text-gray-600">✓ ISO 14001 (Environmental)</div>
                  <div className="text-sm text-gray-600">✓ ISO 27001 (Information Security)</div>
                  <div className="text-sm text-gray-600">✓ ISO 22000 (Food Safety)</div>
                  <div className="text-sm text-gray-600">✓ ISO 45001 (Occupational Health)</div>
                  <div className="text-sm text-gray-600">✓ Audit & Documentation Support</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Boost business reputation and qualify for international contracts
                </p>
              </div>

              {/* Shop & Establishment */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">🏪 Shops & Establishment License</h3>
                <p className="text-gray-700 mb-3">
                  Mandatory license under state law for all shops, commercial establishments, restaurants, theaters, and offices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ License Registration</div>
                  <div className="text-sm text-gray-600">✓ Renewal Support</div>
                  <div className="text-sm text-gray-600">✓ Amendment in License</div>
                  <div className="text-sm text-gray-600">✓ Employee Compliance</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Required within 30 days of starting business - covers working hours, wages, and employee welfare
                </p>
              </div>

              {/* Trademark */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">™️ Trademark Registration</h3>
                <p className="text-gray-700 mb-3">
                  Protect your brand name, logo, and tagline with official trademark registration under the Trade Marks Act, 1999.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Trademark Search & Clearance</div>
                  <div className="text-sm text-gray-600">✓ Class Selection (45 classes)</div>
                  <div className="text-sm text-gray-600">✓ Application Filing & Follow-up</div>
                  <div className="text-sm text-gray-600">✓ Objection & Opposition Handling</div>
                  <div className="text-sm text-gray-600">✓ Trademark Renewal (Every 10 years)</div>
                  <div className="text-sm text-gray-600">✓ Logo & Brand Name Protection</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  10-year validity with exclusive rights to your brand identity
                </p>
              </div>

              {/* MSME */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">📋 MSME/Udyam Registration</h3>
                <p className="text-gray-700 mb-3">
                  Udyam Registration for Micro, Small and Medium Enterprises - unlock government subsidies, loans, and benefits.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Udyam Registration (Free)</div>
                  <div className="text-sm text-gray-600">✓ Micro, Small & Medium Classification</div>
                  <div className="text-sm text-gray-600">✓ Udyam Certificate Download</div>
                  <div className="text-sm text-gray-600">✓ Bank Loan Benefits Guidance</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Benefits: Easy bank loans, govt tenders, tax exemptions, subsidies, and credit facility
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Registration Services?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Expert guidance through the entire registration process</li>
              <li>✓ Complete documentation and paperwork assistance</li>
              <li>✓ Quick turnaround time with regular updates</li>
              <li>✓ Post-registration compliance support</li>
              <li>✓ Affordable and transparent pricing - no hidden charges</li>
              <li>✓ Dedicated support team for query resolution</li>
              <li>✓ End-to-end assistance from application to certificate</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Start Your Business Registration</Link>
            <p className="text-sm text-gray-600 mt-4">Contact us for free consultation and quote</p>
          </div>
        </div>
      </section>
    </div>
  )
}
