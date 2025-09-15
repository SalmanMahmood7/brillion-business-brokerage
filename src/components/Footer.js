import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Sell Your Business', href: '/sell' },
    { name: 'Buy a Business', href: '/buy' },
    { name: 'Growth Services', href: '/grow' },
    { name: 'Business Valuation', href: '/sell/valuation' },
    { name: 'M&A Advisory', href: '/services/ma' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Success Stories', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const resources = [
    { name: 'Business Resources', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Market Reports', href: '/reports' },
    { name: 'Seller Guide', href: '/guides/seller' },
    { name: 'Buyer Guide', href: '/guides/buyer' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/brillion-business', 
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/brillionbusiness', 
      icon: Facebook,
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/brillionbusiness', 
      icon: Twitter,
      color: 'hover:text-sky-400'
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/brillionbusiness', 
      icon: Instagram,
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <footer className="bg-[#0a1f1f] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div>
                <div className="text-white text-2xl font-light tracking-wider">BRILLION</div>
                <div className="text-gray-400 text-sm">Business Brokerage</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Canada's premier business brokerage firm. We transform business ownership dreams into reality through expert guidance and proven processes.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(416) 333-7999</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@brillionbusiness.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Toronto, ON Canada</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Get latest opportunities delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-white/20 transition-all duration-300 text-sm"
              />
              <button className="w-full bg-white hover:bg-gray-100 text-[#0a1f1f] font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                Subscribe
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#061414]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <p>© {currentYear} Brillion Business. All rights reserved.</p>
              <div className="hidden md:flex items-center gap-1 text-xs">
                <Shield className="w-3 h-3" />
                <span>Licensed Business Brokers</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;