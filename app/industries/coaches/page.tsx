import Link from 'next/link'

export default function CoachesPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Coaches & Educators</h1>
          <p className="text-xl">Expand your reach and impact more lives</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Build your personal brand, attract more students, and deliver your courses online 
            with professional websites and marketing strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">🎓 Course Websites</h3>
              <p className="text-gray-700">Launch your online courses</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">📱 Social Media</h3>
              <p className="text-gray-700">Build your audience online</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">📧 Email Marketing</h3>
              <p className="text-gray-700">Nurture and convert leads</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Grow Your Coaching Business</Link>
        </div>
      </section>
    </div>
  )
}
