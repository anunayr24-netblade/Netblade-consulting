export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">How we collect, use, and protect your information</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <p className="text-sm text-gray-600 mb-8">Last Updated: February 9, 2026</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              We collect information you provide directly to us, including name, email address, 
              phone number, and any other information you choose to provide when contacting us 
              or using our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may 
              share your information only with your consent or as required by law.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at 
              info@netbladeconsulting.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
