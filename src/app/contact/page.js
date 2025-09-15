'use client';

import Navbar from '../../components/Navbar';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageCircle, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(416) 333-7999",
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@brillionbusiness.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Toronto, ON Canada",
      description: "Serving clients across Canada"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      description: "Weekend consultations available"
    }
  ];

  const services = [
    "Business Valuation",
    "Sell Your Business",
    "Buy a Business",
    "Business Growth Consulting",
    "M&A Advisory",
    "General Inquiry"
  ];

  const reasons = [
    {
      icon: MessageCircle,
      title: "Free Consultation",
      description: "Get expert advice and guidance at no cost to explore your options."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "We work around your schedule with evening and weekend appointments."
    },
    {
      icon: CheckCircle,
      title: "No Obligation",
      description: "Discuss your needs without any pressure or commitment required."
    }
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section - Smaller */}
      <section className="relative bg-[#0a1f1f] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{top: '-80px'}}>
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Contact</span> Our Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to take the next step? Get in touch with our experienced team for personalized guidance and solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                      placeholder="Tell us about your business needs and how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0a1f1f] text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="grid grid-cols-1 gap-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#0a1f1f] rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-[#0a1f1f] font-semibold mb-1">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Why Contact Us */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Contact Us?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => {
                    const Icon = reason.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                          <p className="text-gray-600 text-sm">{reason.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Common questions about our services and process
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How long does a business sale typically take?</h3>
              <p className="text-gray-600 leading-relaxed">The business sale process typically takes 4-12 months, depending on factors like business size, industry, and market conditions. We work diligently to optimize timing while ensuring the best possible outcome.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What information do I need for a business valuation?</h3>
              <p className="text-gray-600 leading-relaxed">For an accurate valuation, we'll need financial statements (3-5 years), tax returns, customer lists, operational data, and information about assets and liabilities. We'll guide you through the complete list during our initial consultation.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you work with businesses in all industries?</h3>
              <p className="text-gray-600 leading-relaxed">Yes, we have experience across multiple industries including technology, healthcare, manufacturing, professional services, retail, and more. Our diverse expertise allows us to serve businesses of all types and sizes.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What are your fees and how do they work?</h3>
              <p className="text-gray-600 leading-relaxed">Our fee structure varies by service. Business sales typically involve a success fee (percentage of sale price), while valuations have fixed fees. We're transparent about all costs upfront and ensure our interests are aligned with yours.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-[#0a1f1f] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Contact Us Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Take the first step towards achieving your business goals. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="tel:(416) 333-7999"
              className="bg-white text-[#0a1f1f] px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Call Now: (416) 333-7999
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
            </a>
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