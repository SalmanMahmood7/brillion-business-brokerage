import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { Calculator, TrendingUp, FileText, CheckCircle, ArrowRight, BarChart3, Target, Shield, DollarSign } from 'lucide-react';

export default function Valuation() {
  const methods = [
    {
      icon: BarChart3,
      title: "Asset-Based Valuation",
      description: "Determine value based on your business assets, both tangible and intangible.",
      features: ["Equipment & Inventory", "Real Estate Holdings", "Intellectual Property", "Brand Value Assessment"]
    },
    {
      icon: TrendingUp,
      title: "Income-Based Valuation",
      description: "Calculate value using cash flow projections and earning potential.",
      features: ["EBITDA Multiple", "Discounted Cash Flow", "Capitalization Method", "Revenue Projections"]
    },
    {
      icon: Target,
      title: "Market-Based Valuation",
      description: "Compare your business to recent sales of similar companies in your industry.",
      features: ["Comparable Sales", "Industry Multiples", "Market Trends", "Competitive Analysis"]
    },
    {
      icon: Calculator,
      title: "Hybrid Approach",
      description: "Comprehensive analysis combining multiple valuation methods for accuracy.",
      features: ["Weighted Average", "Risk Assessment", "Industry Adjustments", "Final Valuation Range"]
    }
  ];

  const factors = [
    {
      icon: DollarSign,
      title: "Financial Performance",
      description: "Revenue growth, profitability trends, and cash flow stability"
    },
    {
      icon: TrendingUp,
      title: "Market Position",
      description: "Competitive advantage, market share, and growth potential"
    },
    {
      icon: Shield,
      title: "Risk Factors",
      description: "Customer concentration, regulatory risks, and operational dependencies"
    },
    {
      icon: Target,
      title: "Industry Dynamics",
      description: "Market conditions, industry trends, and future outlook"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Discuss your business, goals, and gather preliminary information for the valuation process."
    },
    {
      step: "02",
      title: "Data Collection",
      description: "Comprehensive review of financial statements, operations, and market position."
    },
    {
      step: "03",
      title: "Analysis & Calculation",
      description: "Apply multiple valuation methodologies and perform detailed financial analysis."
    },
    {
      step: "04",
      title: "Report Delivery",
      description: "Receive detailed valuation report with recommendations for maximizing business value."
    }
  ];

  const benefits = [
    "Comprehensive 30-page valuation report",
    "Multiple valuation methodologies applied",
    "Industry benchmark comparisons",
    "Value enhancement recommendations",
    "Market readiness assessment",
    "Confidential and professional service",
    "Follow-up consultation included",
    "Digital and printed report delivery"
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section - Smaller */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Business Valuation"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0a1f1f]/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Valuation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Discover your business's true market value with professional valuation services from Canada's premier business brokerage firm.
            </p>
          </div>
        </div>
      </section>

      {/* Valuation Methods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Valuation Methodologies</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We use industry-standard valuation methods to provide accurate and comprehensive business valuations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{method.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{method.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {method.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#0a1f1f] flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
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

      {/* Valuation Factors */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Key Valuation Factors</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Multiple factors influence your business value - we analyze them all
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {factors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all duration-300 text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{factor.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{factor.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Valuation Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Valuation Process</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A systematic approach to determining your business's accurate market value
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

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our comprehensive valuation service provides everything you need to understand your business value and prepare for a potential sale or strategic planning.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0a1f1f] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Valuation Report"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Professional Valuation Services</h2>
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
            <div className="mb-8">
              <div className="text-4xl md:text-5xl font-bold text-[#0a1f1f] mb-2">$2,500</div>
              <div className="text-gray-600 text-lg">Complete Business Valuation</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#0a1f1f] flex-shrink-0" />
                <span className="text-gray-700">Professional valuation report</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#0a1f1f] flex-shrink-0" />
                <span className="text-gray-700">Multiple valuation methods</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#0a1f1f] flex-shrink-0" />
                <span className="text-gray-700">Industry comparisons</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#0a1f1f] flex-shrink-0" />
                <span className="text-gray-700">Value enhancement recommendations</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              *Valuation completed within 7-10 business days. Additional consultation available.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Valuation Expertise</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Our track record in business valuations speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Valuations Completed</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-sm md:text-base">Accuracy Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-300 text-sm md:text-base">Industry Sectors</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">7 Days</div>
              <div className="text-gray-300 text-sm md:text-base">Average Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Get Your Business Valuation</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Discover what your business is worth with our professional valuation service. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Order Valuation Now
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