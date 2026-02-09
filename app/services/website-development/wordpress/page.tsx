import Link from 'next/link'

export default function WordPressPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WordPress Website Development</h1>
          <p className="text-xl">Powerful, flexible websites with the world's most popular CMS</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            WordPress powers over 40% of the web. We create custom WordPress websites that are 
            easy to manage, highly functional, and built to grow with your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Custom Theme Development</h3>
              <p className="text-gray-700">Unique designs tailored to your brand, not generic templates</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Plugin Development</h3>
              <p className="text-gray-700">Custom functionality to meet your specific needs</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">E-Commerce (WooCommerce)</h3>
              <p className="text-gray-700">Full-featured online stores with secure payments</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Migration & Optimization</h3>
              <p className="text-gray-700">Move your existing site to WordPress or improve performance</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Start Your WordPress Project</Link>
        </div>
      </section>
    </div>
  )
}
