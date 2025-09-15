import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { Handshake, TrendingUp, Shield, Users, CheckCircle, ArrowRight, Target, BarChart3, FileText, Briefcase } from 'lucide-react';

export default function MAAdvisory() {
  const services = [
    {
      icon: Target,
      title: "Strategic Acquisition Planning",
      description: "Identify and evaluate acquisition targets that align with your growth strategy.",
      features: ["Market Research", "Target Identification", "Strategic Fit Analysis", "Acquisition Criteria Development"]
    },
    {
      icon: FileText,
      title: "Deal Structuring",
      description: "Structure transactions to optimize value and minimize risk for all parties.",
      features: ["Purchase Price Allocation", "Payment Terms", "Earnout Structures", "Risk Mitigation"]
    },
    {
      icon: BarChart3,
      title: "Due Diligence Management",
      description: "Comprehensive due diligence process to uncover opportunities and risks.",
      features: ["Financial Analysis", "Operational Review", "Legal Compliance", "Market Position Assessment"]
    },
    {
      icon: Handshake,
      title: "Transaction Execution",
      description: "End-to-end transaction management from LOI to closing.",
      features: ["Negotiation Support", "Documentation Review", "Closing Coordination", "Post-Merger Integration"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Accelerated Growth",
      description: "Achieve rapid expansion through strategic acquisitions and mergers."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Professional guidance to identify and mitigate transaction risks."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Access to experienced M&A professionals and industry specialists."
    },
    {
      icon: Briefcase,
      title: "Market Access",
      description: "Leverage our network to access off-market opportunities and buyers."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Define M&A objectives, criteria, and strategic rationale for transactions."
    },
    {
      step: "02",
      title: "Target Identification",
      description: "Research and identify potential acquisition targets or merger partners."
    },
    {
      step: "03",
      title: "Initial Evaluation",
      description: "Preliminary assessment of strategic fit, financial metrics, and synergies."
    },
    {
      step: "04",
      title: "Due Diligence",
      description: "Comprehensive analysis of financial, operational, and legal aspects."
    },
    {
      step: "05",
      title: "Negotiation & Structuring",
      description: "Lead negotiations and structure the deal for optimal outcomes."
    },
    {
      step: "06",
      title: "Closing & Integration",
      description: "Manage closing process and support post-transaction integration."
    }
  ];

  const industries = [
    {
      name: "Technology",
      description: "Software, SaaS, and tech-enabled services",
      transactions: "45+ deals completed"
    },
    {
      name: "Healthcare",
      description: "Medical practices and healthcare services",
      transactions: "35+ deals completed"
    },
    {
      name: "Manufacturing",
      description: "Industrial and production businesses",
      transactions: "28+ deals completed"
    },
    {
      name: "Professional Services",
      description: "Consulting, legal, and business services",
      transactions: "40+ deals completed"
    }
  ];

  const capabilities = [
    "Buy-side and sell-side M&A advisory",
    "Strategic planning and market analysis",
    "Financial modeling and valuation",
    "Due diligence coordination",
    "Deal structuring and negotiation",
    "Regulatory compliance guidance",
    "Integration planning support",
    "Cross-border transaction expertise"
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section - Smaller */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="M&A Advisory"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0a1f1f]/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">M&A Advisory</span> Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Strategic mergers and acquisitions advisory services to accelerate your business growth and maximize transaction value.
            </p>
          </div>
        </div>
      </section>

      {/* M&A Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">M&A Advisory Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive M&A services to guide you through complex transactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Our M&A Advisory?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience, expertise, and proven results in complex M&A transactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all duration-300 text-center group">
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

      {/* M&A Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our M&A Process</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A systematic approach to managing complex M&A transactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#0a1f1f] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Deep sector knowledge across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{industry.description}</p>
                <div className="text-sm font-semibold text-[#0a1f1f]">{industry.transactions}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="M&A Capabilities"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our M&A Capabilities</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our comprehensive M&A advisory services cover every aspect of mergers and acquisitions, from initial strategy through successful integration.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0a1f1f] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">M&A Track Record</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Proven success in complex M&A transactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300 text-sm md:text-base">M&A Transactions</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$850M+</div>
              <div className="text-gray-300 text-sm md:text-base">Transaction Value</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300 text-sm md:text-base">Industry Sectors</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">92%</div>
              <div className="text-gray-300 text-sm md:text-base">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready for Strategic Growth?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Explore strategic M&A opportunities with our experienced advisory team. Let's discuss your growth objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Schedule Consultation
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