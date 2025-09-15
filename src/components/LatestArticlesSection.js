import Image from 'next/image';
import Link from 'next/link';

const LatestArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: "Creative Strategies for Closing the Price Gap in Business Transactions",
      category: "SELLER ARTICLES",
      excerpt: "When buying or selling a business, the question of price is often the most contentious point. Sellers typically aim for all-cash transactions, hoping to receive the full value upfront. However, in mid...",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "September 6, 2025",
      href: "/articles/creative-strategies-closing-price-gap"
    },
    {
      id: 2,
      title: "The Essential Guide to Creating a Partnership Agreement",
      category: "SELLER ARTICLES",
      excerpt: "When starting a business with a partner, whether it's a friend, family member, or colleague, people often find that it's tempting to skip formalizing things with a written agreement because there is a...",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "August 30, 2025",
      href: "/articles/essential-guide-partnership-agreement"
    },
    {
      id: 3,
      title: "Key Considerations for a Successful M&A Transaction",
      category: "SELLER ARTICLES",
      excerpt: "When it comes to mergers and acquisitions (M&A), there are several common misconceptions that can impact the success of a deal. These misunderstandings often stem from oversimplified assumptions a...",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "August 23, 2025",
      href: "/articles/key-considerations-successful-ma-transaction"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            OUR LATEST ARTICLES
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-20 h-1 bg-gray-900"></div>
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            <div className="w-20 h-1 bg-gray-900"></div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group h-full overflow-hidden border-0">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-[#0a1f1f] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Link href={article.href}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-slate-700 transition-colors group-hover:text-slate-700 line-clamp-2">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {article.date}
                  </span>
                </div>

                {/* Read More Button */}
                <div className="text-center">
                  <Link
                    href={article.href}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 group/btn text-sm"
                  >
                    READ MORE
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-slate-900 px-8 py-4 font-semibold transition-all duration-500 hover:bg-slate-900 hover:text-white hover:shadow-2xl hover:scale-105 rounded-xl inline-flex items-center justify-center gap-2"
          >
            <span className="relative z-10 tracking-widest">VIEW ALL ARTICLES</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;