import Link from 'next/link'

export default function ContentMarketingPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Content Marketing</h1>
          <p className="text-xl">Attract, engage, and convert with valuable content</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Content is king, but strategy is queen. We create compelling, SEO-optimized content 
            that educates your audience, builds trust, and drives conversions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📝 Blog Writing</h3>
              <p className="text-gray-700">Informative articles that rank on Google and engage readers</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📄 Website Copy</h3>
              <p className="text-gray-700">Persuasive copy that converts visitors into customers</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📧 Email Marketing</h3>
              <p className="text-gray-700">Nurture leads with targeted email campaigns</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📱 Social Content</h3>
              <p className="text-gray-700">Engaging posts for all social platforms</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📹 Video Scripts</h3>
              <p className="text-gray-700">Compelling scripts for video content</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📊 Infographics</h3>
              <p className="text-gray-700">Visual content that simplifies complex information</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Start Content Marketing</Link>
        </div>
      </section>
    </div>
  )
}
