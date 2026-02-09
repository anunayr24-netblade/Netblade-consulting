import Link from 'next/link'

export default function StockMarketEducationPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stock Market Education</h1>
          <p className="text-xl">Learn to trade and invest with confidence</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-sm text-gray-700">
              <strong>⚠ Important Disclaimer:</strong> All financial education services are provided for informational 
              and educational purposes only. This is not financial advice. We do not provide SEBI-registered advisory services.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Master the fundamentals of stock market investing and trading. Our educational programs 
            help you understand market dynamics, develop trading strategies, and make informed decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📚 Stock Market Basics</h3>
              <p className="text-gray-700">Understanding stocks, markets, and trading fundamentals</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📊 Technical Analysis</h3>
              <p className="text-gray-700">Chart patterns, indicators, and trend analysis</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📈 Fundamental Analysis</h3>
              <p className="text-gray-700">Company valuation and financial statement analysis</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">💡 Trading Strategies</h3>
              <p className="text-gray-700">Day trading, swing trading, and long-term investing</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⚖️ Risk Management</h3>
              <p className="text-gray-700">Position sizing and portfolio management</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🎓 Market Psychology</h3>
              <p className="text-gray-700">Understanding market sentiment and behavior</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-4">What You'll Learn:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ How to read and analyze stock charts</li>
              <li>✓ Identifying profitable trading opportunities</li>
              <li>✓ Risk management techniques</li>
              <li>✓ Building a diversified portfolio</li>
              <li>✓ Understanding market cycles and trends</li>
              <li>✓ Developing your own trading plan</li>
            </ul>
          </div>

          <Link href="/contact" className="btn-primary">Start Learning</Link>
        </div>
      </section>
    </div>
  )
}
