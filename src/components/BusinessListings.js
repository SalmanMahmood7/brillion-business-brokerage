'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, MapPin, DollarSign, TrendingUp, Calendar } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const BusinessListings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    industry: '',
    priceRange: '',
    location: ''
  });

  // Mock data - will be replaced with Firebase data
  const mockListings = [
    {
      id: '1',
      title: 'Established Restaurant Chain',
      description: 'Profitable restaurant franchise with multiple locations and strong brand recognition. Well-established in the local market with loyal customer base.',
      price: 1200000,
      revenue: 2800000,
      cashFlow: 400000,
      location: 'Toronto, ON',
      industry: 'Food & Beverage',
      imageUrl: '/api/placeholder/300/200',
      featured: true,
      established: 2010
    },
    {
      id: '2',
      title: 'Tech Consulting Firm',
      description: 'Growing technology consulting business with recurring clients and strong reputation in enterprise software implementation.',
      price: 750000,
      revenue: 1500000,
      cashFlow: 300000,
      location: 'Ottawa, ON',
      industry: 'Technology',
      imageUrl: '/api/placeholder/300/200',
      featured: true,
      established: 2015
    },
    {
      id: '3',
      title: 'Manufacturing Company',
      description: 'Well-established manufacturing business with modern equipment, loyal customer base, and strong relationships with suppliers.',
      price: 2200000,
      revenue: 5000000,
      cashFlow: 650000,
      location: 'Mississauga, ON',
      industry: 'Manufacturing',
      imageUrl: '/api/placeholder/300/200',
      featured: true,
      established: 2005
    },
    {
      id: '4',
      title: 'Digital Marketing Agency',
      description: 'Fast-growing digital marketing agency with blue-chip clients, proven track record, and scalable business model.',
      price: 450000,
      revenue: 900000,
      cashFlow: 180000,
      location: 'Edmonton, AB',
      industry: 'Marketing',
      imageUrl: '/api/placeholder/300/200',
      featured: false,
      established: 2018
    },
    {
      id: '5',
      title: 'Healthcare Services Provider',
      description: 'Established healthcare services provider with steady revenue stream, experienced staff, and growth potential.',
      price: 850000,
      revenue: 1800000,
      cashFlow: 275000,
      location: 'Toronto, ON',
      industry: 'Healthcare',
      imageUrl: '/api/placeholder/300/200',
      featured: true,
      established: 2012
    },
    {
      id: '6',
      title: 'E-commerce Business',
      description: 'Profitable online retail business with established supply chain, growing market share, and strong online presence.',
      price: 320000,
      revenue: 1100000,
      cashFlow: 155000,
      location: 'Calgary, AB',
      industry: 'E-commerce',
      imageUrl: '/api/placeholder/300/200',
      featured: false,
      established: 2019
    },
    {
      id: '7',
      title: 'Professional Services Firm',
      description: 'Established accounting and financial services firm with long-term client relationships and recurring revenue.',
      price: 900000,
      revenue: 2200000,
      cashFlow: 350000,
      location: 'Vancouver, BC',
      industry: 'Professional Services',
      imageUrl: '/api/placeholder/300/200',
      featured: false,
      established: 2008
    },
    {
      id: '8',
      title: 'Construction Company',
      description: 'Reputable construction company with commercial and residential projects, skilled workforce, and solid reputation.',
      price: 1800000,
      revenue: 4500000,
      cashFlow: 520000,
      location: 'Toronto, ON',
      industry: 'Construction',
      imageUrl: '/api/placeholder/300/200',
      featured: false,
      established: 2006
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setListings(mockListings);
      setFilteredListings(mockListings);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = listings;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(listing => 
        listing.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        listing.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        listing.industry.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Industry filter
    if (filters.industry) {
      filtered = filtered.filter(listing => listing.industry === filters.industry);
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(listing => {
        if (max) {
          return listing.price >= min && listing.price <= max;
        } else {
          return listing.price >= min;
        }
      });
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(listing => 
        listing.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredListings(filtered);
  }, [filters, listings]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      industry: '',
      priceRange: '',
      location: ''
    });
  };

  const industries = [
    'Technology',
    'Healthcare',
    'Manufacturing',
    'Food & Beverage',
    'E-commerce',
    'Marketing',
    'Professional Services',
    'Construction'
  ];

  const priceRanges = [
    { label: 'Under $500K', value: '0-500000' },
    { label: '$500K - $1M', value: '500000-1000000' },
    { label: '$1M - $2M', value: '1000000-2000000' },
    { label: '$2M - $5M', value: '2000000-5000000' },
    { label: '$5M+', value: '5000000' }
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-lg h-96 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search businesses..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <select
            value={filters.industry}
            onChange={(e) => handleFilterChange('industry', e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Industries</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>

          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Price Ranges</option>
            {priceRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Location..."
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">
            {filteredListings.length} business{filteredListings.length !== 1 ? 'es' : ''} found
          </span>
          {(filters.search || filters.industry || filters.priceRange || filters.location) && (
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400">Business Image</div>
              </div>
              {listing.featured && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                  Featured
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {listing.location}
                <span className="mx-2">•</span>
                {listing.industry}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {listing.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {listing.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Asking Price
                  </div>
                  <div className="font-semibold text-gray-900">
                    {formatCurrency(listing.price)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Annual Revenue
                  </div>
                  <div className="font-semibold text-gray-900">
                    {formatCurrency(listing.revenue)}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Cash Flow</div>
                  <div className="font-semibold text-green-600">
                    {formatCurrency(listing.cashFlow)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    Established
                  </div>
                  <div className="font-semibold text-gray-900">
                    {listing.established}
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredListings.length === 0 && !loading && (
        <div className="text-center py-12">
          <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No businesses found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters or search terms
          </p>
          <button
            onClick={clearFilters}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BusinessListings;