import Link from 'next/link'

export default function WebsiteRedesignPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Website Redesign & Maintenance</h1>
          <p className="text-xl">Modernize your website for better performance and user experience</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Is Your Website Holding You Back?</h2>
          <p className="text-lg text-gray-700 mb-8">
            If your website is outdated, slow, or not converting visitors, it's time for a redesign. 
            We'll transform your website into a modern, high-performing digital asset.
          </p>

         <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-12">
            <h3 className="font-bold text-lg mb-2">Signs You Need a Website Redesign:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Your website looks outdated or unprofessional</li>
              <li>✓ It's not mobile-friendly</li>
              <li>✓ Loading speed is slow</li>
              <li>✓ Poor search engine rankings</li>
              <li>✓ Low conversion rates</li>
              <li>✓ Difficult to update content</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Complete Redesign</h3>
              <p className="text-gray-700">Full visual and functional overhaul of your existing website</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Performance Optimization</h3>
              <p className="text-gray-700">Speed improvements and technical enhancements</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Ongoing Maintenance</h3>
              <p className="text-gray-700">Regular updates, backups, and security monitoring</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Content Updates</h3>
              <p className="text-gray-700">Keep your site fresh with regular content changes</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Discuss Your Redesign</Link>
        </div>
      </section>
    </div>
  )
}
