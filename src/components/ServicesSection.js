import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, ShoppingCart, Rocket, ArrowRight, Star, Target, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Sell Your Business',
      subtitle: 'Maximize Your Exit Value',
      description: 'Transform years of hard work into life-changing wealth. Our proven methodology ensures you achieve the highest possible valuation while maintaining confidentiality throughout the process.',
      features: [
        'Professional Business Valuation',
        'Strategic Marketing & Positioning', 
        'Qualified Buyer Network',
        'Expert Deal Negotiation'
      ],
      href: '/sell',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-500/10',
      imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3',
      stats: { value: '$2.1B+', label: 'In Sales' }
    },
    {
      icon: ShoppingCart,
      title: 'Buy a Business',
      subtitle: 'Find Your Perfect Opportunity',
      description: 'Skip the startup risks and acquire an established, profitable business. We provide exclusive access to premium opportunities and guide you through every step of the acquisition.',
      features: [
        'Exclusive Deal Pipeline',
        'Comprehensive Due Diligence',
        'Financing Solutions',
        'Integration Support'
      ],
      href: '/buy',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-500/10',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3',
      stats: { value: '500+', label: 'Deals Closed' }
    },
    {
      icon: Rocket,
      title: 'Grow Your Business',
      subtitle: 'Scale Beyond Limits',
      description: 'Unlock your business potential with strategic growth initiatives. From operational optimization to market expansion, we help you build a more valuable and scalable enterprise.',
      features: [
        'Strategic Growth Planning',
        'Operational Excellence',
        'Value Enhancement',
        'Exit Readiness Preparation'
      ],
      href: '/grow',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3',
      stats: { value: '2.3x', label: 'Avg Growth' }
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-600 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Our Premium Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Your Success Is Our
            <span className="block bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              Only Mission
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're ready to exit, looking to acquire, or planning to grow, 
            we provide world-class expertise tailored to your unique journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative">
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500 transform scale-95 group-hover:scale-100`} />
                
                <div className="relative card-light h-full overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 mb-6 -mx-8 -mt-8">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className={`absolute top-6 left-6 w-12 h-12 ${service.bgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-6 right-6 text-right">
                      <div className="text-2xl font-bold text-white">{service.stats.value}</div>
                      <div className="text-white/80 text-sm">{service.stats.label}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">{service.subtitle}</p>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-2 h-2 ${service.bgColor} rounded-full`} />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link 
                        href={service.href}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group/btn`}
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-amber-400 text-sm font-medium">
                <Shield className="w-4 h-4" />
                Trusted by Industry Leaders
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Billion Business Brokerage?
            </h3>
            <p className="text-xl text-slate-300 mb-8">
              We don't just complete transactions—we transform lives and build legacies.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-slate-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">25</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">120</div>
                <div className="text-slate-400 text-sm">Days Avg Sale</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;