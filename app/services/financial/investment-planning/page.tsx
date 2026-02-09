import Link from 'next/link'

export default function InvestmentPlanningPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Planning Support</h1>
          <p className="text-xl">Build a solid investment strategy for your financial goals</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-sm text-gray-700">
              <strong>⚠ Disclaimer:</strong> This is educational support only, not SEBI-registered investment advisory. 
              All investment decisions remain your responsibility.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            We provide basic guidance and education to help you understand different investment 
            options and develop a strategy aligned with your financial goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">🎯 Goal Setting</h3>
              <p className="text-gray-700">Define clear financial objectives</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">📊 Asset Allocation</h3>
              <p className="text-gray-700">Diversify across asset classes</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">💼 Portfolio Review</h3>
              <p className="text-gray-700">Assess your investment portfolio</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Get Investment Guidance</Link>
        </div>
      </section>
    </div>
  )
}
