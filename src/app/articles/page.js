'use client';

import Navbar from '../../components/Navbar';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, Tag, Search, Filter, BookOpen, TrendingUp } from 'lucide-react';

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to Business Valuation in 2024",
      excerpt: "Understanding how to properly value your business is crucial for any sale or strategic planning. Learn the key methodologies and factors that impact valuation.",
      category: "Valuation",
      author: "Sarah Chen",
      date: "2024-03-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: true
    },
    {
      id: 2,
      title: "M&A Trends Shaping Canadian Markets",
      excerpt: "Explore the latest merger and acquisition trends across Canadian industries and what they mean for business owners considering strategic transactions.",
      category: "M&A",
      author: "Michael Thompson",
      date: "2024-03-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: true
    },
    {
      id: 3,
      title: "Preparing Your Business for Sale: A Step-by-Step Guide",
      excerpt: "From financial documentation to operational improvements, discover the essential steps to prepare your business for a successful sale.",
      category: "Selling",
      author: "Jennifer Park",
      date: "2024-03-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: false
    },
    {
      id: 4,
      title: "Technology Sector Investment Opportunities in Canada",
      excerpt: "Analyzing the growing technology sector in Canada and identifying key investment opportunities for strategic buyers and investors.",
      category: "Industry Insights",
      author: "David Kim",
      date: "2024-03-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: false
    },
    {
      id: 5,
      title: "Due Diligence Best Practices for Business Buyers",
      excerpt: "Navigate the due diligence process effectively with our comprehensive guide to financial, legal, and operational due diligence.",
      category: "Buying",
      author: "Emily Rodriguez",
      date: "2024-03-05",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: false
    },
    {
      id: 6,
      title: "Scaling Your Business: Growth Strategies That Work",
      excerpt: "Proven strategies for sustainable business growth, from operational improvements to market expansion and strategic partnerships.",
      category: "Growth",
      author: "Alex Johnson",
      date: "2024-03-03",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: false
    },
    {
      id: 7,
      title: "Healthcare Business Acquisitions: Market Overview",
      excerpt: "An in-depth look at the healthcare sector's M&A activity, regulatory considerations, and investment opportunities.",
      category: "Industry Insights",
      author: "Dr. Rachel Liu",
      date: "2024-03-01",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: false
    },
    {
      id: 8,
      title: "Tax Implications of Business Sales in Canada",
      excerpt: "Understanding the tax consequences of selling your business and strategies to optimize your after-tax proceeds.",
      category: "Legal & Tax",
      author: "Robert Taylor",
      date: "2024-02-28",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: false
    },
    {
      id: 9,
      title: "Manufacturing Sector Outlook: Opportunities and Challenges",
      excerpt: "Examining the current state of Canada's manufacturing sector and identifying key opportunities for growth and investment.",
      category: "Industry Insights",
      author: "Mark Wilson",
      date: "2024-02-25",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: false
    }
  ];

  const categories = ["All", "Valuation", "M&A", "Selling", "Buying", "Growth", "Industry Insights", "Legal & Tax"];

  const filteredArticles = articles.filter(article => {
    return (
      (selectedCategory === 'All' || article.category === selectedCategory) &&
      (searchTerm === '' || 
       article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
       article.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div>
      <Navbar />
      {/* Hero Section - Smaller & Responsive */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{top: '-80px'}}>
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Business Articles"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Business</span> Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Expert insights, market analysis, and practical guidance for business owners, buyers, and investors across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 md:py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-end">
              {/* Search */}
              <div className="lg:col-span-2">
                <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Articles
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Search by title, content, or category..."
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'All' && featuredArticles.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {featuredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0a1f1f] transition-colors">
                      <Link href={`/articles/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Link
                      href={`/articles/${article.id}`}
                      className="inline-flex items-center gap-2 text-[#0a1f1f] font-semibold hover:text-red-700 transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`} ({filteredArticles.length})
            </h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="text-sm md:text-base">Showing {filteredArticles.length} articles</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {(selectedCategory === 'All' ? regularArticles : filteredArticles).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0a1f1f] transition-colors">
                    <Link href={`/articles/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <Link
                      href={`/articles/${article.id}`}
                      className="inline-flex items-center gap-2 text-[#0a1f1f] font-semibold hover:text-red-700 transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Get the latest business insights and market updates delivered to your inbox.
          </p>
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
              <button className="bg-[#0a1f1f] text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Content Insights</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Our knowledge base and content engagement statistics
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Published Articles</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300 text-sm md:text-base">Monthly Readers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300 text-sm md:text-base">Expert Contributors</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">8</div>
              <div className="text-gray-300 text-sm md:text-base">Content Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Need Expert Guidance?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Our team of business advisors is ready to help you navigate your next business transaction or growth initiative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Get Expert Consultation
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}