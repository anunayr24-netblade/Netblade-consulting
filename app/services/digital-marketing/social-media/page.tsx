'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function SocialMediaPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [counters, setCounters] = useState({ posts: 0, engagement: 0, followers: 0, brands: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    { name: "Arjun Malhotra", business: "Fashion Brand", text: "Our Instagram following grew from 2K to 50K in 6 months! Engagement is at all-time high." },
    { name: "Sonal Prabhu", business: "Restaurant Chain", text: "Social media campaigns fill our tables every weekend. Amazing content and strategy!" },
    { name: "Varun Khanna", business: "Fitness Studio", text: "Facebook and Instagram ads brought us 200+ new members. Best ROI ever!" },
    { name: "Ritu Sharma", business: "Beauty Salon", text: "Daily posts keep our customers engaged. Bookings increased by 300%!" }
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
      posts: 10000 / steps,
      engagement: 400 / steps,
      followers: 500 / steps,
      brands: 180 / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters({
        posts: Math.min(Math.floor(increment.posts * step), 10000),
        engagement: Math.min(Math.floor(increment.engagement * step), 400),
        followers: Math.min(Math.floor(increment.followers * step), 500),
        brands: Math.min(Math.floor(increment.brands * step), 180)
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
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-green-900 to-green-700"></div>
        <div className="absolute inset-0 gradient-animated opacity-85"></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white animate-fade-in">
            Social Media Marketing
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-xl text-green-100 font-medium animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Build your brand and engage with your audience on social platforms
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Facebook</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ Instagram</span>
            </div>
            <div className="badge-float bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-110">
              <span className="font-semibold text-white">✓ LinkedIn</span>
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
              <div className="text-5xl font-bold mb-2">{counters.posts}+</div>
              <div className="text-green-100 text-lg">Posts Created</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">{counters.engagement}%</div>
              <div className="text-green-100 text-lg">Engagement Growth</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">{counters.followers}K+</div>
              <div className="text-green-100 text-lg">Followers Gained</div>
            </div>
            <div className="fade-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-2">{counters.brands}+</div>
              <div className="text-green-100 text-lg">Brands Managed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-12 fade-on-scroll">
            Social media isn&apos;t just about posting – it&apos;s about building relationships, creating 
            communities, and driving real business results. We create engaging social media 
            strategies that connect with your audience and grow your brand.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 fade-on-scroll">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg card-hover">
              <h3 className="text-xl font-bold mb-3">📘 Facebook Marketing</h3>
              <p className="text-gray-700">Reach and engage your target audience on the world&apos;s largest social network</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg card-hover">
              <h3 className="text-xl font-bold mb-3">📸 Instagram Marketing</h3>
              <p className="text-gray-700">Visual storytelling and influencer partnerships</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg card-hover">
              <h3 className="text-xl font-bold mb-3">🔗 LinkedIn Marketing</h3>
              <p className="text-gray-700">B2B lead generation and professional networking</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg card-hover">
              <h3 className="text-xl font-bold mb-3">📺 YouTube Marketing</h3>
              <p className="text-gray-700">Video content strategy and channel growth</p>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-xl mb-12 fade-on-scroll">
            <h3 className="text-2xl font-bold mb-4">What We Do:</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Social media strategy development</li>
              <li>✓ Content creation and scheduling</li>
              <li>✓ Community management and engagement</li>
              <li>✓ Paid social advertising campaigns</li>
              <li>✓ Influencer partnerships</li>
              <li>✓ Analytics and performance reporting</li>
            </ul>
          </div>

          <div className="text-center fade-on-scroll">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 transition-all duration-300 hover:scale-110 hover:shadow-2xl inline-block">Grow Your Social Presence</Link>
            <p className="text-sm text-gray-600 mt-4">Contact us for a free social media strategy consultation</p>
          </div>
        </div>
      </section>
    </div>
  )
}
