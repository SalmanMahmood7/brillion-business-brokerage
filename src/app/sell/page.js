import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Users, TrendingUp, Shield, ArrowRight, Clock, DollarSign, FileText, Star } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function Sell() {
  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your goals, timeline, and business details to create a customized selling strategy.'
    },
    {
      step: 2,
      title: 'Business Valuation',
      description: 'Our experts conduct a thorough valuation using multiple methodologies to determine optimal pricing.'
    },
    {
      step: 3,
      title: 'Preparation & Marketing',
      description: 'We prepare marketing materials and list your business on our exclusive network and databases.'
    },
    {
      step: 4,
      title: 'Buyer Qualification',
      description: 'We screen and qualify potential buyers to ensure serious inquiries and protect confidentiality.'
    },
    {
      step: 5,
      title: 'Negotiation & Due Diligence',
      description: 'We handle negotiations and guide buyers through due diligence while protecting your interests.'
    },
    {
      step: 6,
      title: 'Closing',
      description: 'We coordinate with lawyers, accountants, and other professionals to ensure a smooth closing.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Tech Consulting Firm',
      content: 'The team at Billion Business Brokerage helped us achieve a sale price 20% higher than our initial expectations. Their expertise in the tech sector was invaluable.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      business: 'Manufacturing Company',
      content: 'Professional, efficient, and results-driven. They handled every aspect of the sale process and made it stress-free for us.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      business: 'Retail Chain',
      content: 'From valuation to closing, their team was with us every step of the way. Highly recommend their services.',
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Maximum Value",
      description: "We ensure you get the highest possible price for your business through strategic marketing and negotiation."
    },
    {
      icon: Users,
      title: "Qualified Buyers",
      description: "Access to our extensive network of pre-qualified, serious buyers ready to invest."
    },
    {
      icon: Shield,
      title: "Confidential Process",
      description: "Maintain complete confidentiality throughout the sale process to protect your business operations."
    },
    {
      icon: Clock,
      title: "Faster Sales",
      description: "Our proven process and marketing strategies typically result in quicker sales than DIY approaches."
    }
  ];

  const services = [
    "Business Valuation & Financial Analysis",
    "Marketing & Buyer Outreach", 
    "Confidential Information Management",
    "Buyer Qualification & Screening",
    "Deal Negotiation & Structuring",
    "Due Diligence Coordination",
    "Legal & Financial Documentation",
    "Closing Support & Transition Planning"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section - Larger for better navbar spacing */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden">
        {/* Background image for entire screen including navbar */}
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{top: '-80px'}}>
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Sell Your Business Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Sell</span> Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Maximize your business value with Canada's premier business brokerage firm. We handle every aspect of the sale process.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sell With Us - Responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Sell With Billion Business?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our proven track record and expertise ensure the best outcome for your business sale
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

      {/* Services Included - Responsive */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Complete Service Package</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When you work with Billion Business Brokerage, you get a comprehensive suite of services designed to ensure a successful sale. Our experienced team handles every detail.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Professional Business Services"
                width={650}
                height={430}
                className="rounded-xl shadow-2xl w-full h-auto object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - Responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A systematic approach designed to maximize value and minimize stress
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

      {/* Statistics - Responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Selling Success</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Numbers that demonstrate our commitment to seller success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-gray-50 shadow-lg p-6 md:p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1f1f] mb-2">330+</div>
              <div className="text-gray-600 text-sm md:text-base">Businesses Sold</div>
            </div>
            <div className="bg-gray-50 shadow-lg p-6 md:p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1f1f] mb-2">$144M+</div>
              <div className="text-gray-600 text-sm md:text-base">Total Sale Value</div>
            </div>
            <div className="bg-gray-50 shadow-lg p-6 md:p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1f1f] mb-2">79</div>
              <div className="text-gray-600 text-sm md:text-base">Avg. Interested Buyers</div>
            </div>
            <div className="bg-gray-50 shadow-lg p-6 md:p-8 rounded-xl text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1f1f] mb-2">95%</div>
              <div className="text-gray-600 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Responsive */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Hear from business owners who successfully sold with our help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-gray-500">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive with Background Image */}
      <section className="relative py-16 md:py-24 bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Business Valuation Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-[#0a1f1f]/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Sell Your Business?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4 text-gray-300">
            Get a free business valuation and discover what your business is worth in today's market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/sell/valuation"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base shadow-lg hover:shadow-xl"
            >
              Get Free Valuation
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}