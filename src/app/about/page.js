import Image from 'next/image';
import Link from 'next/link';
import { Shield, Users, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function About() {
  const stats = [
    {
      icon: TrendingUp,
      number: '330+',
      label: 'Successful Transactions',
      description: 'Completed business sales and acquisitions'
    },
    {
      icon: Users,
      number: '79',
      label: 'Average Interested Buyers',
      description: 'Per deal - ensuring competitive offers'
    },
    {
      icon: Award,
      number: '12',
      label: 'Expert Brokers',
      description: 'Experienced M&A advisors on our team'
    },
    {
      icon: Shield,
      number: '$144M+',
      label: 'Transaction Value',
      description: 'Total value of businesses sold'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "We operate with complete transparency and honesty in every transaction."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We tailor our approach to your unique needs."
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "We deliver measurable outcomes that exceed expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of professionalism and service quality."
    }
  ];

  const team = [
    {
      name: "Michael Johnson",
      position: "Managing Partner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "20+ years of M&A experience with over $500M in transactions completed."
    },
    {
      name: "Hamza Khan",
      position: "Senior Business Broker",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Expert in technology and healthcare business acquisitions."
    },
    {
      name: "David Rodriguez",
      position: "M&A Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Specializes in manufacturing and retail business transactions."
    }
  ];

  const milestones = [
    { year: "2015", event: "Billion Business Brokerage Founded" },
    { year: "2017", event: "Reached $50M in Total Transaction Value" },
    { year: "2019", event: "Expanded to Western Canada" },
    { year: "2021", event: "Achieved $100M Milestone" },
    { year: "2023", event: "Launched Digital Platform" },
    { year: "2025", event: "Reached $144M in Total Deals" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section - Smaller & Responsive */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{top: '-80px'}}>
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="About Us Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Billion Business</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Canada's premier business brokerage firm, transforming ownership dreams into reality through expert guidance and proven processes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Founded in 2015, Billion Business Brokerage emerged from a simple vision: to bridge the gap between business sellers and buyers with unparalleled expertise and integrity. Our founders recognized that the business transfer market needed a more sophisticated, client-focused approach.
              </p>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Over the years, we've built a reputation for delivering exceptional results, completing over 330 transactions worth more than $144 million. Our success stems from our deep understanding of market dynamics and our commitment to creating win-win scenarios for all parties involved.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-[#0a1f1f] mb-2">330+</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-600">Deals Completed</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-[#0a1f1f] mb-2">$144M+</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-600">Transaction Value</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Numbers that speak to our experience and success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300">
                  <div className="bg-[#0a1f1f] rounded-full p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values - Responsive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-2xl transition-all duration-300 text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team - Responsive */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Meet the experienced professionals driving our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#0a1f1f] font-semibold mb-3 md:mb-4 text-sm md:text-base">{member.position}</p>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section - Responsive */}
      <section className="relative py-16 md:py-24 bg-[#0a1f1f] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Ready to Work Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Work With Us?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let our experienced team help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/sell"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}