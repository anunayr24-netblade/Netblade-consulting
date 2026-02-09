import Link from 'next/link'

export default function GSTRegistrationPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')" }}
        ></div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">GST Registration & Guidance</h1>
          <p className="text-xl drop-shadow-md">Simplified GST compliance for your business</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Navigate GST registration and compliance with ease. We provide guidance and support to 
            help your business stay compliant with tax regulations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📝 GST Registration</h3>
              <p className="text-gray-700">Complete assistance with GST registration process</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📊 Return Filing Support</h3>
              <p className="text-gray-700">Guidance on GSTR-1, GSTR-3B, and other returns</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⚖️ Compliance Guidance</h3>
              <p className="text-gray-700">Understanding GST rules and regulations</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">💡 Advisory Support</h3>
              <p className="text-gray-700">GST-related queries and consultation</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-4">Who Needs GST Registration?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for services)</li>
              <li>✓ E-commerce sellers</li>
              <li>✓ Inter-state suppliers</li>
              <li>✓ Businesses required to collect GST</li>
            </ul>
          </div>

          <Link href="/contact" className="btn-primary">Get GST Assistance</Link>
        </div>
      </section>
    </div>
  )
}
