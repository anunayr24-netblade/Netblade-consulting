import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Netblade Consulting</h3>
            <p className="text-gray-400 mb-4">
              Technology. Growth. Financial Clarity.
            </p>
            <p className="text-sm text-gray-400">
              Build Digitally. Grow Strategically. Invest Wisely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services/website-development/business" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/industries/startups" className="text-gray-400 hover:text-white transition">Industries</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/website-development/business" className="text-gray-400 hover:text-white transition">Website Development</Link></li>
              <li><Link href="/services/digital-marketing/seo" className="text-gray-400 hover:text-white transition">Digital Marketing</Link></li>
              <li><Link href="/services/financial/stock-market-education" className="text-gray-400 hover:text-white transition">Financial Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@netbladeconsulting.com</li>
              <li>📞 +91-XXXXXXXXXX</li>
              <li>🌍 India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Netblade Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition">Terms & Conditions</Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
