import Link from 'next/link'

export default function GoogleAdsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Google Ads & Paid Campaigns</h1>
          <p className="text-xl">Drive immediate results with targeted paid advertising</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Get your business in front of potential customers at the exact moment they're searching 
            for your products or services. Our Google Ads experts create and manage campaigns that 
            deliver maximum ROI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🔍 Search Ads</h3>
              <p className="text-gray-700">Appear at the top of Google search results</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📱 Display Ads</h3>
              <p className="text-gray-700">Visual ads across Google's network</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🛍️ Shopping Ads</h3>
              <p className="text-gray-700">Showcase your products with images and prices</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📺 Video Ads</h3>
              <p className="text-gray-700">YouTube advertising campaigns</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🔄 Remarketing</h3>
              <p className="text-gray-700">Re-engage visitors who didn't convert</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📍 Local Ads</h3>
              <p className="text-gray-700">Target customers in your area</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our PPC Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-700">✓ Google Ads certified experts</p>
              <p className="text-gray-700">✓ Data-driven campaign optimization</p>
              <p className="text-gray-700">✓ Transparent reporting and ROI tracking</p>
              <p className="text-gray-700">✓ Continuous A/B testing</p>
              <p className="text-gray-700">✓ Budget optimization</p>
              <p className="text-gray-700">✓ Landing page recommendations</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Start Your Campaign</Link>
        </div>
      </section>
    </div>
  )
}
