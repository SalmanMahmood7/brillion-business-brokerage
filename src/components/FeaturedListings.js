'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, DollarSign, TrendingUp, Eye, Heart, ArrowRight, Building2 } from 'lucide-react';

const FeaturedListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Enhanced mock data with more realistic business listings
  const mockListings = [
    {
      id: '1',
      title: 'Premium Restaurant Chain',
      description: 'Established fine dining restaurant with 3 prime locations, exceptional brand recognition, and loyal customer base.',
      price: 2400000,
      revenue: 4200000,
      cashFlow: 580000,
      location: 'Toronto, ON',
      industry: 'Food & Beverage',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3',
      featured: true,
      employees: 45,
      established: 2015
    },
    {
      id: '2', 
      title: 'Tech Consulting Powerhouse',
      description: 'Rapidly growing technology consulting firm specializing in digital transformation for Fortune 500 clients.',
      price: 1850000,
      revenue: 3100000,
      cashFlow: 465000,
      location: 'Ottawa, ON',
      industry: 'Technology',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3',
      featured: true,
      employees: 28,
      established: 2018
    },
    {
      id: '3',
      title: 'Healthcare Services Group',
      description: 'Multi-location healthcare practice with established patient base, modern equipment, and growth potential.',
      price: 3200000,
      revenue: 5800000,
      cashFlow: 720000,
      location: 'Edmonton, AB',
      industry: 'Healthcare',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3',
      featured: true,
      employees: 62,
      established: 2012
    },
    {
      id: '4',
      title: 'Manufacturing Excellence',
      description: 'Specialized manufacturing company with proprietary processes, long-term contracts, and expansion opportunities.',
      price: 4500000,
      revenue: 8200000,
      cashFlow: 980000,
      location: 'Mississauga, ON',
      industry: 'Manufacturing',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3',
      featured: true,
      employees: 85,
      established: 2008
    }
  ];

  const filters = [
    { id: 'all', name: 'All Industries', count: 4 },
    { id: 'technology', name: 'Technology', count: 1 },
    { id: 'healthcare', name: 'Healthcare', count: 1 },
    { id: 'food', name: 'Food & Beverage', count: 1 },
    { id: 'manufacturing', name: 'Manufacturing', count: 1 }
  ];

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setListings(mockListings);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredListings = listings.filter(listing => {
    if (activeFilter === 'all') return true;
    return listing.industry.toLowerCase().includes(activeFilter);
  });

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block w-32 h-8 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="w-96 h-12 bg-gray-200 rounded mx-auto animate-pulse mb-4" />
            <div className="w-128 h-6 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-3xl h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-slate-600 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Premium Opportunities
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Exclusive Business
            <span className="block bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover hand-picked, profitable businesses ready for acquisition. Each opportunity is thoroughly vetted and comes with our comprehensive due diligence support.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter.name}
              <span className={`ml-2 px-2 py-1 rounded-lg text-xs ${
                activeFilter === filter.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-slate-200 text-slate-500'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredListings.slice(0, 3).map((listing) => (
            <div key={listing.id} className="group relative">
              {/* Featured Badge */}
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  FEATURED
                </div>
              </div>

              <div className="card-light overflow-hidden group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 -mx-8 -mt-8 mb-6 overflow-hidden">
                  <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Industry Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-sm font-medium rounded-full">
                      {listing.industry}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-bold text-white">{formatCurrency(listing.price)}</div>
                    <div className="text-white/80 text-sm">Asking Price</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                      {listing.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{listing.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                        <TrendingUp className="w-4 h-4" />
                        Annual Revenue
                      </div>
                      <div className="font-bold text-slate-900">{formatCurrency(listing.revenue)}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                        <DollarSign className="w-4 h-4" />
                        Cash Flow
                      </div>
                      <div className="font-bold text-slate-900">{formatCurrency(listing.cashFlow)}</div>
                    </div>
                  </div>

                  {/* Location & Details */}
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {listing.location}
                    </div>
                    <div>Est. {listing.established}</div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link 
                      href={`/buy/${listing.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group/btn"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-50 to-gray-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Find Your Perfect Business?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Browse our complete portfolio of premium business opportunities, or let us help you find exactly what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/buy" className="btn-primary">
              View All Listings
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary !text-slate-700 !bg-white !border-slate-200">
              Get Personalized Help
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;