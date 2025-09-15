import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { Award, Users, TrendingUp, Shield, ArrowRight, Mail, Linkedin, CheckCircle, Star } from 'lucide-react';

export default function Team() {
  const leadership = [
    {
      name: "Michael Johnson",
      position: "Managing Partner & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "With over 20 years of M&A experience, Michael has led transactions totaling more than $500M. He specializes in technology and healthcare acquisitions, bringing deep industry knowledge and strategic insight to every deal.",
      achievements: ["500+ Transactions", "MBA Finance", "CPA Designation", "20+ Years Experience"],
      linkedin: "#",
      email: "michael@brillionbusiness.com"
    },
    {
      name: "Hamza Khan",
      position: "Senior Partner & Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Hamza leads our operational excellence initiatives and specializes in technology and healthcare business acquisitions. His analytical approach and attention to detail ensure successful outcomes for our clients.",
      achievements: ["Technology Expert", "Operations Leader", "Due Diligence Specialist", "15+ Years Experience"],
      linkedin: "#",
      email: "hamza@brillionbusiness.com"
    },
    {
      name: "David Rodriguez",
      position: "Senior M&A Advisor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "David brings extensive experience in manufacturing and retail business transactions. His deep understanding of operational complexities helps clients navigate complex deals and achieve optimal outcomes.",
      achievements: ["Manufacturing Expert", "Retail Specialist", "Transaction Leader", "18+ Years Experience"],
      linkedin: "#",
      email: "david@brillionbusiness.com"
    }
  ];

  const advisors = [
    {
      name: "Jennifer Walsh",
      position: "Business Valuation Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      expertise: "Certified Business Appraiser with expertise in complex valuation methodologies"
    },
    {
      name: "Robert Kim",
      position: "Legal Counsel",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      expertise: "Corporate law expert specializing in M&A transactions and regulatory compliance"
    },
    {
      name: "Lisa Thompson",
      position: "Financial Analyst",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      expertise: "CFA with deep expertise in financial modeling and due diligence analysis"
    },
    {
      name: "James Miller",
      position: "Industry Consultant",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      expertise: "Former Fortune 500 executive with 25+ years in strategic planning"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with the highest ethical standards and complete transparency in all our dealings."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Our clients' success is our success. We are committed to achieving the best possible outcomes."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from initial consultation to deal closing."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Deep industry knowledge and experience across multiple sectors and transaction types."
    }
  ];

  const stats = [
    {
      number: "12",
      label: "Expert Team Members",
      description: "Experienced professionals"
    },
    {
      number: "330+",
      label: "Successful Transactions",
      description: "Completed deals"
    },
    {
      number: "$144M+",
      label: "Transaction Value",
      description: "Total deal value"
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      description: "Success rate"
    }
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section - Smaller */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Our Team"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0a1f1f]/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Expert Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Experienced professionals dedicated to helping you achieve your business goals through expert guidance and proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Meet the experienced professionals driving our success and guiding our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Contact Icons */}
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <a href={`mailto:${member.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href={member.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#0a1f1f] font-semibold mb-4 text-sm md:text-base">{member.position}</p>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">{member.bio}</p>
                  
                  {/* Achievements */}
                  <div className="grid grid-cols-2 gap-2">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0a1f1f] flex-shrink-0" />
                        <span className="text-xs md:text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Advisory Team</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Specialized experts who provide additional depth and expertise to our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                  <p className="text-[#0a1f1f] font-semibold mb-3 text-sm">{advisor.position}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{advisor.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The principles that guide everything we do and drive our commitment to excellence
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

      {/* Team Statistics */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Numbers that demonstrate our team's experience and success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg md:text-xl font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Industry recognition for our excellence in business brokerage and M&A advisory
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Top Business Broker 2024</h3>
              <p className="text-gray-600 text-sm">Canadian Business Brokerage Association</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence in M&A 2023</h3>
              <p className="text-gray-600 text-sm">M&A Advisor Magazine</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#0a1f1f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Client Choice Award 2023</h3>
              <p className="text-gray-600 text-sm">Business Services Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Work With Our Team?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Experience the difference that expert guidance and personalized service can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}