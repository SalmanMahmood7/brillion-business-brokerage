'use client';

import { useState, useEffect } from 'react';
import { Users, Building2, Mail, BarChart3, Shield, LogOut } from 'lucide-react';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    listings: 0,
    teamMembers: 0,
    contacts: 0,
    activeListings: 0
  });

  useEffect(() => {
    checkAuth();
    loadStats();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        window.location.href = '/admin/login';
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      window.location.href = '/admin/login';
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      // Load statistics from various endpoints
      const [listingsRes, teamRes] = await Promise.all([
        fetch('/api/listings'),
        fetch('/api/team')
      ]);

      if (listingsRes.ok && teamRes.ok) {
        const listingsData = await listingsRes.json();
        const teamData = await teamRes.json();

        setStats({
          listings: listingsData.listings?.length || 0,
          teamMembers: teamData.team?.length || 0,
          contacts: 0, // Would be loaded from contacts API
          activeListings: listingsData.listings?.filter(l => l.status === 'active')?.length || 0
        });
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const dashboardCards = [
    {
      title: 'Total Listings',
      value: stats.listings,
      icon: Building2,
      color: 'bg-blue-500',
      href: '/admin/listings'
    },
    {
      title: 'Active Listings',
      value: stats.activeListings,
      icon: BarChart3,
      color: 'bg-green-500',
      href: '/admin/listings'
    },
    {
      title: 'Team Members',
      value: stats.teamMembers,
      icon: Users,
      color: 'bg-purple-500',
      href: '/admin/team'
    },
    {
      title: 'Contact Messages',
      value: stats.contacts,
      icon: Mail,
      color: 'bg-orange-500',
      href: '/admin/contacts'
    }
  ];

  const quickActions = [
    { title: 'Add New Listing', href: '/admin/listings/new', color: 'bg-blue-600' },
    { title: 'Add Team Member', href: '/admin/team/new', color: 'bg-green-600' },
    { title: 'View Messages', href: '/admin/contacts', color: 'bg-purple-600' },
    { title: 'Site Settings', href: '/admin/settings', color: 'bg-gray-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.username}</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                  </div>
                  <div className={`${card.color} rounded-full p-3`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <a
                  href={card.href}
                  className="text-blue-600 text-sm hover:text-blue-700 transition-colors mt-2 inline-block"
                >
                  View Details →
                </a>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className={`${action.color} text-white p-4 rounded-lg text-center hover:opacity-90 transition-opacity`}
              >
                {action.title}
              </a>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <p className="font-medium text-gray-900">New listing added</p>
                <p className="text-sm text-gray-600">Tech Consulting Firm - $750,000</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Contact form submission</p>
                <p className="text-sm text-gray-600">John Smith - Interested in buying</p>
              </div>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <p className="font-medium text-gray-900">Listing updated</p>
                <p className="text-sm text-gray-600">Restaurant Chain - Status changed to Sold</p>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Team member added</p>
                <p className="text-sm text-gray-600">Jennifer Walsh - Operations Manager</p>
              </div>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}