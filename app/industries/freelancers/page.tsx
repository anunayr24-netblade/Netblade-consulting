import Link from 'next/link'

export default function FreelancersPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Freelancers & Consultants</h1>
          <p className="text-xl">Build your personal brand and attract premium clients</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Stand out from the competition with a professional online presence that showcases 
            your expertise and attracts high-value clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">💼 Portfolio Websites</h3>
              <p className="text-gray-700">Showcase your work and expertise</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🎯 Personal Branding</h3>
              <p className="text-gray-700">Build authority in your niche</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📱 LinkedIn Marketing</h3>
              <p className="text-gray-700">Network and generate leads</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">💰 Financial Planning</h3>
              <p className="text-gray-700">Manage your freelance finances</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Elevate Your Freelance Career</Link>
        </div>
      </section>
    </div>
  )
}
