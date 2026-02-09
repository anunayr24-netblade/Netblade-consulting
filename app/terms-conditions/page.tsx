export default function TermsConditionsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl">Terms of use for our services</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <p className="text-sm text-gray-600 mb-8">Last Updated: February 9, 2026</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using Netblade Consulting's services, you accept and agree to be 
              bound by these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Services</h2>
            <p className="text-gray-700 mb-6">
              Netblade Consulting provides website development, digital marketing, and financial 
              education services. Service details, deliverables, and timelines will be specified 
              in individual project agreements.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
            <p className="text-gray-700 mb-6">
              Payment terms will be outlined in your service agreement. Generally, we require an 
              upfront deposit before starting work, with the balance due upon project completion 
              or as per agreed milestones.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              Upon full payment, clients receive ownership of the final deliverables. Netblade 
              Consulting retains the right to showcase completed work in our portfolio unless 
              otherwise agreed in writing.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Refund Policy</h2>
            <p className="text-gray-700 mb-6">
              Refund policies vary by service type and will be detailed in your service agreement. 
              Generally, deposits are non-refundable once work has commenced.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Netblade Consulting shall not be liable for any indirect, incidental, special, or 
              consequential damages arising out of or related to our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
