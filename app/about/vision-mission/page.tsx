export default function VisionMissionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vision & Mission</h1>
          <p className="text-xl">Guiding principles that drive everything we do</p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-blue-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              To become the most trusted multi-service consulting partner for businesses and individuals 
              seeking to excel in the digital economy while achieving financial independence and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Empower Through Technology</h3>
              <p className="text-gray-700">
                Build modern, scalable, and secure digital solutions that help businesses establish 
                and grow their online presence.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Drive Growth Through Marketing</h3>
              <p className="text-gray-700">
                Implement data-driven marketing strategies that increase brand visibility, generate 
                quality leads, and boost revenue.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Enable Financial Success</h3>
              <p className="text-gray-700">
                Provide transparent financial guidance and education to help individuals and businesses 
                make informed decisions and achieve financial goals.
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Build Long-Term Partnerships</h3>
              <p className="text-gray-700">
                Foster trust-based relationships with clients by delivering consistent value, honest 
                communication, and exceptional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Strategic Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">📊 Excellence in Delivery</h3>
              <p className="text-gray-700">Maintain the highest standards in every project we undertake</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">🌱 Sustainable Growth</h3>
              <p className="text-gray-700">Create solutions that scale with your business</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">🎓 Continuous Innovation</h3>
              <p className="text-gray-700">Stay ahead of industry trends and technologies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">🤝 Client Success</h3>
              <p className="text-gray-700">Measure our success by your achievements</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
