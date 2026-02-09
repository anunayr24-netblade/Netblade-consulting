import Link from 'next/link'

export default function BusinessWebsitePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80')" }}
        ></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Website Development Services</h1>
          <p className="text-xl drop-shadow-md">Build a Powerful Digital Presence That Works for Your Business</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Build a Powerful Online Presence</h2>
            <p className="text-lg text-gray-700 mb-4">
              In today&apos;s digital-first world, your website is more than just an online address — it is your 
              brand identity, sales engine, and credibility builder.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              At Netblade Consulting, we design and develop high-performance, secure, and conversion-focused 
              websites tailored to your business goals.
            </p>
            <p className="text-lg text-gray-700">
              Whether you&apos;re a startup, real estate professional, consultant, or growing business, we create 
              websites that are fast, responsive, and built to scale.
            </p>
          </div>

          {/* Services Offered */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">🚀 Our Website Development Solutions</h3>
            
            <div className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">✅ Business & Corporate Websites</h4>
              <p className="text-gray-700 mb-3">
                Professional websites designed to establish trust, showcase services, and generate inquiries.
              </p>
              <p className="font-semibold mb-2">Ideal for:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 ml-4">
                <li>Companies & startups</li>
                <li>Consultants & service providers</li>
                <li>Local businesses</li>
              </ul>
              <p className="font-semibold mb-2">Features:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Clean & modern UI</li>
                <li>Mobile & tablet responsive</li>
                <li>SEO-ready structure</li>
                <li>Contact & lead forms</li>
              </ul>
            </div>

            <div className="mb-8 bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">✅ Real Estate Websites</h4>
              <p className="text-gray-700 mb-3">
                Property listing websites with advanced search, filters, and lead capture systems.
              </p>
              <p className="font-semibold mb-2">Ideal for:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 ml-4">
                <li>Real estate agents & brokers</li>
                <li>Property developers</li>
                <li>Rental & leasing businesses</li>
              </ul>
              <p className="font-semibold mb-2">Features:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Property listing management</li>
                <li>Search & filter functionality</li>
                <li>Lead capture forms</li>
                <li>Image galleries & virtual tours</li>
              </ul>
            </div>

            <div className="mb-8 bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">✅ WordPress Development</h4>
              <p className="text-gray-700 mb-3">
                Flexible, easy-to-manage websites using the world&apos;s most popular CMS platform.
              </p>
              <p className="font-semibold mb-2">Ideal for:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 ml-4">
                <li>Blogs & content sites</li>
                <li>E-commerce stores</li>
                <li>Business websites with frequent updates</li>
              </ul>
              <p className="font-semibold mb-2">Features:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>User-friendly admin panel</li>
                <li>Custom theme development</li>
                <li>Plugin integration</li>
                <li>Regular updates & maintenance</li>
              </ul>
            </div>

            <div className="mb-8 bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">✅ Static & Dynamic Websites</h4>
              <p className="text-gray-700 mb-3">
                Choose between lightning-fast static sites or feature-rich database-driven dynamic websites.
              </p>
              <p className="font-semibold mb-2">Ideal for:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 ml-4">
                <li>Portfolio & brochure websites (Static)</li>
                <li>Web applications & portals (Dynamic)</li>
                <li>E-commerce & membership sites (Dynamic)</li>
              </ul>
              <p className="font-semibold mb-2">Features:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Optimized performance</li>
                <li>Scalable architecture</li>
                <li>Database integration (Dynamic)</li>
                <li>API integration capabilities</li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-6">What You Get</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Mobile-Responsive Design</h4>
                  <p className="text-gray-700 text-sm">Perfect display on all devices and screen sizes</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">SEO-Friendly Structure</h4>
                  <p className="text-gray-700 text-sm">Built to rank well on search engines</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Fast Loading Speed</h4>
                  <p className="text-gray-700 text-sm">Optimized performance for better user experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Secure & Reliable</h4>
                  <p className="text-gray-700 text-sm">SSL certificates and security best practices</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Easy Content Management</h4>
                  <p className="text-gray-700 text-sm">Update your content without technical knowledge</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Analytics Integration</h4>
                  <p className="text-gray-700 text-sm">Track visitor behavior and measure success</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Contact Forms & CTAs</h4>
                  <p className="text-gray-700 text-sm">Capture leads and engage with visitors</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <div>
                  <h4 className="font-semibold">Social Media Integration</h4>
                  <p className="text-gray-700 text-sm">Connect with your audience on all platforms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center">
                <p className="font-semibold">React.js</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center">
                <p className="font-semibold">Next.js</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center">
                <p className="font-semibold">WordPress</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center">
                <p className="font-semibold">Node.js</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center">
                <p className="font-semibold">HTML5/CSS3</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center">
                <p className="font-semibold">Tailwind CSS</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center">
                <p className="font-semibold">MongoDB</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center">
                <p className="font-semibold">MySQL</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Our Development Process</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">1</div>
                <div>
                  <h4 className="font-bold">Discovery & Planning</h4>
                  <p className="text-gray-700">Understanding your goals, audience, and requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">2</div>
                <div>
                  <h4 className="font-bold">Design & Prototyping</h4>
                  <p className="text-gray-700">Creating visual designs and interactive prototypes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">3</div>
                <div>
                  <h4 className="font-bold">Development & Testing</h4>
                  <p className="text-gray-700">Building your website with clean, maintainable code</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">4</div>
                <div>
                  <h4 className="font-bold">Launch & Support</h4>
                  <p className="text-gray-700">Deploying your site and providing ongoing maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Business Website?</h2>
          <p className="text-xl mb-8">Let's create a powerful online presence for your business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Get Started Today
            </Link>
            <Link href="/contact#quote" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
