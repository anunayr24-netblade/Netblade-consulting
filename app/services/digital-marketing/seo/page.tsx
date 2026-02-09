import Link from 'next/link'

export default function SEOPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=1920&q=80')" }}
        ></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Search Engine Optimization (SEO)</h1>
          <p className="text-xl drop-shadow-md">Rank higher on Google and drive organic traffic to your website</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            SEO is not just about rankings – it's about connecting with your target audience when 
            they're actively searching for your products or services. Our data-driven SEO strategies 
            deliver sustainable, long-term results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🔍 Keyword Research</h3>
              <p className="text-gray-700">Target the right keywords your customers are searching for</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⚙️ On-Page SEO</h3>
              <p className="text-gray-700">Optimize content, meta tags, and site structure</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🔗 Link Building</h3>
              <p className="text-gray-700">Build authority with high-quality backlinks</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📝 Content Strategy</h3>
              <p className="text-gray-700">Create SEO-optimized content that ranks and converts</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🏪 Local SEO</h3>
              <p className="text-gray-700">Dominate local search results in your area</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📊 Analytics & Reporting</h3>
              <p className="text-gray-700">Track rankings, traffic, and conversions</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-4">Our SEO Process</h3>
            <div className="space-y-3">
              <p className="text-gray-700">✓ <strong>Audit:</strong> Comprehensive analysis of your current SEO performance</p>
              <p className="text-gray-700">✓ <strong>Strategy:</strong> Custom SEO roadmap based on your goals</p>
              <p className="text-gray-700">✓ <strong>Implementation:</strong> On-page and off-page optimization</p>
              <p className="text-gray-700">✓ <strong>Monitoring:</strong> Continuous tracking and refinement</p>
              <p className="text-gray-700">✓ <strong>Reporting:</strong> Monthly reports with actionable insights</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Boost Your Rankings</Link>
        </div>
      </section>
    </div>
  )
}
