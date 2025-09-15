import Link from 'next/link';
import { TrendingUp, ShoppingCart, Rocket } from 'lucide-react';

const ServicesOffered = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'SELL A BUSINESS',
      description: 'We at BILLION BUSINESS BROKERAGE have what it takes. The knowledge, expertise and resources to sell your business. We know how to find the perfect match. After all, we are the preferred business matchmaker in Canada.',
      href: '/sell',
      iconColor: 'text-emerald-600'
    },
    {
      icon: ShoppingCart,
      title: 'BUY A BUSINESS',
      description: "As one of Canada's largest independent business brokerage firms, we at Billion Business Brokerage have a large inventory of businesses for sale across all industries. Our inventory of businesses for sale includes both Main Street businesses (those valued at less than $1 million) and Middle Market businesses (those valued above $1 million).",
      href: '/buy',
      iconColor: 'text-blue-600'
    },
    {
      icon: Rocket,
      title: 'GROW MY BUSINESS',
      description: 'We at BILLION BUSINESS BROKERAGE provide growth advisory services alongside a business exit coach to ensure that your business is ready for a profitable sale. We offer tailor made solutions so that your business is more appealing to buyers in the market.',
      href: '/grow',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            SERVICES OFFERED
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-20 h-1 bg-[#0a1f1f]"></div>
            <div className="w-3 h-3 bg-[#0a1f1f] rounded-full"></div>
            <div className="w-20 h-1 bg-[#0a1f1f]"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white border border-gray-200 p-10 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-10 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0a1f1f] text-[#0a1f1f] font-semibold hover:bg-[#0a1f1f] hover:text-white transition-all duration-300 text-sm tracking-wider rounded-lg"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;