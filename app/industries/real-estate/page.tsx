import Link from 'next/link'

export default function RealEstatePage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Estate Professionals</h1>
          <p className="text-xl">Showcase properties and attract buyers online</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Stand out in the competitive real estate market with professional websites, targeted 
            marketing, and effective lead generation strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">🏘️ Property Websites</h3>
              <p className="text-gray-700">Beautiful listings with advanced search</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">📱 Local SEO</h3>
              <p className="text-gray-700">Rank for local property searches</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">📧 Lead Generation</h3>
              <p className="text-gray-700">Capture and nurture buyer leads</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Grow Your Real Estate Business</Link>
        </div>
      </section>
    </div>
  )
}
