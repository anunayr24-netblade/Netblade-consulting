import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Netblade Consulting</h3>
            <p className="text-gray-400 leading-relaxed">
              Technology. Growth. Financial Clarity.
            </p>
            <p className="text-sm text-gray-500 italic">
              Build Digitally. Grow Strategically. Invest Wisely.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-300 transition-all duration-300 hover:scale-110">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110">
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">→ Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">→ About Us</Link></li>
              <li><Link href="/services/website-development/business" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">→ Services</Link></li>
              <li><Link href="/industries/startups" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">→ Industries</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">→ Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-purple-400">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/website-development/business" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">→ Website Development</Link></li>
              <li><Link href="/services/digital-marketing/seo" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">→ Digital Marketing</Link></li>
              <li><Link href="/services/financial/gst-registration" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">→ Financial Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-green-400">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 text-xl">📧</span>
                <span>info@netbladeconsulting.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-400 text-xl">📞</span>
                <span>+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 text-xl">🌍</span>
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} <span className="font-semibold text-white">Netblade Consulting</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap space-x-6 justify-center">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms & Conditions</Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
