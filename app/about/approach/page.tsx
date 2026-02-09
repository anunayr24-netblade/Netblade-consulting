export default function ApproachPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h1>
          <p className="text-xl">Strategic, data-driven, and client-focused methodology</p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 mr-6">
                1
              </div>
              <div className="flex-1 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Discovery & Analysis</h3>
                <p className="text-gray-700 mb-3">
                  We start by understanding your business, goals, challenges, and target audience. 
                  Through in-depth consultation and market research, we identify opportunities and 
                  create a foundation for success.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Business goals assessment</li>
                  <li>Market and competitor analysis</li>
                  <li>Target audience research</li>
                  <li>Current state evaluation</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 mr-6">
                2
              </div>
              <div className="flex-1 bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Strategy Development</h3>
                <p className="text-gray-700 mb-3">
                  Based on our findings, we craft a customized strategy that aligns with your objectives. 
                  No cookie-cutter solutions – every plan is tailored to your unique needs.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Custom solution design</li>
                  <li>Technology stack selection</li>
                  <li>Marketing channel planning</li>
                  <li>Budget and timeline optimization</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 mr-6">
                3
              </div>
              <div className="flex-1 bg-purple-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Implementation & Execution</h3>
                <p className="text-gray-700 mb-3">
                  Our expert team brings the strategy to life with precision and attention to detail. 
                  We maintain clear communication throughout the process and keep you informed at every stage.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Agile development methodology</li>
                  <li>Regular progress updates</li>
                  <li>Quality assurance testing</li>
                  <li>Client feedback integration</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 mr-6">
                4
              </div>
              <div className="flex-1 bg-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Launch & Optimization</h3>
                <p className="text-gray-700 mb-3">
                  Once launched, we don't just walk away. We monitor performance, gather data, and 
                  continuously optimize to ensure you're getting the best possible results.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Performance monitoring</li>
                  <li>Analytics and reporting</li>
                  <li>Continuous improvement</li>
                  <li>A/B testing and refinement</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 mr-6">
                5
              </div>
              <div className="flex-1 bg-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Support & Growth</h3>
                <p className="text-gray-700 mb-3">
                  Our partnership doesn't end at launch. We provide ongoing support, maintenance, 
                  and strategic guidance to help you scale and adapt to changing market conditions.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Technical support and maintenance</li>
                  <li>Strategic consultation</li>
                  <li>Scaling assistance</li>
                  <li>Training and knowledge transfer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">🎯 Data-Driven Decisions</h3>
              <p className="text-gray-700">Every recommendation is backed by research and analytics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">💬 Transparent Communication</h3>
              <p className="text-gray-700">Clear, honest updates throughout the entire process</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">🔄 Agile & Flexible</h3>
              <p className="text-gray-700">Adaptable to changing needs and market conditions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">✨ Quality First</h3>
              <p className="text-gray-700">Never compromising on excellence and best practices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
