import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { TrendingUp, Target, Users, Lightbulb, CheckCircle, ArrowRight, BarChart3, Briefcase, Rocket, Settings } from 'lucide-react';

export default function Grow() {
  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description: "Develop comprehensive growth strategies tailored to your industry and market position.",
      features: ["Market Analysis", "Competitive Positioning", "Growth Roadmaps", "KPI Development"]
    },
    {
      icon: Target,
      title: "Market Expansion",
      description: "Identify and enter new markets, customer segments, and geographic territories.",
      features: ["Market Research", "Customer Segmentation", "Go-to-Market Strategy", "Territory Planning"]
    },
    {
      icon: Users,
      title: "Operational Excellence",
      description: "Optimize operations, improve efficiency, and scale your business infrastructure.",
      features: ["Process Optimization", "System Integration", "Quality Management", "Performance Metrics"]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "Leverage technology and innovation to drive competitive advantage and growth.",
      features: ["Digital Transformation", "Technology Assessment", "Innovation Strategy", "Automation Solutions"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Business Assessment",
      description: "Comprehensive analysis of your current business position, strengths, and growth opportunities."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create customized growth strategies based on your goals, market conditions, and resources."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Develop detailed action plans with timelines, resources, and success metrics."
    },
    {
      step: "04",
      title: "Execution Support",
      description: "Ongoing guidance and support throughout the implementation of growth initiatives."
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Increased Revenue",
      description: "Our clients typically see 25-40% revenue growth within the first year of implementation."
    },
    {
      icon: Target,
      title: "Market Leadership",
      description: "Achieve competitive advantage and establish market leadership in your industry."
    },
    {
      icon: Rocket,
      title: "Accelerated Growth",
      description: "Fast-track your business growth with proven strategies and expert guidance."
    },
    {
      icon: Settings,
      title: "Operational Efficiency",
      description: "Streamline operations and improve productivity while maintaining quality standards."
    }
  ];

  const industries = [
    {
      name: "Technology",
      description: "SaaS, software development, and tech-enabled services",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Healthcare",
      description: "Medical practices, healthcare services, and wellness businesses",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Manufacturing",
      description: "Production facilities, industrial services, and supply chain businesses",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Professional Services",
      description: "Consulting, legal, accounting, and business services firms",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section - Smaller */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{top: '-80px'}}>
          <Image
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Grow Your Business"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Grow</span> Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Accelerate your business growth with strategic consulting and proven methodologies from Canada's premier business advisory firm.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Growth Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive business growth solutions tailored to your unique challenges and opportunities
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

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Growth Process</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A systematic approach to identifying opportunities and implementing sustainable growth strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
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

      {/* Growth Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Our Growth Services?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Proven results and tangible outcomes for businesses ready to scale
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

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Specialized expertise across diverse industry sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-[#0a1f1f] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Business Growth Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Scale Your Business?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Get a free growth consultation and discover how we can accelerate your business expansion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}