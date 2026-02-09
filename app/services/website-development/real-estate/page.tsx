import Link from 'next/link'

export default function RealEstateWebsitePage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Estate Website Development</h1>
          <p className="text-xl">Showcase properties and attract buyers with stunning real estate websites</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Stand out in the competitive real estate market with a professionally designed website 
            that showcases your properties beautifully and generates quality leads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🏘️ Property Listings</h3>
              <p className="text-gray-700">Advanced search and filter options for properties</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📸 Virtual Tours</h3>
              <p className="text-gray-700">360° property views and video walkthroughs</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📱 Mobile-First Design</h3>
              <p className="text-gray-700">Perfect viewing experience on all devices</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📍 Map Integration</h3>
              <p className="text-gray-700">Location-based search and property mapping</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📊 Lead Management</h3>
              <p className="text-gray-700">Capture and track potential buyers</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">💬 Inquiry Forms</h3>
              <p className="text-gray-700">Easy communication with potential clients</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Get Your Real Estate Website</Link>
        </div>
      </section>
    </div>
  )
}
