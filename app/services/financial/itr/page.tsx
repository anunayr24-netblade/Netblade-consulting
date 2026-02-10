'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function ITRPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ returns: 0, clients: 0, refunds: 0, experience: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    { name: "Vikram Desai", business: "Software Professional", text: "Smooth ITR filing with maximum tax savings! Got ₹45,000 refund processed in 3 weeks." },
    { name: "Anjali Shah", business: "Freelance Designer", text: "They handled my ITR-3 and TDS returns perfectly. No more confusion about tax compliance!" },
    { name: "Rohit Malhotra", business: "Business Owner", text: "Expert team helped me respond to IT notice and saved me from a big penalty. Highly recommended!" },
    { name: "Meera Iyer", business: "Real Estate Agent", text: "Professional service for capital gains ITR. Made the complex filing process so simple!" }
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
      returns: 3000 / steps,
      clients: 1200 / steps,
      refunds: 150 / steps,
      experience: 10 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        returns: Math.min(Math.floor(increment.returns * step), 3000),
        clients: Math.min(Math.floor(increment.clients * step), 1200),
        refunds: Math.min(Math.floor(increment.refunds * step), 150),
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
            ITR Filing Services
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-blue-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Income Tax Return filing made simple
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ All ITR Forms</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Maximum Refunds</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Notice Handling</span>
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
              <div className="text-5xl font-bold mb-2">{counters.returns}+</div>
              <div className="text-blue-100 text-lg">ITRs Filed</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.clients}+</div>
              <div className="text-blue-100 text-lg">Happy Taxpayers</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">₹{counters.refunds}Cr+</div>
              <div className="text-blue-100 text-lg">Refunds Processed</div>
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
            Comprehensive Income Tax Return filing services for individuals, professionals, and businesses. 
            We handle all types of ITR forms, advance tax, notices, corrections, and compliance requirements.
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

          {/* ITR Filing Services */}
          <div className="mb-16 fade-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">ITR Filing Services</h2>
            
            <div className="space-y-8">
              {/* ITR-1 to ITR-4 */}
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-purple-700">📄 ITR-1, ITR-2, ITR-3, ITR-4 Filing</h3>
                <p className="text-gray-700 mb-3">
                  Complete Income Tax Return filing for salaried individuals, professionals, business owners, and presumptive taxation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ ITR-1 (Sahaj) - Salary & Pension income</div>
                  <div className="text-sm text-gray-600">✓ ITR-2 - Capital gains, multiple properties</div>
                  <div className="text-sm text-gray-600">✓ ITR-3 - Professional & Business income</div>
                  <div className="text-sm text-gray-600">✓ ITR-4 (Sugam) - Presumptive taxation</div>
                  <div className="text-sm text-gray-600">✓ Tax computation & optimization</div>
                  <div className="text-sm text-gray-600">✓ Form 26AS reconciliation</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  E-filing with digital signature and acknowledgment receipt
                </p>
              </div>

              {/* ITR-5 */}
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-purple-700">🏢 ITR-5 Filing</h3>
                <p className="text-gray-700 mb-3">
                  Income Tax Return filing for Firms, LLPs, AOPs (Association of Persons), BOI (Body of Individuals), and Trusts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Partnership Firms</div>
                  <div className="text-sm text-gray-600">✓ Limited Liability Partnerships (LLP)</div>
                  <div className="text-sm text-gray-600">✓ Association of Persons (AOP)</div>
                  <div className="text-sm text-gray-600">✓ Body of Individuals (BOI)</div>
                  <div className="text-sm text-gray-600">✓ Trusts & Co-operative Societies</div>
                  <div className="text-sm text-gray-600">✓ Balance Sheet & P&L preparation</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Complete audit report filing if turnover exceeds prescribed limits
                </p>
              </div>

              {/* ITR Form 10E */}
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-purple-700">📋 ITR Form 10E Filing</h3>
                <p className="text-gray-700 mb-3">
                  Claim relief under Section 89(1) for arrears or advance salary, gratuity, commuted pension, and other one-time receipts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Salary arrears relief</div>
                  <div className="text-sm text-gray-600">✓ Advance salary adjustment</div>
                  <div className="text-sm text-gray-600">✓ Gratuity & pension relief</div>
                  <div className="text-sm text-gray-600">✓ Tax calculation for multiple years</div>
                  <div className="text-sm text-gray-600">✓ Form 10E preparation & filing</div>
                  <div className="text-sm text-gray-600">✓ Maximum tax savings on arrears</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Reduce tax burden on one-time receipts by spreading over multiple years
                </p>
              </div>

              {/* CA Certification */}
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-purple-700">✅ CA Certification of ITR</h3>
                <p className="text-gray-700 mb-3">
                  Get your Income Tax Return certified by a Chartered Accountant for visa applications, loans, tenders, and official purposes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ ITR Acknowledgment Certification</div>
                  <div className="text-sm text-gray-600">✓ Income Certification</div>
                  <div className="text-sm text-gray-600">✓ CA Signed & Stamped Certificate</div>
                  <div className="text-sm text-gray-600">✓ For Visa Applications</div>
                  <div className="text-sm text-gray-600">✓ For Bank Loan Processing</div>
                  <div className="text-sm text-gray-600">✓ For Government Tenders</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Official CA certification accepted by banks, embassies, and govt departments
                </p>
              </div>
            </div>
          </div>

          {/* Tax Compliance & Returns */}
          <div className="mb-16 fade-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">Tax Compliance & Returns</h2>
            
            <div className="space-y-8">
              {/* Advance Tax */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">💰 Advance Tax Payment</h3>
                <p className="text-gray-700 mb-3">
                  Calculate and pay advance tax in quarterly installments if tax liability exceeds ₹10,000 per year - avoid interest under Sections 234B & 234C.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Advance tax calculation</div>
                  <div className="text-sm text-gray-600">✓ Quarterly installment planning</div>
                  <div className="text-sm text-gray-600">✓ 15% by June 15</div>
                  <div className="text-sm text-gray-600">✓ 45% by Sept 15</div>
                  <div className="text-sm text-gray-600">✓ 75% by Dec 15</div>
                  <div className="text-sm text-gray-600">✓ 100% by March 15</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Mandatory for self-employed, business owners, and professionals with high income
                </p>
              </div>

              {/* TDS Challan */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">🧾 TDS Challan & Payment</h3>
                <p className="text-gray-700 mb-3">
                  TDS (Tax Deducted at Source) challan preparation and payment for businesses deducting tax on payments to contractors, professionals, and employees.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Challan 281 preparation</div>
                  <div className="text-sm text-gray-600">✓ Online TDS payment</div>
                  <div className="text-sm text-gray-600">✓ TDS on salary, rent, professional fees</div>
                  <div className="text-sm text-gray-600">✓ TDS rate determination</div>
                  <div className="text-sm text-gray-600">✓ Challan acknowledgment download</div>
                  <div className="text-sm text-gray-600">✓ Correction of challan details</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Monthly/quarterly TDS payment assistance to avoid penalties
                </p>
              </div>

              {/* TDS Return */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-green-700">📊 TDS Return Filing</h3>
                <p className="text-gray-700 mb-3">
                  Quarterly TDS return filing in Form 24Q, 26Q, 27Q, and 27EQ for businesses and deductors with complete Form 16/16A generation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Form 24Q - TDS on Salary</div>
                  <div className="text-sm text-gray-600">✓ Form 26Q - TDS on Payments (non-salary)</div>
                  <div className="text-sm text-gray-600">✓ Form 27Q - TDS on NRI payments</div>
                  <div className="text-sm text-gray-600">✓ Form 27EQ - TCS Return</div>
                  <div className="text-sm text-gray-600">✓ Form 16/16A generation</div>
                  <div className="text-sm text-gray-600">✓ Correction statements filing</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Due dates: Q1-Jul 31, Q2-Oct 31, Q3-Jan 31, Q4-May 31
                </p>
              </div>
            </div>
          </div>

          {/* ITR Corrections & Notices */}
          <div className="mb-16 fade-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-purple-700">ITR Corrections & Notice Response</h2>
            
            <div className="space-y-8">
              {/* ITR Correction */}
              <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-orange-700">🔧 ITR Correction / Revised Return</h3>
                <p className="text-gray-700 mb-3">
                  Made a mistake in your filed ITR? File revised return under Section 139(5) to correct errors, omissions, or update income details.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Revised ITR filing (before assessment)</div>
                  <div className="text-sm text-gray-600">✓ Updated Return filing (after due date)</div>
                  <div className="text-sm text-gray-600">✓ Correction of income details</div>
                  <div className="text-sm text-gray-600">✓ Addition of missed deductions</div>
                  <div className="text-sm text-gray-600">✓ Bank account update</div>
                  <div className="text-sm text-gray-600">✓ Form 26AS mismatch correction</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Can be filed within assessment year-end or before completion of assessment
                </p>
              </div>

              {/* Notice Response */}
              <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-orange-700">⚠️ ITR Notice Response</h3>
                <p className="text-gray-700 mb-3">
                  Received an income tax notice? We help you respond to all types of IT department notices with proper documentation and clarifications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ Section 139(9) - Defective Return</div>
                  <div className="text-sm text-gray-600">✓ Section 143(1) - Intimation</div>
                  <div className="text-sm text-gray-600">✓ Section 143(2) - Scrutiny Notice</div>
                  <div className="text-sm text-gray-600">✓ Section 142(1) - Additional Info</div>
                  <div className="text-sm text-gray-600">✓ Section 148 - Reassessment Notice</div>
                  <div className="text-sm text-gray-600">✓ Demand notice response & appeal</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Expert assistance to handle notices and minimize tax liability
                </p>
              </div>

              {/* PAN-Aadhar Link */}
              <div className="bg-white border-l-4 border-orange-600 p-6 rounded-lg shadow-md card-glow">
                <h3 className="font-bold text-xl mb-3 text-orange-700">🔗 PAN Card & Aadhar Card Linking</h3>
                <p className="text-gray-700 mb-3">
                  Link your PAN card with Aadhar card - mandatory as per Income Tax Department. Avoid PAN becoming inoperative.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600">✓ PAN-Aadhar linking assistance</div>
                  <div className="text-sm text-gray-600">✓ Online linking through IT portal</div>
                  <div className="text-sm text-gray-600">✓ SMS-based linking support</div>
                  <div className="text-sm text-gray-600">✓ Address/name mismatch resolution</div>
                  <div className="text-sm text-gray-600">✓ PAN correction/update</div>
                  <div className="text-sm text-gray-600">✓ Verification & status check</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Mandatory linking to file ITR and avoid PAN deactivation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our ITR Services?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Expert tax professionals with years of experience</li>
              <li>✓ Maximum tax savings through legitimate deductions</li>
              <li>✓ Complete documentation and record maintenance</li>
              <li>✓ Timely filing to avoid penalties and interest</li>
              <li>✓ Notice handling and assessment support</li>
              <li>✓ Transparent pricing with no hidden charges</li>
              <li>✓ Data security and confidentiality maintained</li>
              <li>✓ Quick turnaround time with regular updates</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">Get ITR Filing Help</Link>
            <p className="text-sm text-gray-600 mt-4">Contact us for free consultation and service quote</p>
          </div>
        </div>
      </section>
    </div>
  )
}
