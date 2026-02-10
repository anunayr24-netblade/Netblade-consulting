'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function AccountingBalanceSheetPage() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({})
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ clients: 0, statements: 0, accuracy: 0, experience: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const toggleFlip = (cardId: string) => {
    setFlippedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }))
  }

  const testimonials = [
    { name: "Rajesh Kumar", business: "Real Estate Developer", text: "Their accounting services helped us secure a ₹50L bank loan with perfectly prepared CMA reports!" },
    { name: "Priya Sharma", business: "E-commerce Startup", text: "Monthly accounting package saved us time and money. Our books are always audit-ready!" },
    { name: "Amit Patel", business: "Manufacturing Unit", text: "GST compliance made easy! No more penalties or late fees. Highly recommended!" },
    { name: "Sneha Reddy", business: "Consulting Firm", text: "Professional balance sheets and P&L helped us get investors. Great team!" }
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
      clients: 500 / steps,
      statements: 2000 / steps,
      accuracy: 99.9 / steps,
      experience: 10 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        clients: Math.min(Math.floor(increment.clients * step), 500),
        statements: Math.min(Math.floor(increment.statements * step), 2000),
        accuracy: Math.min((increment.accuracy * step), 99.9),
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
          style={{ backgroundImage: "url('/Images/Tax.jpg')" }}
        ></div>
        <div className="absolute inset-0 gradient-animated opacity-85"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white animate-fade-in">
            Accounting & Balance Sheet
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-blue-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Professional accounting and financial statement services
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Balance Sheet Preparation</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ P&L Statements</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ GST Compliance</span>
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
              <div className="text-5xl font-bold mb-2">{counters.clients}+</div>
              <div className="text-blue-100 text-lg">Happy Clients</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.statements}+</div>
              <div className="text-blue-100 text-lg">Financial Statements</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">{counters.accuracy.toFixed(1)}%</div>
              <div className="text-blue-100 text-lg">Accuracy Rate</div>
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
            Maintain accurate financial records with our comprehensive accounting and balance sheet 
            preparation services. We help businesses keep their books organized, compliant, and audit-ready 
            with professional financial statements, GST compliance, and regular reporting.
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

          {/* Financial Statements Services */}
          <div className="mb-16 fade-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">Financial Statements Services</h2>
            
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {/* Balance Sheet & P&L Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'balance-sheet': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['balance-sheet'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-purple-700">📊 Balance Sheet & Profit Loss Account</h3>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Complete financial statement preparation including Balance Sheet, Profit & Loss Account, and supporting schedules.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ Balance Sheet preparation</div>
                      <div className="text-sm text-gray-600">✓ Profit & Loss Account</div>
                      <div className="text-sm text-gray-600">✓ Cash Flow Statement</div>
                      <div className="text-sm text-gray-600">✓ Notes to Accounts</div>
                      <div className="text-sm text-gray-600">✓ Schedules & annexures</div>
                      <div className="text-sm text-gray-600">✓ Comparative financial statements</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      Annual financial statements for proprietary, partnership, LLP, and companies
                    </p>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 Why Choose Us?</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">📊 Balance Sheet Preparation:</p>
                        <p className="text-white/90">Clear snapshot of your company's assets, liabilities, and equity. We ensure accurate valuation and proper classification for informed business decisions.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💰 Profit & Loss Account:</p>
                        <p className="text-white/90">Detailed income and expense analysis to understand profitability. We help identify cost-saving opportunities and revenue optimization areas.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📈 Cash Flow Statement:</p>
                        <p className="text-white/90">Track where your money comes from and goes. Essential for managing working capital and planning future investments.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📝 Notes & Schedules:</p>
                        <p className="text-white/90">Comprehensive disclosures and detailed breakdowns that add transparency and meet regulatory compliance requirements.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🔍 Comparative Analysis:</p>
                        <p className="text-white/90">Year-over-year comparison to track growth trends, identify patterns, and make data-driven strategic decisions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CA Certification Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'ca-cert': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['ca-cert'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-purple-700">✅ CA Certification of Balance Sheet</h3>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Get your Balance Sheet certified by a Chartered Accountant for loans, tenders, and visa applications.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ CA signed & stamped Balance Sheet</div>
                      <div className="text-sm text-gray-600">✓ Profit & Loss certification</div>
                      <div className="text-sm text-gray-600">✓ CA certificate for bank loans</div>
                      <div className="text-sm text-gray-600">✓ Turnover certificate</div>
                      <div className="text-sm text-gray-600">✓ Net worth certificate</div>
                      <div className="text-sm text-gray-600">✓ Statutory certification</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      Official CA certification accepted by banks and government departments
                    </p>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 How We Help</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">✅ Official CA Signature:</p>
                        <p className="text-white/90">Our qualified Chartered Accountants review and certify your financials, adding credibility and authenticity to your documents.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🏦 Bank Loan Certificates:</p>
                        <p className="text-white/90">Essential for loan applications - we provide properly formatted certificates that banks recognize and accept immediately.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💼 Turnover Certification:</p>
                        <p className="text-white/90">Accurate turnover certificates for government tenders, vendor registration, and business contracts.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💰 Net Worth Certificate:</p>
                        <p className="text-white/90">Certified net worth statements for partnership bids, joint ventures, and financial credibility verification.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">✈️ Visa Applications:</p>
                        <p className="text-white/90">Embassy-accepted financial certificates for visa sponsorship, business visas, and immigration purposes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Balance Sheet Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'project-bs': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['project-bs'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-purple-700">📋 Project Balance Sheet</h3>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Projected Balance Sheet for business plans, loan applications, and funding proposals.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ Projected Balance Sheet (3-5 years)</div>
                      <div className="text-sm text-gray-600">✓ Forecasted P&L statements</div>
                      <div className="text-sm text-gray-600">✓ Cash flow projections</div>
                      <div className="text-sm text-gray-600">✓ Break-even analysis</div>
                      <div className="text-sm text-gray-600">✓ Funding requirement assessment</div>
                      <div className="text-sm text-gray-600">✓ Financial feasibility report</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      Essential for business plans and investor presentations
                    </p>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 Why You Need This</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">📊 Projected Balance Sheet:</p>
                        <p className="text-white/90">Realistic financial forecasts that demonstrate business viability to lenders and investors. We base projections on market research and industry benchmarks.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💰 Forecasted P&L:</p>
                        <p className="text-white/90">Revenue and expense projections that show profitability timeline. Critical for securing funding and planning operational budgets.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📈 Cash Flow Projections:</p>
                        <p className="text-white/90">Month-by-month cash requirements to ensure you never run out of working capital. Banks examine this closely before approving loans.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">⚖️ Break-Even Analysis:</p>
                        <p className="text-white/90">Calculate exactly when your business will become profitable. Helps in pricing strategy and sales target setting.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💼 Feasibility Report:</p>
                        <p className="text-white/90">Comprehensive viability assessment covering market potential, financial soundness, and risk analysis for confident decision-making.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CMA Report Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'cma-report': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['cma-report'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-purple-700">📈 CMA Report</h3>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Comprehensive CMA report in RBI format for bank loans and working capital facilities.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ CMA Data in RBI format</div>
                      <div className="text-sm text-gray-600">✓ Historical financials (3 years)</div>
                      <div className="text-sm text-gray-600">✓ Projected financials (3 years)</div>
                      <div className="text-sm text-gray-600">✓ Working capital assessment</div>
                      <div className="text-sm text-gray-600">✓ MPBF calculation</div>
                      <div className="text-sm text-gray-600">✓ Ratio analysis</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      Mandatory for term loans and working capital financing
                    </p>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 How We Assist</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">📋 RBI Format Compliance:</p>
                        <p className="text-white/90">We prepare CMA data exactly as per RBI guidelines that all banks require. No rejections due to format issues.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📊 Historical Analysis:</p>
                        <p className="text-white/90">Past 3 years financial data analysis showing business stability, growth trends, and creditworthiness to strengthen your loan application.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🔮 Future Projections:</p>
                        <p className="text-white/90">Realistic 3-year forecasts demonstrating loan repayment capacity and business growth potential with supporting assumptions.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💰 Working Capital Assessment:</p>
                        <p className="text-white/90">Calculate optimal working capital needs using Tandon Committee norms. Justify the loan amount you're requesting.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📈 MPBF & Ratios:</p>
                        <p className="text-white/90">Maximum Permissible Bank Finance calculation and key financial ratios that banks evaluate for credit decisions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Carousel Layout - Same as before but with flip functionality */}
            <div className="md:hidden overflow-x-auto pb-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {/* Mobile cards remain as is for now */}
                <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-purple-700">📊 Balance Sheet & P&L</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Complete financial statement preparation including Balance Sheet, Profit & Loss Account, and supporting schedules.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ Balance Sheet preparation</div>
                    <div className="text-xs text-gray-600">✓ Profit & Loss Account</div>
                    <div className="text-xs text-gray-600">✓ Cash Flow Statement</div>
                    <div className="text-xs text-gray-600">✓ Notes & Schedules</div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-purple-700">✅ CA Certification</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Get your Balance Sheet certified by a CA for bank loans, tenders, and visa applications.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ CA signed Balance Sheet</div>
                    <div className="text-xs text-gray-600">✓ Bank loan certificates</div>
                    <div className="text-xs text-gray-600">✓ Turnover certificate</div>
                    <div className="text-xs text-gray-600">✓ Net worth certificate</div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-purple-700">📋 Project Balance Sheet</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Projected Balance Sheet for business plans, loan applications, and funding proposals.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ Projected Balance Sheet (3-5 years)</div>
                    <div className="text-xs text-gray-600">✓ Forecasted P&L</div>
                    <div className="text-xs text-gray-600">✓ Cash flow projections</div>
                    <div className="text-xs text-gray-600">✓ Break-even analysis</div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-purple-700">📈 CMA Report</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Comprehensive CMA report in RBI format for bank loans and working capital facilities.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ CMA Data in RBI format</div>
                    <div className="text-xs text-gray-600">✓ Historical & Projected financials</div>
                    <div className="text-xs text-gray-600">✓ Working capital assessment</div>
                    <div className="text-xs text-gray-600">✓ Ratio analysis</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">← Swipe to see more →</p>
            </div>
          </div>

          {/* Professional Accounting Image Section */}
          <div className="mb-16 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl fade-on-scroll">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-700">Professional Accounting Services</h3>
              <p className="text-gray-700 mb-4">
                Our team of expert accountants ensures your books are accurate, compliant, and ready for any audit or financial review.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Experienced CA and accounting professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Timely and accurate financial reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Complete confidentiality and data security</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/Images/Audit.jpg" 
                alt="Professional accountant working on financial records" 
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accounting Packages */}
          <div className="mb-16 fade-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">Accounting Packages</h2>
            
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {/* Monthly Accounting Package Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'monthly-pkg': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['monthly-pkg'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-green-700">📅 Monthly Accounting Package</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Complete monthly bookkeeping with regular MIS reports and financial oversight.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ Daily transaction recording</div>
                      <div className="text-sm text-gray-600">✓ Bank & cash book maintenance</div>
                      <div className="text-sm text-gray-600">✓ Purchase & sales register</div>
                      <div className="text-sm text-gray-600">✓ Expense tracking & categorization</div>
                      <div className="text-sm text-gray-600">✓ Monthly MIS reports</div>
                      <div className="text-sm text-gray-600">✓ Monthly P&L statement</div>
                      <div className="text-sm text-gray-600">✓ Receivables & payables tracking</div>
                      <div className="text-sm text-gray-600">✓ Budget vs actual analysis</div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 Monthly Benefits</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">📝 Daily Transaction Recording:</p>
                        <p className="text-white/90">Every sale, purchase, and expense recorded daily. Never lose track of your business transactions with our systematic approach.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🏦 Bank Reconciliation:</p>
                        <p className="text-white/90">Monthly bank statement matching to catch errors, detect fraud, and ensure accurate cash positions for better decision-making.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📊 Monthly MIS Reports:</p>
                        <p className="text-white/90">Management Information System reports with key metrics, expense breakdown, revenue analysis, and actionable business insights.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💰 P&L Tracking:</p>
                        <p className="text-white/90">Monthly profit and loss statements to monitor profitability trends and take corrective actions before it's too late.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📈 Budget Analysis:</p>
                        <p className="text-white/90">Compare actual vs budgeted figures to identify variances, control costs, and optimize resource allocation effectively.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Annual Accounting Package Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'annual-pkg': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['annual-pkg'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-green-700">📆 Annual Accounting Package</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Complete year-end accounting with financial statements and ITR support.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ Complete bookkeeping for the year</div>
                      <div className="text-sm text-gray-600">✓ Balance Sheet finalization</div>
                      <div className="text-sm text-gray-600">✓ P&L Account preparation</div>
                      <div className="text-sm text-gray-600">✓ Ledger closing & reconciliation</div>
                      <div className="text-sm text-gray-600">✓ Depreciation calculation</div>
                      <div className="text-sm text-gray-600">✓ Stock valuation & adjustment</div>
                      <div className="text-sm text-gray-600">✓ ITR filing support</div>
                      <div className="text-sm text-gray-600">✓ Annual return preparation</div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 Annual Benefits</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">📚 Complete Year Bookkeeping:</p>
                        <p className="text-white/90">We organize and record your entire year's transactions systematically, creating a clear audit trail for compliance.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📊 Financial Statements:</p>
                        <p className="text-white/90">Professionally prepared Balance Sheet and P&L Account that clearly show your business financial position and performance.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📉 Depreciation Calculation:</p>
                        <p className="text-white/90">Accurate depreciation as per IT rules to claim maximum tax benefits and show true asset value.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📦 Stock Valuation:</p>
                        <p className="text-white/90">Year-end inventory valuation ensuring correct profit calculation and tax compliance.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📄 ITR Filing Support:</p>
                        <p className="text-white/90">Seamless transition to tax filing with organized data, ensuring you claim all deductions and file on time.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Carousel Layout */}
            <div className="md:hidden overflow-x-auto pb-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-green-700">📅 Monthly Accounting</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Complete monthly bookkeeping with regular MIS reports and financial oversight.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ Daily transaction recording</div>
                    <div className="text-xs text-gray-600">✓ Bank & cash book maintenance</div>
                    <div className="text-xs text-gray-600">✓ Monthly MIS reports</div>
                    <div className="text-xs text-gray-600">✓ Monthly P&L statement</div>
                    <div className="text-xs text-gray-600">✓ Budget vs actual analysis</div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-green-700">📆 Annual Accounting</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Complete year-end accounting package with financial statements and ITR support.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ Complete bookkeeping</div>
                    <div className="text-xs text-gray-600">✓ Balance Sheet finalization</div>
                    <div className="text-xs text-gray-600">✓ P&L Account preparation</div>
                    <div className="text-xs text-gray-600">✓ ITR filing support</div>
                    <div className="text-xs text-gray-600">✓ Annual return preparation</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">← Swipe to see more →</p>
            </div>
          </div>

          {/* Bookkeeping Excellence Image Section */}
          <div className="mb-16 grid md:grid-cols-2 gap-8 items-center fade-on-scroll">
            <div className="rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
              <img 
                src="/Images/Accounting.jpg" 
                alt="Hands-on bookkeeping and accounting work" 
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Accurate Bookkeeping & Record Keeping</h3>
              <p className="text-gray-700 mb-4">
                Every transaction matters. We maintain meticulous records of all your business transactions, ensuring nothing is missed.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Daily transaction recording and categorization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Bank reconciliation and cash flow tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Expense management and budget monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Regular MIS reports for informed decisions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* GST & Digital Compliance */}
          <div className="mb-16 fade-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">GST Bookkeeping & Compliance</h2>
            
            {/* Desktop Grid Layout - 2x2 with Flip Cards */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {/* GST Bookkeeping Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'gst-bookkeeping': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['gst-bookkeeping'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-blue-700">📚 GST Bookkeeping</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Specialized GST-compliant bookkeeping with proper classification.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ Purchase register (GST-wise)</div>
                      <div className="text-sm text-gray-600">✓ Sales register (GST-wise)</div>
                      <div className="text-sm text-gray-600">✓ Input tax credit tracking</div>
                      <div className="text-sm text-gray-600">✓ HSN/SAC code classification</div>
                      <div className="text-sm text-gray-600">✓ CGST, SGST, IGST bifurcation</div>
                      <div className="text-sm text-gray-600">✓ E-way bill register maintenance</div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 Bookkeeping Benefits</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">📊 GST-Wise Classification:</p>
                        <p className="text-white/90">Separate registers for 0%, 5%, 12%, 18%, 28% GST items ensuring accurate tax calculation and compliance with GST rules.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💰 ITC Tracking:</p>
                        <p className="text-white/90">Track every paisa of input tax credit from purchases to maximize your GST refund and reduce tax outflow legally.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">🏷️ HSN/SAC Coding:</p>
                        <p className="text-white/90">Proper HSN/SAC code assignment as per GST rules preventing notices and ensuring smooth e-invoice generation.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📦 E-way Bill Register:</p>
                        <p className="text-white/90">Maintain movement records of goods with e-way bills to avoid penalties during transportation and ensure complete audit trail.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GST Reconciliation Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'gst-reconciliation': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['gst-reconciliation'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-blue-700">🔄 GST Reconciliation</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Monthly GST reconciliation to ensure accurate ITC claims.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ Books vs GSTR-2A/2B matching</div>
                      <div className="text-sm text-gray-600">✓ GSTR-1 vs GSTR-3B reconciliation</div>
                      <div className="text-sm text-gray-600">✓ ITC mismatch identification</div>
                      <div className="text-sm text-gray-600">✓ Invoice discrepancy resolution</div>
                      <div className="text-sm text-gray-600">✓ Monthly reconciliation report</div>
                      <div className="text-sm text-gray-600">✓ Annual GSTR-9 reconciliation</div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 Reconciliation Benefits</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">🔍 GSTR-2A/2B Matching:</p>
                        <p className="text-white/90">Match your purchase records with supplier's uploaded invoices to claim only eligible ITC and avoid department scrutiny.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">⚠️ Mismatch Detection:</p>
                        <p className="text-white/90">Identify invoices missing in GSTR-2A, excess ITC claimed, or wrongly claimed credits before GST department notices them.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📋 GSTR-1 vs 3B Check:</p>
                        <p className="text-white/90">Ensure sales declared in GSTR-1 match with GSTR-3B to avoid demand notices and maintain credibility with tax authorities.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📊 Annual GSTR-9:</p>
                        <p className="text-white/90">Year-end reconciliation ensures all monthly returns tally with annual return, preventing last-minute chaos and penalties.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GST Return Filing Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'gst-return': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['gst-return'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-blue-700">📋 GST Return Filing</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Monthly, quarterly, and annual GST return filing with ITC management.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ GSTR-1 (Monthly/Quarterly)</div>
                      <div className="text-sm text-gray-600">✓ GSTR-3B (Monthly)</div>
                      <div className="text-sm text-gray-600">✓ GSTR-9 (Annual Return)</div>
                      <div className="text-sm text-gray-600">✓ GSTR-9C (Reconciliation Statement)</div>
                      <div className="text-sm text-gray-600">✓ ITC-04 (Input service distributor)</div>
                      <div className="text-sm text-gray-600">✓ Return filing with DSC/EVC</div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 Filing Benefits</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">📅 Timely Filing:</p>
                        <p className="text-white/90">We file all GST returns before deadlines to save you from late fees of ₹50-200/day and interest at 18% p.a.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📊 GSTR-1 Accuracy:</p>
                        <p className="text-white/90">Detailed outward supply statement with invoice-wise details ensuring your customers get proper ITC credit.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💰 GSTR-3B Optimization:</p>
                        <p className="text-white/90">Monthly summary return with optimized ITC claims, proper reversals, and accurate tax liability calculation.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📋 Annual Return:</p>
                        <p className="text-white/90">GSTR-9 and 9C preparation with complete reconciliation, ensuring all monthly data is accurately consolidated.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Tax Payment Card */}
              <div 
                className="relative h-[420px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCards({ 'digital-payment': true })}
                onMouseLeave={() => setFlippedCards({})}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards['digital-payment'] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute w-full h-full bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-blue-700">💳 Digital Tax Payment</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">More details</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                      Hassle-free online GST payment with challan generation.
                    </p>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">✓ GST PMT-06 challan generation</div>
                      <div className="text-sm text-gray-600">✓ CGST, SGST, IGST payment</div>
                      <div className="text-sm text-gray-600">✓ Interest & late fee payment</div>
                      <div className="text-sm text-gray-600">✓ Online payment through net banking</div>
                      <div className="text-sm text-gray-600">✓ Payment acknowledgment download</div>
                      <div className="text-sm text-gray-600">✓ Electronic cash ledger tracking</div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-xl"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl">💡 Payment Benefits</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">← Back</span>
                    </div>
                    <div className="space-y-3 text-sm overflow-y-auto h-[340px]">
                      <div>
                        <p className="font-semibold mb-1">💳 Easy Online Payment:</p>
                        <p className="text-white/90">Pay GST from comfort of your home/office through net banking. No need to visit banks or deal with paperwork.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📝 PMT-06 Challan:</p>
                        <p className="text-white/90">We generate correct challan with proper split of CGST/SGST/IGST, ensuring payment reflects in your electronic cash ledger.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">⚡ Instant Confirmation:</p>
                        <p className="text-white/90">Immediate payment acknowledgment and CIN generation for your records and future reference.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📊 Ledger Tracking:</p>
                        <p className="text-white/90">We track your electronic cash ledger ensuring payments are credited properly and utilized for return filing.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">💰 Interest & Late Fee:</p>
                        <p className="text-white/90">Accurate calculation and payment of interest and late fees if applicable, maintaining your compliance status.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Carousel Layout */}
            <div className="md:hidden overflow-x-auto pb-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-blue-700">📚 GST Bookkeeping</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    GST-compliant bookkeeping with ITC tracking and invoice management.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ Purchase & Sales register</div>
                    <div className="text-xs text-gray-600">✓ Input tax credit tracking</div>
                    <div className="text-xs text-gray-600">✓ HSN/SAC classification</div>
                    <div className="text-xs text-gray-600">✓ CGST, SGST, IGST bifurcation</div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-blue-700">🔄 GST Reconciliation</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Monthly reconciliation with GSTR-2A/2B and mismatch resolution.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ Books vs GSTR-2A/2B matching</div>
                    <div className="text-xs text-gray-600">✓ GSTR-1 vs GSTR-3B reconciliation</div>
                    <div className="text-xs text-gray-600">✓ ITC mismatch identification</div>
                    <div className="text-xs text-gray-600">✓ Monthly reconciliation report</div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-blue-700">📋 GST Return Filing</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Monthly, quarterly, and annual GST returns with proper ITC management.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ GSTR-1 (Monthly/Quarterly)</div>
                    <div className="text-xs text-gray-600">✓ GSTR-3B (Monthly)</div>
                    <div className="text-xs text-gray-600">✓ GSTR-9 (Annual Return)</div>
                    <div className="text-xs text-gray-600">✓ GSTR-9C (Reconciliation)</div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md" style={{ width: '320px' }}>
                  <h3 className="font-bold text-lg mb-3 text-blue-700">💳 Digital Tax Payment</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Online GST payment with challan generation and tracking.
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">✓ GST PMT-06 challan generation</div>
                    <div className="text-xs text-gray-600">✓ CGST, SGST, IGST payment</div>
                    <div className="text-xs text-gray-600">✓ Interest & late fee payment</div>
                    <div className="text-xs text-gray-600">✓ Payment acknowledgment download</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">← Swipe to see more →</p>
            </div>
          </div>

          {/* GST & Tax Compliance Image Section */}
          <div className="mb-16 relative fade-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="/Images/Taxations.jpg" 
                alt="GST and tax calculation services" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
                <div className="container max-w-2xl ml-8">
                  <h3 className="text-3xl font-bold text-white mb-4">GST & Tax Compliance Made Easy</h3>
                  <p className="text-white/90 text-lg mb-4">
                    Stay compliant with GST regulations and avoid penalties with our expert GST bookkeeping, reconciliation, and filing services.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                      <span className="font-bold">✓</span> GST Returns
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                      <span className="font-bold">✓</span> ITC Management
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                      <span className="font-bold">✓</span> Reconciliation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Benefits of Professional Accounting Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Accurate financial records for informed decision making</li>
              <li>✓ Complete compliance with accounting standards and tax laws</li>
              <li>✓ Better financial planning, budgeting, and cash flow management</li>
              <li>✓ Ready documentation for bank loans, audits, and funding</li>
              <li>✓ Tax optimization and ITC maximization opportunities</li>
              <li>✓ Professional reports for stakeholders and authorities</li>
              <li>✓ Timely GST and tax compliance to avoid penalties</li>
              <li>✓ Expert team handling your books with confidentiality</li>
            </ul>
          </div>

          <div className="text-center fade-on-scroll">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 transition-all duration-300 hover:scale-110 hover:shadow-2xl inline-block">Get Accounting Services</Link>
            <p className="text-sm text-gray-600 mt-4">Contact us for customized accounting packages and pricing</p>
          </div>
        </div>
      </section>
    </div>
  )
}
