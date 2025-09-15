'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedListingsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const listings = [
    {
      id: 1,
      title: "NICHE TOUR OPERATOR WITH LOYAL CLIENTELE",
      price: "$3,200,000",
      grossRevenue: "$6,070,000",
      cashFlow: "N/A",
      ebitda: "$809,000",
      location: "British Columbia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Acquire an incredibly established travel tour operator renowned for its unique approach to group travel. Specialising in flexible and one-of-a-kind itineraries, the company offers 1-2 week excursions around the globe, with a focus on creating authentic, intimate experiences...",
      href: "/listing/1"
    },
    {
      id: 2,
      title: "LANDMARK WHEEL AND TIRE BUSINESS INCLUDING PROPERTY",
      price: "$930,000",
      grossRevenue: "$3,500,000",
      cashFlow: "$425,000",
      ebitda: "N/A",
      location: "Ontario",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Acquire a reputable automotive retailer specializing in rims and tires. Since 2007, this business has provided exceptional products and services to a large customer base. With a dedication to customer satisfaction, the business maintains solid relationships...",
      href: "/listing/2"
    },
    {
      id: 3,
      title: "HIGHLY RATED KITCHEN AND BATH RENOVATION BUSINESS",
      price: "$1,350,000",
      grossRevenue: "$3,600,626",
      cashFlow: "$546,712",
      ebitda: "N/A",
      location: "South Central Ontario",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Own a distinguished kitchen and bath renovation company renowned for delivering exceptional craftsmanship and innovative design solutions. With a focus on high-end residential projects, this business has established a stellar reputation...",
      href: "/listing/3"
    },
    {
      id: 4,
      title: "ESTABLISHED MANUFACTURING WITH MODERN EQUIPMENT",
      price: "$2,200,000",
      grossRevenue: "$5,000,000",
      cashFlow: "$650,000",
      ebitda: "$780,000",
      location: "Mississauga, ON",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Well-established manufacturing business with modern equipment, loyal customer base, and strong relationships with suppliers. Excellent cash flow and growth opportunities in the expanding manufacturing sector...",
      href: "/listing/4"
    },
    {
      id: 5,
      title: "PROFITABLE DIGITAL MARKETING AGENCY",
      price: "$450,000",
      grossRevenue: "$900,000",
      cashFlow: "$180,000",
      ebitda: "$220,000",
      location: "Edmonton, AB",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Fast-growing digital marketing agency with blue-chip clients, proven track record, and scalable business model. Strong online presence and recurring revenue streams with excellent growth potential...",
      href: "/listing/5"
    },
    {
      id: 6,
      title: "HEALTHCARE SERVICES PROVIDER WITH GROWTH POTENTIAL",
      price: "$850,000",
      grossRevenue: "$1,800,000",
      cashFlow: "$275,000",
      ebitda: "$320,000",
      location: "Toronto, ON",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Established healthcare services provider with steady revenue stream, experienced staff, and growth potential. Strong referral network and excellent reputation in the healthcare industry...",
      href: "/listing/6"
    },
    {
      id: 7,
      title: "THRIVING E-COMMERCE BUSINESS WITH ESTABLISHED SUPPLY CHAIN",
      price: "$320,000",
      grossRevenue: "$1,100,000",
      cashFlow: "$155,000",
      ebitda: "$190,000",
      location: "Calgary, AB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Profitable online retail business with established supply chain, growing market share, and strong online presence. Multiple revenue streams and loyal customer base with excellent scalability...",
      href: "/listing/7"
    },
    {
      id: 8,
      title: "PROFESSIONAL ACCOUNTING SERVICES FIRM",
      price: "$900,000",
      grossRevenue: "$2,200,000",
      cashFlow: "$350,000",
      ebitda: "$420,000",
      location: "Vancouver, BC",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Established accounting and financial services firm with long-term client relationships and recurring revenue. Strong reputation and experienced team with excellent retention rates...",
      href: "/listing/8"
    },
    {
      id: 9,
      title: "REPUTABLE CONSTRUCTION COMPANY WITH STRONG PIPELINE",
      price: "$1,800,000",
      grossRevenue: "$4,500,000",
      cashFlow: "$520,000",
      ebitda: "$620,000",
      location: "Toronto, ON",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Reputable construction company with commercial and residential projects, skilled workforce, and solid reputation. Strong pipeline of upcoming projects and established client relationships...",
      href: "/listing/9"
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(listings.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentListings = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return listings.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            OUR FEATURED LISTINGS
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-20 h-1 bg-gray-900"></div>
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            <div className="w-20 h-1 bg-gray-900"></div>
          </div>
        </div>

        {/* Navigation and Cards Container */}
        <div className="flex items-center gap-8">
          {/* Left Navigation */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getCurrentListings().map((listing) => (
                <div key={listing.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group h-full overflow-hidden border-0">
                  {/* Image with Overlay */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={listing.image}
                      alt={listing.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-white/95 backdrop-blur-sm px-2 py-1.5 rounded-md">
                        <div className="text-xs font-medium text-gray-600">Starting at</div>
                        <div className="text-lg font-bold text-slate-900">{listing.price}</div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-[#0a1f1f] text-white px-2 py-1 rounded-full text-xs font-semibold">
                        AVAILABLE
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <Link href={listing.href}>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase leading-tight hover:text-slate-700 transition-colors group-hover:text-slate-700">
                        {listing.title}
                      </h3>
                    </Link>

                    {/* Location */}
                    <div className="flex items-center text-gray-500 mb-4">
                      <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs">{listing.location}</span>
                    </div>

                    {/* Financial Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-slate-50 p-2 rounded-md">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Revenue</div>
                        <div className="text-xs font-bold text-slate-900">{listing.grossRevenue}</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-md">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Cash Flow</div>
                        <div className="text-xs font-bold text-slate-900">{listing.cashFlow}</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-md">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">EBITDA</div>
                        <div className="text-xs font-bold text-slate-900">{listing.ebitda}</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-md">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Type</div>
                        <div className="text-xs font-bold text-slate-900">Acquisition</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-5 leading-relaxed text-xs line-clamp-2">
                      {listing.description}
                    </p>

                    {/* CTA Button */}
                    <div className="text-center">
                      <Link
                        href={listing.href}
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 group/btn text-sm"
                      >
                        VIEW DETAILS
                        <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>


        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/listings"
            className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-slate-900 px-8 py-4 font-semibold transition-all duration-500 hover:bg-slate-900 hover:text-white hover:shadow-2xl hover:scale-105 rounded-xl inline-flex items-center justify-center gap-2"
          >
            <span className="relative z-10 tracking-widest">VIEW ALL LISTINGS</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListingsSection;