'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, Target } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const EBITDACalculator = () => {
  const [formData, setFormData] = useState({
    revenue: '',
    cogs: '',
    operatingExpenses: '',
    depreciation: '',
    amortization: ''
  });
  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateEBITDA = (e) => {
    e.preventDefault();
    
    const revenue = parseFloat(formData.revenue) || 0;
    const cogs = parseFloat(formData.cogs) || 0;
    const operatingExpenses = parseFloat(formData.operatingExpenses) || 0;
    const depreciation = parseFloat(formData.depreciation) || 0;
    const amortization = parseFloat(formData.amortization) || 0;

    const grossProfit = revenue - cogs;
    const grossMargin = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
    
    const operatingIncome = grossProfit - operatingExpenses;
    const ebitda = operatingIncome + depreciation + amortization;
    const ebitdaMargin = revenue > 0 ? (ebitda / revenue) * 100 : 0;

    setResults({
      revenue,
      cogs,
      grossProfit,
      grossMargin,
      operatingExpenses,
      operatingIncome,
      depreciation,
      amortization,
      ebitda,
      ebitdaMargin
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-purple-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">EBITDA Calculator</h2>
      </div>
      
      <p className="text-gray-600 mb-8">
        Calculate your Earnings Before Interest, Taxes, Depreciation, and Amortization to understand your business's operating performance.
      </p>

      <form onSubmit={calculateEBITDA} className="space-y-6">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="1,000,000"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cost of Goods Sold ($)
            </label>
            <input
              type="number"
              name="cogs"
              value={formData.cogs}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="400,000"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Operating Expenses ($)
            </label>
            <input
              type="number"
              name="operatingExpenses"
              value={formData.operatingExpenses}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="300,000"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Depreciation ($)
            </label>
            <input
              type="number"
              name="depreciation"
              value={formData.depreciation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="50,000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amortization ($)
            </label>
            <input
              type="number"
              name="amortization"
              value={formData.amortization}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="25,000"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Calculate EBITDA
        </button>
      </form>

      {results && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
            EBITDA Results
          </h3>
          
          {/* Revenue & COGS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Total Revenue</div>
              <div className="text-xl font-semibold text-gray-900">
                {formatCurrency(results.revenue)}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Cost of Goods Sold</div>
              <div className="text-xl font-semibold text-gray-900">
                {formatCurrency(results.cogs)}
              </div>
            </div>
          </div>

          {/* Gross Profit */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-blue-600 mb-1">Gross Profit</div>
                <div className="text-2xl font-bold text-blue-800">
                  {formatCurrency(results.grossProfit)}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-600 mb-1">Gross Margin</div>
                <div className="text-xl font-semibold text-blue-800">
                  {results.grossMargin.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* Operating Income */}
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-green-600 mb-1">Operating Income</div>
                <div className="text-2xl font-bold text-green-800">
                  {formatCurrency(results.operatingIncome)}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-green-600 mb-1">Operating Expenses</div>
                <div className="text-xl font-semibold text-green-800">
                  {formatCurrency(results.operatingExpenses)}
                </div>
              </div>
            </div>
          </div>

          {/* EBITDA - Main Result */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 mr-3" />
              <h4 className="text-2xl font-bold">EBITDA</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">
                  {formatCurrency(results.ebitda)}
                </div>
                <div className="text-purple-200">
                  Earnings Before Interest, Taxes, Depreciation & Amortization
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold mb-2">
                  {results.ebitdaMargin.toFixed(1)}%
                </div>
                <div className="text-purple-200">
                  EBITDA Margin
                </div>
              </div>
            </div>
          </div>

          {/* Calculation Breakdown */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Calculation Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Revenue</span>
                <span>{formatCurrency(results.revenue)}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>- Cost of Goods Sold</span>
                <span>({formatCurrency(results.cogs)})</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>= Gross Profit</span>
                <span>{formatCurrency(results.grossProfit)}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>- Operating Expenses</span>
                <span>({formatCurrency(results.operatingExpenses)})</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>= Operating Income</span>
                <span>{formatCurrency(results.operatingIncome)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>+ Depreciation</span>
                <span>{formatCurrency(results.depreciation)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>+ Amortization</span>
                <span>{formatCurrency(results.amortization)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2 text-purple-600">
                <span>= EBITDA</span>
                <span>{formatCurrency(results.ebitda)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EBITDACalculator;