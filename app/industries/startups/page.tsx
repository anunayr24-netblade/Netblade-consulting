import Link from 'next/link'

export default function StartupsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions for Startups & Small Businesses</h1>
          <p className="text-xl">Launch and scale your business with confidence</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Starting a business is challenging. We provide the digital infrastructure, marketing 
            expertise, and financial guidance you need to succeed from day one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🚀 Startup Websites</h3>
              <p className="text-gray-700">Fast, affordable websites to establish your online presence</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">📱 Digital Marketing</h3>
              <p className="text-gray-700">Reach your target audience and generate leads</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">💼 Business Planning</h3>
              <p className="text-gray-700">Financial structuring and planning support</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">📊 Analytics Setup</h3>
              <p className="text-gray-700">Track metrics that matter for growth</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Start Your Journey</Link>
        </div>
      </section>
    </div>
  )
}
