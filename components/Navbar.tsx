'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Netblade Consulting
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition flex items-center">
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/about" className="block px-4 py-3 hover:bg-gray-50">About Netblade Consulting</Link>
                <Link href="/about/vision-mission" className="block px-4 py-3 hover:bg-gray-50">Our Vision & Mission</Link>
                <Link href="/about/approach" className="block px-4 py-3 hover:bg-gray-50">Our Approach</Link>
                <Link href="/about/why-choose-us" className="block px-4 py-3 hover:bg-gray-50">Why Choose Us</Link>
              </div>
            </div>

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
                    <Link href="/services/financial/stock-market-education" className="block px-4 py-2 hover:bg-gray-50 text-sm">Stock Market Education</Link>
                    <Link href="/services/financial/trading-psychology" className="block px-4 py-2 hover:bg-gray-50 text-sm">Trading Psychology</Link>
                    <Link href="/services/financial/investment-planning" className="block px-4 py-2 hover:bg-gray-50 text-sm">Investment Planning</Link>
                    <Link href="/services/financial/gst-registration" className="block px-4 py-2 hover:bg-gray-50 text-sm">GST Registration</Link>
                    <Link href="/services/financial/tax-filing" className="block px-4 py-2 hover:bg-gray-50 text-sm">Tax Filing Assistance</Link>
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
                <Link href="/industries/traders" className="block px-4 py-3 hover:bg-gray-50">Traders & Investors</Link>
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
            <Link href="/contact#consultation" className="btn-primary">
              Book Free Consultation
            </Link>
            <Link href="/contact#quote" className="btn-secondary">
              Get a Quote
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
            <Link href="/services/financial/stock-market-education" className="block py-2 text-gray-700 hover:text-primary pl-4">Financial Services</Link>
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
