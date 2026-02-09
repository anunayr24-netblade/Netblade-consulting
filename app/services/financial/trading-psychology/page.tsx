import Link from 'next/link'

export default function TradingPsychologyPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trading Psychology & Risk Management</h1>
          <p className="text-xl">Master your emotions and manage risk effectively</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            90% of trading success comes from psychology and risk management. Learn to control your 
            emotions, stick to your strategy, and protect your capital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">🧠 Emotional Control</h3>
              <p className="text-gray-700">Managing fear, greed, and other trading emotions</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">📋 Trading Discipline</h3>
              <p className="text-gray-700">Following your plan and avoiding impulsive decisions</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">⚖️ Risk-Reward Ratios</h3>
              <p className="text-gray-700">Optimizing trade setups for better profitability</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">💰 Position Sizing</h3>
              <p className="text-gray-700">Determining how much to invest in each trade</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Improve Your Trading Mindset</Link>
        </div>
      </section>
    </div>
  )
}
