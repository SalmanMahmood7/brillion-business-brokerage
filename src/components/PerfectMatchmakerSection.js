'use client';
import Image from 'next/image';

const PerfectMatchmakerSection = () => {
  return (
    <div className="bg-[#0a1f1f] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Heading and Image */}
          <div className="space-y-8">
            <div>
              <h5 className="text-white font-bold mb-4">
                <strong>BILLION BUSINESS BROKERAGE</strong>
              </h5>
              <h1 
                className="text-white mb-6"
                style={{
                  fontSize: '40px',
                  lineHeight: '40px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '700',
                  textAlign: 'left'
                }}
              >
                THE PERFECT<br />
                MATCHMAKER
              </h1>
            </div>
            {/* Image positioned after heading with proper spacing */}
            <div className="relative w-full h-[20rem] md:h-[24rem] lg:h-[26rem] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Professional Business Meeting - Perfect Match"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1f]/70 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-6">
            <p className="text-lg leading-relaxed">
              Billion Business Brokerage is an award-winning business brokerage and M&A advisory firm in Toronto, Ontario. Led by passionate minds with diverse-industry knowledge and invaluable market insights, we make it happen for entrepreneurs looking to buy and sell a business. Over the years, our team of highly experienced business brokers has represented & sold hundreds of businesses on behalf of our clients. We have the expertise in identifying a business's full potential, making us the preferred business brokers in Toronto, Ontario.
            </p>
            
            <p className="text-lg leading-relaxed">
              Sellers count on us for proper guidance because we, too, are rooted in values. We understand it's all about what we stand for in your hearts and minds, and we want that to be 'The Perfect Matchmaker.' Our work ethic, industry experience, proven track record and the most comprehensive listings for the perfect match make Billion Business Brokerage the #1 among all business brokerages and M&A advisory firms in Toronto, Ontario.
            </p>
            
            <p className="text-lg leading-relaxed">
              If you are looking to buy or sell a business and want to speak to a business broker or M&A consulting firm in Toronto, Ontario, contact us today for a free & confidential consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectMatchmakerSection;