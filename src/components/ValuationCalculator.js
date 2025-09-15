'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const ValuationCalculator = () => {
  const [formData, setFormData] = useState({
    revenue: '',
    expenses: '',
    industry: 'technology',
    growth: '10'
  });
  const [results, setResults] = useState(null);

  const industryMultipliers = {
    technology: { min: 3, max: 5 },
    manufacturing: { min: 2, max: 4 },
    retail: { min: 1.5, max: 3 },
    food: { min: 1, max: 2.5 },
    healthcare: { min: 2.5, max: 4.5 },
    services: { min: 2, max: 3.5 }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateValuation = (e) => {
    e.preventDefault();
    
    const revenue = parseFloat(formData.revenue) || 0;
    const expenses = parseFloat(formData.expenses) || 0;
    const ebitda = revenue - expenses;
    
    if (ebitda <= 0) {
      alert('EBITDA must be positive for valuation calculation');
      return;
    }

    const multiplier = industryMultipliers[formData.industry];
    const growthFactor = 1 + (parseFloat(formData.growth) / 100);
    
    const lowValuation = ebitda * multiplier.min * growthFactor;
    const highValuation = ebitda * multiplier.max * growthFactor;
    const avgValuation = (lowValuation + highValuation) / 2;

    setResults({
      revenue,
      expenses,
      ebitda,
      lowValuation,
      highValuation,
      avgValuation,
      multiplier: `${multiplier.min}x - ${multiplier.max}x`
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Business Valuation Calculator</h2>
      </div>
      
      <p className="text-gray-600 mb-8">
        Get an estimated valuation range for your business based on industry standards and financial performance.
      </p>

      <form onSubmit={calculateValuation} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Revenue ($)
            </label>
            <input
              type="number"
              name="revenue"
              value={formData.revenue}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="1,000,000"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Expenses ($)
            </label>
            <input
              type="number"
              name="expenses"
              value={formData.expenses}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="800,000"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="technology">Technology</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="food">Food & Beverage</option>
              <option value="healthcare">Healthcare</option>
              <option value="services">Professional Services</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Annual Growth (%)
            </label>
            <input
              type="number"
              name="growth"
              value={formData.growth}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="10"
              min="0"
              max="100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Calculate Valuation
        </button>
      </form>

      {results && (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
            Valuation Results
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Annual Revenue</div>
              <div className="text-xl font-semibold text-gray-900">
                {formatCurrency(results.revenue)}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Annual Expenses</div>
              <div className="text-xl font-semibold text-gray-900">
                {formatCurrency(results.expenses)}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg mb-6">
            <div className="text-sm text-gray-500 mb-1">EBITDA (Revenue - Expenses)</div>
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(results.ebitda)}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 mr-2" />
              <h4 className="text-lg font-semibold">Estimated Business Value</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm opacity-90 mb-1">Low Estimate</div>
                <div className="text-xl font-bold">
                  {formatCurrency(results.lowValuation)}
                </div>
              </div>
              <div>
                <div className="text-sm opacity-90 mb-1">Average Estimate</div>
                <div className="text-2xl font-bold">
                  {formatCurrency(results.avgValuation)}
                </div>
              </div>
              <div>
                <div className="text-sm opacity-90 mb-1">High Estimate</div>
                <div className="text-xl font-bold">
                  {formatCurrency(results.highValuation)}
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm opacity-90">
              Based on industry multiplier: {results.multiplier}
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            * This is an estimated valuation range based on industry standards. 
            Actual valuation may vary based on many factors including market conditions, 
            business assets, customer base, and growth potential.
          </div>
        </div>
      )}
    </div>
  );
};

export default ValuationCalculator;