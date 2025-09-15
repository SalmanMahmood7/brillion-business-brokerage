'use client';

import Navbar from '../../components/Navbar';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DollarSign, MapPin, TrendingUp, Users, Building2, Filter, Search, ArrowRight, Eye, Heart } from 'lucide-react';

export default function Listings() {
  const [filters, setFilters] = useState({
    industry: '',
    priceRange: '',
    location: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  const listings = [
    {
      id: 1,
      title: "Established Manufacturing Company",
      price: "$2,500,000",
      revenue: "$3.2M",
      location: "Toronto, ON",
      industry: "Manufacturing",
      employees: "25-50",
      description: "Profitable manufacturing business with 20+ years of operations, established customer base, and modern equipment.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Established Brand", "Loyal Customer Base", "Modern Equipment", "Growth Potential"]
    },
    {
      id: 2,
      title: "Tech Consulting Firm",
      price: "$850,000",
      revenue: "$1.1M",
      location: "Vancouver, BC",
      industry: "Technology",
      employees: "10-25",
      description: "Growing technology consulting firm specializing in digital transformation and cloud solutions.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Recurring Revenue", "High Margins", "Skilled Team", "Remote Ready"]
    },
    {
      id: 3,
      title: "Healthcare Services Practice",
      price: "$1,200,000",
      revenue: "$1.8M",
      location: "Calgary, AB",
      industry: "Healthcare",
      employees: "15-30",
      description: "Well-established healthcare practice with multiple revenue streams and excellent reputation.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Multiple Locations", "Insurance Contracts", "Experienced Staff", "Stable Revenue"]
    },
    {
      id: 4,
      title: "Professional Services Firm",
      price: "$680,000",
      revenue: "$950K",
      location: "Ottawa, ON",
      industry: "Professional Services",
      employees: "5-10",
      description: "Boutique consulting firm with blue-chip client portfolio and strong market position.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Premium Clients", "High Retention", "Scalable Model", "Strong Reputation"]
    },
    {
      id: 5,
      title: "E-commerce Business",
      price: "$1,500,000",
      revenue: "$2.2M",
      location: "Montreal, QC",
      industry: "E-commerce",
      employees: "10-25",
      description: "Fast-growing e-commerce platform with proprietary technology and expanding market reach.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Proprietary Platform", "Growing Market", "Strong Margins", "Automation Ready"]
    },
    {
      id: 6,
      title: "Food & Beverage Distribution",
      price: "$3,200,000",
      revenue: "$4.5M",
      location: "Mississauga, ON",
      industry: "Distribution",
      employees: "50+",
      description: "Regional food distribution company with established routes and long-term supplier contracts.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Established Routes", "Long-term Contracts", "Fleet Included", "Regional Leader"]
    }
  ];

  const industries = ["All Industries", "Technology", "Healthcare", "Manufacturing", "Professional Services", "E-commerce", "Distribution"];
  const priceRanges = ["All Prices", "Under $500K", "$500K - $1M", "$1M - $2M", "$2M - $5M", "Over $5M"];
  const locations = ["All Locations", "Ontario", "British Columbia", "Alberta", "Quebec", "Other Provinces"];

  const filteredListings = listings.filter(listing => {
    return (
      (filters.industry === '' || filters.industry === 'All Industries' || listing.industry === filters.industry) &&
      (filters.location === '' || filters.location === 'All Locations' || listing.location.includes(filters.location.replace('Ontario', 'ON').replace('British Columbia', 'BC').replace('Alberta', 'AB').replace('Quebec', 'QC'))) &&
      (searchTerm === '' || listing.title.toLowerCase().includes(searchTerm.toLowerCase()) || listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div>
      <Navbar />
      {/* Hero Section - Smaller & Responsive */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{top: '-80px'}}>
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Business Listings"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Business</span> Listings
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Discover exceptional business opportunities across Canada. Find your next investment with our curated selection of quality businesses for sale.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 md:py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Businesses
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Search by business type or description..."
                  />
                </div>
              </div>

              {/* Industry Filter */}
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  value={filters.industry}
                  onChange={(e) => setFilters({...filters, industry: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  id="price"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <select
                  id="location"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Available Businesses ({filteredListings.length})
            </h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="text-sm md:text-base">Showing {filteredListings.length} of {listings.length} listings</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <div className="text-2xl md:text-3xl font-bold mb-1">{listing.price}</div>
                      <div className="text-sm opacity-90">Annual Revenue: {listing.revenue}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#0a1f1f] transition-colors">
                      {listing.title}
                    </h3>
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {listing.industry}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                    {listing.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{listing.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{listing.employees} employees</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {listing.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <TrendingUp className="w-3 h-3 text-[#0a1f1f]" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={`/listings/${listing.id}`}
                      className="flex-1 bg-[#0a1f1f] text-white py-2 px-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredListings.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No businesses found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters to find more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Market Insights</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Current market statistics for business sales across Canada
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">250+</div>
              <div className="text-gray-300 text-sm md:text-base">Active Listings</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.5M</div>
              <div className="text-gray-300 text-sm md:text-base">Average Sale Price</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">45</div>
              <div className="text-gray-300 text-sm md:text-base">Days Avg. Time to Sell</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300 text-sm md:text-base">Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Looking to List Your Business?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Get maximum exposure for your business with our comprehensive listing and marketing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              List Your Business
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/sell"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Learn About Selling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}