import Link from 'next/link'

export default function WhyChooseUsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Netblade Consulting?</h1>
          <p className="text-xl">Your success partner for technology, marketing, and financial growth</p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">We're not just another consulting firm – we're your growth partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">One-Stop Solution</h3>
              <p className="text-gray-700 mb-4">
                Why juggle multiple vendors when you can have everything under one roof? From website 
                development to digital marketing to financial services – we've got you covered.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Unified strategy across all services</li>
                <li>✓ Single point of contact</li>
                <li>✓ Seamless integration</li>
                <li>✓ Cost-effective bundled solutions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Data-Driven Approach</h3>
              <p className="text-gray-700 mb-4">
                We don't believe in guesswork. Every decision we make is backed by solid data, 
                analytics, and proven strategies that deliver measurable results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Comprehensive analytics tracking</li>
                <li>✓ Regular performance reports</li>
                <li>✓ ROI-focused strategies</li>
                <li>✓ Compliance and best practices</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">Affordable & Scalable</h3>
              <p className="text-gray-700 mb-4">
                Quality doesn't have to break the bank. Our transparent pricing and scalable 
                solutions grow with your business, ensuring you get value at every stage.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Transparent pricing structure</li>
                <li>✓ Flexible packages</li>
                <li>✓ No hidden costs</li>
                <li>✓ Scale up or down as needed</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4">Personalized Strategies</h3>
              <p className="text-gray-700 mb-4">
                Cookie-cutter solutions don't work. We take the time to understand your unique 
                needs and create custom strategies that align perfectly with your goals.
               </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Customized solutions</li>
                <li>✓ Industry-specific expertise</li>
                <li>✓ Dedicated account management</li>
                <li>✓ Flexible engagement models</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">More Reasons to Choose Us</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="text-3xl mr-4">🤝</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Honest Consulting</h3>
                <p className="text-gray-700">
                  No false promises or overhyped claims. We set realistic expectations and deliver on our commitments. 
                  Your trust is our most valuable asset.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="text-3xl mr-4">🚀</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-700">
                  We've helped numerous businesses achieve their digital and financial goals. Our portfolio 
                  speaks to our expertise and commitment to excellence.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="text-3xl mr-4">💡</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                <p className="text-gray-700">
                  Our team brings deep knowledge across multiple domains – technology, marketing, and finance. 
                  This multi-disciplinary expertise translates to better outcomes for you.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="text-3xl mr-4">🔒</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Security & Compliance</h3>
                <p className="text-gray-700">
                  Your data security and regulatory compliance are our top priorities. We follow industry 
                  best practices and maintain the highest standards of security.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="text-3xl mr-4">📞</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Responsive Support</h3>
                <p className="text-gray-700">
                  Questions? Need help? Our support team is always ready to assist you. We respond quickly 
                  and resolve issues efficiently.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="text-3xl mr-4">🌱</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Long-Term Partnership</h3>
                <p className="text-gray-700">
                  We're not interested in one-time projects. We build lasting relationships and become 
                  a trusted advisor for your business growth journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8">Join hundreds of satisfied clients who trust Netblade Consulting</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Start Your Journey Today
            </Link>
            <Link href="/contact#quote" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
