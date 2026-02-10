import Link from 'next/link'

export default function TradersPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Professionals & Business Owners</h1>
          <p className="text-xl">Complete financial and compliance solutions for your business</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            Whether you're a business owner, financial professional, or entrepreneur, we provide 
            comprehensive support for registrations, compliance, accounting, and financial services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🏢 Business Registration</h3>
              <p className="text-gray-700">Complete registration and incorporation services</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📊 Accounting Services</h3>
              <p className="text-gray-700">Professional bookkeeping and financial statements</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⚖️ Compliance Management</h3>
              <p className="text-gray-700">Stay compliant with all regulatory requirements</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">💰 GST & Tax Filing</h3>
              <p className="text-gray-700">Complete GST and ITR filing assistance</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Get Financial Support</Link>
        </div>
      </section>
    </div>
  )
}