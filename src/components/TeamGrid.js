'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const TeamGrid = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock team data - will be replaced with Firebase data
  const mockTeam = [
    {
      id: '1',
      name: 'John Anderson',
      role: 'Managing Partner & Senior Business Broker',
      email: 'john.anderson@brillionbusiness.com',
      phone: '(416) 333-7999',
      bio: 'With over 20 years of experience in business brokerage and M&A, John has successfully facilitated over 200 business transactions. He specializes in technology and manufacturing sectors.',
      imageUrl: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/johnanderson',
      order: 1
    },
    {
      id: '2',
      name: 'Sarah Mitchell',
      role: 'Senior Business Advisor',
      email: 'sarah.mitchell@brillionbusiness.com',
      phone: '(613) 555-0123',
      bio: 'Sarah brings 15 years of corporate finance and business development expertise. She focuses on healthcare and professional services acquisitions.',
      imageUrl: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/sarahmitchell',
      order: 2
    },
    {
      id: '3',
      name: 'Michael Chen',
      role: 'Business Valuation Specialist',
      email: 'michael.chen@brillionbusiness.com',
      phone: '(780) 555-0456',
      bio: 'CPA and Chartered Business Valuator with expertise in complex business valuations. Michael has valued over 500 businesses across various industries.',
      imageUrl: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/michaelchen',
      order: 3
    },
    {
      id: '4',
      name: 'Lisa Rodriguez',
      role: 'M&A Transaction Manager',
      email: 'lisa.rodriguez@brillionbusiness.com',
      phone: '(905) 555-0789',
      bio: 'Former investment banker with 12 years of M&A experience. Lisa manages complex transactions and ensures smooth closings for our clients.',
      imageUrl: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/lisarodriguez',
      order: 4
    },
    {
      id: '5',
      name: 'David Thompson',
      role: 'Business Development Director',
      email: 'david.thompson@brillionbusiness.com',
      phone: '(416) 333-7999',
      bio: 'David leads our business development initiatives and client relationship management. He has a strong background in sales and marketing.',
      imageUrl: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/davidthompson',
      order: 5
    },
    {
      id: '6',
      name: 'Jennifer Walsh',
      role: 'Operations Manager',
      email: 'jennifer.walsh@brillionbusiness.com',
      phone: '(613) 555-0123',
      bio: 'Jennifer oversees daily operations and ensures our processes run smoothly. She has 10 years of experience in business operations and project management.',
      imageUrl: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/jenniferwalsh',
      order: 6
    }
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setTeam(mockTeam.sort((a, b) => a.order - b.order));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-lg h-96 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member) => (
        <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          {/* Photo */}
          <div className="relative h-64 bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-400">Team Member Photo</div>
            </div>
          </div>
          
          {/* Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {member.name}
            </h3>
            
            <p className="text-blue-600 font-semibold mb-4">
              {member.role}
            </p>
            
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {member.bio}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                <a 
                  href={`mailto:${member.email}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {member.email}
                </a>
              </div>
              
              <div className="flex items-center text-sm text-gray-700">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <a 
                  href={`tel:${member.phone}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {member.phone}
                </a>
              </div>
              
              {member.linkedin && (
                <div className="flex items-center text-sm text-gray-700">
                  <Linkedin className="h-4 w-4 mr-2 text-gray-500" />
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <div className="mt-6">
              <a 
                href={`mailto:${member.email}?subject=Inquiry about Business Services`}
                className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium block"
              >
                Contact {member.name.split(' ')[0]}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;