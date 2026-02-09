import Link from 'next/link'

export default function TradersPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Traders & Investors</h1>
          <p className="text-xl">Master the market with expert guidance</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-sm text-gray-700">
              <strong>⚠ Disclaimer:</strong> Educational services only. Not SEBI-registered financial advisory.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Whether you're a beginner or experienced trader, we provide education, tools, and 
            psychological support to help you succeed in the markets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📚 Market Education</h3>
              <p className="text-gray-700">Comprehensive trading and investing courses</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🧠 Trading Psychology</h3>
              <p className="text-gray-700">Master your emotions for better results</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⚖️ Risk Management</h3>
              <p className="text-gray-700">Protect your capital and grow sustainably</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📊 Strategy Development</h3>
              <p className="text-gray-700">Build and test your trading systems</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Improve Your Trading</Link>
        </div>
      </section>
    </div>
  )
}
