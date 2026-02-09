import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')" }}
        ></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">About Netblade Consulting</h1>
          <p className="text-xl drop-shadow-md">Building bridges between technology, marketing, and financial success</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              Netblade Consulting is a comprehensive consulting firm that brings together expertise in 
              Website Development, Digital Marketing, and Financial Services. We understand that modern 
              businesses need more than just one solution – they need an integrated approach that combines 
              technology, marketing prowess, and financial wisdom.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Founded with the vision of helping businesses and individuals thrive in the digital economy, 
              we've built a team of experts who are passionate about delivering results. Whether you're 
              launching a startup, scaling an existing business, or seeking financial guidance, we're here 
              to guide you every step of the way.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Integrated Approach</h3>
                <p className="text-gray-700">
                  Unlike agencies that specialize in just one area, we offer a complete ecosystem of services. 
                  Your website, marketing, and finances work together seamlessly.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-900">Transparent Communication</h3>
                <p className="text-gray-700">
                  We believe in honest, clear communication. No jargon, no false promises – just 
                  straightforward advice and realistic expectations.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-900">Results-Driven</h3>
                <p className="text-gray-700">
                  Every strategy we implement is measured, analyzed, and optimized for maximum ROI. 
                  Your success is our success.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-orange-900">Long-Term Partnerships</h3>
                <p className="text-gray-700">
                  We don't just complete projects and disappear. We build lasting relationships and 
                  grow alongside your business.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">🎯 Excellence</h3>
                <p className="text-gray-700">Delivering high-quality work in everything we do</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">🤝 Integrity</h3>
                <p className="text-gray-700">Operating with honesty and transparency</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">💡 Innovation</h3>
                <p className="text-gray-700">Staying ahead with cutting-edge solutions</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">📈 Growth</h3>
                <p className="text-gray-700">Focused on sustainable, measurable results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">Let's discuss how we can help your business grow</p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
