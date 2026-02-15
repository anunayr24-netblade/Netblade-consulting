'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95 border-b border-gray-100">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Netblade Consulting
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* About Us */}
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <div className="mb-2">
                    <h3 className="font-bold text-primary px-3 py-2">Website Development</h3>
                    <Link href="/services/website-development/business" className="block px-4 py-2 hover:bg-gray-50 text-sm">Business Website Development</Link>
                    <Link href="/services/website-development/real-estate" className="block px-4 py-2 hover:bg-gray-50 text-sm">Real Estate Websites</Link>
                    <Link href="/services/website-development/wordpress" className="block px-4 py-2 hover:bg-gray-50 text-sm">WordPress Development</Link>
                    <Link href="/services/website-development/redesign" className="block px-4 py-2 hover:bg-gray-50 text-sm">Website Redesign</Link>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-bold text-primary px-3 py-2">Digital Marketing</h3>
                    <Link href="/services/digital-marketing/seo" className="block px-4 py-2 hover:bg-gray-50 text-sm">SEO</Link>
                    <Link href="/services/digital-marketing/social-media" className="block px-4 py-2 hover:bg-gray-50 text-sm">Social Media Marketing</Link>
                    <Link href="/services/digital-marketing/google-ads" className="block px-4 py-2 hover:bg-gray-50 text-sm">Google Ads</Link>
                    <Link href="/services/digital-marketing/content-marketing" className="block px-4 py-2 hover:bg-gray-50 text-sm">Content Marketing</Link>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary px-3 py-2">Financial Services</h3>
                    <Link href="/services/financial/registrations" className="block px-4 py-2 hover:bg-gray-50 text-sm">Registrations</Link>
                    <Link href="/services/financial/itr" className="block px-4 py-2 hover:bg-gray-50 text-sm">ITR</Link>
                    <Link href="/services/financial/accounting-balance-sheet" className="block px-4 py-2 hover:bg-gray-50 text-sm">Accounting and Balance Sheet</Link>
                    <Link href="/services/financial/dsc-trademark" className="block px-4 py-2 hover:bg-gray-50 text-sm">DSC and Trademark</Link>
                    <Link href="/services/financial/gst-returns" className="block px-4 py-2 hover:bg-gray-50 text-sm">GST and GST Returns</Link>
                    <Link href="/services/financial/compliances" className="block px-4 py-2 hover:bg-gray-50 text-sm">Compliances</Link>
                    <Link href="/services/financial/loans-credit-cards" className="block px-4 py-2 hover:bg-gray-50 text-sm">Loans and Credit Cards</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition flex items-center">
                Industries
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/industries/startups" className="block px-4 py-3 hover:bg-gray-50">Startups & Small Businesses</Link>
                <Link href="/industries/real-estate" className="block px-4 py-3 hover:bg-gray-50">Real Estate Professionals</Link>
                <Link href="/industries/traders" className="block px-4 py-3 hover:bg-gray-50">Financial Professionals</Link>
                <Link href="/industries/coaches" className="block px-4 py-3 hover:bg-gray-50">Coaches & Educators</Link>
                <Link href="/industries/freelancers" className="block px-4 py-3 hover:bg-gray-50">Freelancers & Consultants</Link>
              </div>
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-primary transition">
              Contact Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact#consultation" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              📞 Free Consultation
            </Link>
            <Link href="/contact#quote" className="border-2 border-blue-600 text-blue-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary">Home</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary">About Us</Link>
            <Link href="/services/website-development/business" className="block py-2 text-gray-700 hover:text-primary pl-4">Website Development</Link>
            <Link href="/services/digital-marketing/seo" className="block py-2 text-gray-700 hover:text-primary pl-4">Digital Marketing</Link>
            <Link href="/services/financial/registrations" className="block py-2 text-gray-700 hover:text-primary pl-4">Financial Services</Link>
            <Link href="/industries/startups" className="block py-2 text-gray-700 hover:text-primary">Industries</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary">Contact Us</Link>
            <div className="mt-4 space-y-2">
              <Link href="/contact#consultation" className="block btn-primary text-center">Book Free Consultation</Link>
              <Link href="/contact#quote" className="block btn-secondary text-center">Get a Quote</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
