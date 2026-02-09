import Link from 'next/link'

export default function SocialMediaPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Social Media Marketing</h1>
          <p className="text-xl">Build your brand and engage with your audience on social platforms</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Social media isn't just about posting – it's about building relationships, creating 
            communities, and driving real business results. We create engaging social media 
            strategies that connect with your audience and grow your brand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📘 Facebook Marketing</h3>
              <p className="text-gray-700">Reach and engage your target audience on the world's largest social network</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📸 Instagram Marketing</h3>
              <p className="text-gray-700">Visual storytelling and influencer partnerships</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">🔗 LinkedIn Marketing</h3>
              <p className="text-gray-700">B2B lead generation and professional networking</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📺 YouTube Marketing</h3>
              <p className="text-gray-700">Video content strategy and channel growth</p>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-xl mb-12">
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

          <Link href="/contact" className="btn-primary">Grow Your Social Presence</Link>
        </div>
      </section>
    </div>
  )
}
