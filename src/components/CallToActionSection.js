import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          ARE YOU READY TO SELL?
        </h2>
        
        <Link 
          href="/sell"
          className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold text-base transition-all duration-500 hover:bg-white hover:text-teal-900 hover:shadow-2xl hover:scale-105 rounded-xl inline-flex items-center justify-center gap-3"
        >
          <span className="relative z-10 tracking-widest">GET STARTED TODAY WITH A FREE CONSULTATION</span>
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;