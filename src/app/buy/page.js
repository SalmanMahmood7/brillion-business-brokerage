import Image from 'next/image';
import Link from 'next/link';
import { Search, Shield, Users, TrendingUp, CheckCircle, ArrowRight, Target, Clock, FileText, Briefcase } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function Buy() {
  const benefits = [
    {
      icon: Search,
      title: "Extensive Database",
      description: "Access to hundreds of businesses for sale across Canada, from established enterprises to emerging opportunities."
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All businesses undergo thorough vetting to ensure accuracy and legitimacy before being presented to buyers."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our experienced advisors guide you through every step of the acquisition process."
    },
    {
      icon: Clock,
      title: "Faster Process",
      description: "Streamlined acquisition process with pre-qualified opportunities and efficient due diligence."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Define Your Criteria",
      description: "Work with our team to identify your investment goals, industry preferences, and acquisition budget."
    },
    {
      step: "02", 
      title: "Market Research",
      description: "We present curated opportunities that match your criteria from our extensive database of businesses."
    },
    {
      step: "03",
      title: "Due Diligence",
      description: "Comprehensive financial and operational analysis to ensure the business meets your expectations."
    },
    {
      step: "04",
      title: "Negotiation & Closing",
      description: "Expert negotiation support and transaction management through to successful completion."
    }
  ];

  const businessTypes = [
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Law firms, consulting agencies, accounting practices, and other professional service businesses.",
      examples: ["Legal Practices", "Consulting Firms", "Accounting Services", "Marketing Agencies"]
    },
    {
      icon: Target,
      title: "Manufacturing",
      description: "Production facilities, specialty manufacturing, and industrial businesses with growth potential.",
      examples: ["Food Production", "Equipment Manufacturing", "Packaging Services", "Industrial Supply"]
    },
    {
      icon: Users,
      title: "Healthcare Services",
      description: "Medical practices, healthcare facilities, and wellness-focused business opportunities.",
      examples: ["Medical Clinics", "Dental Practices", "Wellness Centers", "Healthcare Tech"]
    },
    {
      icon: TrendingUp,
      title: "Technology",
      description: "Software companies, digital agencies, e-commerce businesses, and tech-enabled services.",
      examples: ["Software Development", "E-commerce Platforms", "Digital Marketing", "SaaS Businesses"]
    }
  ];

  const financing = [
    "SBA Loans & Government Programs",
    "Traditional Bank Financing", 
    "Seller Financing Options",
    "Private Equity & Investment Partners",
    "Asset-Based Lending",
    "Revenue-Based Financing",
    "Equipment Financing",
    "Working Capital Solutions"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section - Smaller & Responsive */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{top: '-80px'}}>
          <Image
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Buy a Business"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Buy</span> a Business
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Find your perfect business opportunity with Canada's premier business brokerage. We connect serious buyers with quality businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Why Buy With Us - Responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Buy With Billion Business?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our extensive network and expertise help you find and acquire the right business opportunity
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all duration-300 text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Types - Responsive */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Business Opportunities</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover diverse business opportunities across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {businessTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{type.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{type.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {type.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#0a1f1f] flex-shrink-0" />
                            <span className="text-sm text-gray-700">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process - Responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Acquisition Process</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A systematic approach to finding and acquiring your ideal business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options - Responsive */}
      <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Business Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Business Financing"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl w-full h-auto object-cover transform scale-100"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Financing Solutions</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Don't let financing be a barrier to business ownership. We work with trusted partners to help you secure the capital needed for your acquisition.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {financing.map((option, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0a1f1f] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics - Responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Buyer Success</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Numbers that demonstrate our commitment to connecting buyers with opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-gray-50 shadow-lg p-6 md:p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1f1f] mb-2">500+</div>
              <div className="text-gray-600 text-sm md:text-base">Available Businesses</div>
            </div>
            <div className="bg-gray-50 shadow-lg p-6 md:p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1f1f] mb-2">15+</div>
              <div className="text-gray-600 text-sm md:text-base">Industry Sectors</div>
            </div>
            <div className="bg-gray-50 shadow-lg p-6 md:p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1f1f] mb-2">72%</div>
              <div className="text-gray-600 text-sm md:text-base">Successful Acquisitions</div>
            </div>
            <div className="bg-gray-50 shadow-lg p-6 md:p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1f1f] mb-2">90 Days</div>
              <div className="text-gray-600 text-sm md:text-base">Avg. Time to Close</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="relative py-16 md:py-24 bg-[#0a1f1f] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Business Success Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1f1f]/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Buy Your Business?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Explore our current listings and find the perfect business opportunity for your investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/listings"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              View Available Businesses
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}