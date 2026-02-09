import Link from 'next/link'

export default function TaxFilingPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tax Filing Assistance</h1>
          <p className="text-xl">Simplify your tax filing process</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <p className="text-lg text-gray-700 mb-8">
            We provide basic guidance and support for individual and small business tax filing, 
            helping you understand deductions, exemptions, and compliance requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">📄 Income Tax Filing</h3>
              <p className="text-gray-700">ITR-1 to ITR-4 filing support</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">💼 Business Tax Returns</h3>
              <p className="text-gray-700">Small business tax filing guidance</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">💰 Tax Planning</h3>
              <p className="text-gray-700">Optimize deductions and save tax legally</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">📊 Documentation</h3>
              <p className="text-gray-700">Help organizing financial records</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">⚖️ Compliance</h3>
              <p className="text-gray-700">Stay compliant with tax laws</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">💡 Advisory</h3>
              <p className="text-gray-700">Tax-related questions and guidance</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary">Get Tax Filing Help</Link>
        </div>
      </section>
    </div>
  )
}
