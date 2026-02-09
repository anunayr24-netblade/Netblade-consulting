export default function DisclaimerPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl">Important information about our services</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="font-bold text-lg mb-2">⚠ Please Read Carefully</p>
            <p className="text-gray-700">
              This disclaimer governs your use of Netblade Consulting's services, particularly 
              financial education and guidance services.
            </p>
          </div>

          <div className="prose max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Financial Services Disclaimer</h2>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>NOT SEBI REGISTERED:</strong> Netblade Consulting is NOT a SEBI-registered 
                  investment advisor or portfolio management service. We do not provide regulated 
                  financial advisory services.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>EDUCATIONAL PURPOSE ONLY:</strong> All stock market education, trading 
                  psychology guidance, and investment planning support are provided solely for 
                  educational and informational purposes.
                </p>
                <p className="text-gray-700">
                  <strong>NO FINANCIAL ADVICE:</strong> Nothing we provide should be construed as 
                  financial advice, investment recommendations, or solicitation to buy or sell any 
                  securities.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Your Responsibility</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>All investment and trading decisions are entirely your own responsibility</li>
                <li>You should conduct your own research and due diligence</li>
                <li>Consult with SEBI-registered financial advisors before making investment decisions</li>
                <li>Past performance is not indicative of future results</li>
                <li>Trading and investing carry inherent risks, including loss of capital</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Tax and GST Services</h2>
              <p className="text-gray-700">
                GST registration and tax filing assistance are provided as basic guidance and support 
                services. For complex tax matters, we recommend consulting with certified chartered 
                accountants or tax professionals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Website and Marketing Services</h2>
              <p className="text-gray-700">
                While we strive to deliver high-quality website development and digital marketing 
                services, we cannot guarantee specific business results, traffic numbers, or rankings. 
                Results vary based on numerous factors including industry, competition, and market conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">No Warranties</h2>
              <p className="text-gray-700">
                Our services are provided "as is" without warranties of any kind, either express or 
                implied. We do not warrant that our services will be uninterrupted, error-free, or 
                meet your specific requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to Disclaimer</h2>
              <p className="text-gray-700">
                We reserve the right to modify this disclaimer at any time. Changes will be effective 
                immediately upon posting on our website.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Questions?</h3>
              <p className="text-gray-700">
                If you have any questions about this disclaimer or our services, please contact us 
                at info@netbladeconsulting.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
