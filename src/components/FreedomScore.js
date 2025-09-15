'use client';

import { useState } from 'react';
import { Target, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const FreedomScore = () => {
  const [formData, setFormData] = useState({
    weeklyHours: '',
    vacationWeeks: '',
    systemsDocumented: '',
    teamIndependence: '',
    revenueStreams: '',
    customerConcentration: '',
    profitMargin: '',
    cashFlow: ''
  });
  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateFreedomScore = (e) => {
    e.preventDefault();
    
    let totalScore = 0;
    let maxScore = 800; // 8 categories × 100 points each
    
    // Time Freedom (200 points max)
    const weeklyHours = parseInt(formData.weeklyHours) || 0;
    let timeScore = 0;
    if (weeklyHours <= 20) timeScore = 100;
    else if (weeklyHours <= 40) timeScore = 75;
    else if (weeklyHours <= 60) timeScore = 50;
    else if (weeklyHours <= 80) timeScore = 25;
    else timeScore = 0;
    
    const vacationWeeks = parseInt(formData.vacationWeeks) || 0;
    let vacationScore = 0;
    if (vacationWeeks >= 8) vacationScore = 100;
    else if (vacationWeeks >= 4) vacationScore = 75;
    else if (vacationWeeks >= 2) vacationScore = 50;
    else if (vacationWeeks >= 1) vacationScore = 25;
    else vacationScore = 0;

    // Systems & Processes (100 points)
    const systemsScore = parseInt(formData.systemsDocumented) || 0;

    // Team Independence (100 points)
    const teamScore = parseInt(formData.teamIndependence) || 0;

    // Revenue Diversification (100 points)
    const revenueScore = parseInt(formData.revenueStreams) || 0;

    // Customer Concentration Risk (100 points)
    const customerScore = 100 - (parseInt(formData.customerConcentration) || 0);

    // Financial Health (200 points max)
    const profitScore = parseInt(formData.profitMargin) || 0;
    const cashFlowScore = parseInt(formData.cashFlow) || 0;

    totalScore = timeScore + vacationScore + systemsScore + teamScore + 
                 revenueScore + customerScore + profitScore + cashFlowScore;

    const freedomPercentage = (totalScore / maxScore) * 100;

    let level, color, message;
    if (freedomPercentage >= 80) {
      level = 'High Freedom';
      color = 'green';
      message = 'Excellent! Your business provides significant freedom and is well-positioned for growth or sale.';
    } else if (freedomPercentage >= 60) {
      level = 'Moderate Freedom';
      color = 'yellow';
      message = 'Good progress! Focus on the areas below to increase your freedom and business value.';
    } else if (freedomPercentage >= 40) {
      level = 'Limited Freedom';
      color = 'orange';
      message = 'Your business requires significant time investment. Consider systemizing operations.';
    } else {
      level = 'Low Freedom';
      color = 'red';
      message = 'Your business is heavily dependent on you. Focus on building systems and team independence.';
    }

    const breakdown = {
      'Time Investment': {
        score: timeScore + vacationScore,
        max: 200,
        details: [`Weekly Hours: ${weeklyHours}h (${timeScore} pts)`, `Vacation Weeks: ${vacationWeeks} (${vacationScore} pts)`]
      },
      'Systems & Processes': {
        score: systemsScore,
        max: 100,
        details: [`Documentation Level: ${systemsScore}%`]
      },
      'Team Independence': {
        score: teamScore,
        max: 100,
        details: [`Team Autonomy: ${teamScore}%`]
      },
      'Revenue Diversification': {
        score: revenueScore,
        max: 100,
        details: [`Revenue Streams: ${revenueScore} points`]
      },
      'Customer Risk': {
        score: customerScore,
        max: 100,
        details: [`Top Customer Risk: ${100 - customerScore}%`]
      },
      'Financial Health': {
        score: profitScore + cashFlowScore,
        max: 200,
        details: [`Profit Margin: ${profitScore} pts`, `Cash Flow: ${cashFlowScore} pts`]
      }
    };

    setResults({
      totalScore,
      maxScore,
      freedomPercentage,
      level,
      color,
      message,
      breakdown
    });
  };

  const getScoreIcon = (percentage) => {
    if (percentage >= 80) return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (percentage >= 60) return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    if (percentage >= 40) return <AlertCircle className="h-5 w-5 text-orange-500" />;
    return <XCircle className="h-5 w-5 text-red-500" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Target className="h-8 w-8 text-purple-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Business Freedom Score</h2>
      </div>
      
      <p className="text-gray-600 mb-8">
        Assess how much freedom your business provides and identify areas for improvement. 
        A higher score indicates a more valuable and sellable business.
      </p>

      <form onSubmit={calculateFreedomScore} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weekly Hours Worked
            </label>
            <select
              name="weeklyHours"
              value={formData.weeklyHours}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select hours</option>
              <option value="10">0-20 hours</option>
              <option value="30">21-40 hours</option>
              <option value="50">41-60 hours</option>
              <option value="70">61-80 hours</option>
              <option value="90">80+ hours</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vacation Weeks Per Year
            </label>
            <select
              name="vacationWeeks"
              value={formData.vacationWeeks}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select weeks</option>
              <option value="0">0 weeks</option>
              <option value="1">1 week</option>
              <option value="3">2-3 weeks</option>
              <option value="6">4-7 weeks</option>
              <option value="10">8+ weeks</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Systems Documented (%)
            </label>
            <select
              name="systemsDocumented"
              value={formData.systemsDocumented}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select percentage</option>
              <option value="10">0-20%</option>
              <option value="35">21-50%</option>
              <option value="65">51-80%</option>
              <option value="90">81-100%</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Team Independence (%)
            </label>
            <select
              name="teamIndependence"
              value={formData.teamIndependence}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select percentage</option>
              <option value="10">0-20%</option>
              <option value="35">21-50%</option>
              <option value="65">51-80%</option>
              <option value="90">81-100%</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Revenue Stream Diversity
            </label>
            <select
              name="revenueStreams"
              value={formData.revenueStreams}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select diversity</option>
              <option value="20">Single revenue stream</option>
              <option value="40">2-3 revenue streams</option>
              <option value="70">4-5 revenue streams</option>
              <option value="100">6+ revenue streams</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Top Customer % of Revenue
            </label>
            <select
              name="customerConcentration"
              value={formData.customerConcentration}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select percentage</option>
              <option value="10">0-10%</option>
              <option value="25">11-30%</option>
              <option value="50">31-50%</option>
              <option value="75">51-75%</option>
              <option value="90">75%+</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profit Margin Health
            </label>
            <select
              name="profitMargin"
              value={formData.profitMargin}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select range</option>
              <option value="20">Below 5%</option>
              <option value="40">5-10%</option>
              <option value="70">10-20%</option>
              <option value="100">20%+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cash Flow Predictability
            </label>
            <select
              name="cashFlow"
              value={formData.cashFlow}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select predictability</option>
              <option value="20">Highly variable</option>
              <option value="50">Somewhat predictable</option>
              <option value="80">Mostly predictable</option>
              <option value="100">Highly predictable</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Calculate Freedom Score
        </button>
      </form>

      {results && (
        <div className="mt-8 space-y-6">
          <div className={`p-6 rounded-lg text-center ${
            results.color === 'green' ? 'bg-green-100 border border-green-200' :
            results.color === 'yellow' ? 'bg-yellow-100 border border-yellow-200' :
            results.color === 'orange' ? 'bg-orange-100 border border-orange-200' :
            'bg-red-100 border border-red-200'
          }`}>
            <div className={`text-4xl font-bold mb-2 ${
              results.color === 'green' ? 'text-green-800' :
              results.color === 'yellow' ? 'text-yellow-800' :
              results.color === 'orange' ? 'text-orange-800' :
              'text-red-800'
            }`}>
              {Math.round(results.freedomPercentage)}%
            </div>
            <div className={`text-xl font-semibold mb-2 ${
              results.color === 'green' ? 'text-green-800' :
              results.color === 'yellow' ? 'text-yellow-800' :
              results.color === 'orange' ? 'text-orange-800' :
              'text-red-800'
            }`}>
              {results.level}
            </div>
            <p className={`${
              results.color === 'green' ? 'text-green-700' :
              results.color === 'yellow' ? 'text-yellow-700' :
              results.color === 'orange' ? 'text-orange-700' :
              'text-red-700'
            }`}>
              {results.message}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Score Breakdown</h3>
            {Object.entries(results.breakdown).map(([category, data]) => {
              const percentage = (data.score / data.max) * 100;
              return (
                <div key={category} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {getScoreIcon(percentage)}
                      <span className="font-semibold text-gray-900 ml-2">{category}</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {data.score}/{data.max} ({Math.round(percentage)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full ${
                        percentage >= 80 ? 'bg-green-500' :
                        percentage >= 60 ? 'bg-yellow-500' :
                        percentage >= 40 ? 'bg-orange-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {data.details.map((detail, index) => (
                      <div key={index}>{detail}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">Recommendations for Improvement</h4>
            <ul className="space-y-2 text-blue-800">
              {results.freedomPercentage < 80 && (
                <>
                  <li>• Focus on systemizing and documenting your key business processes</li>
                  <li>• Develop your team's skills and decision-making independence</li>
                  <li>• Diversify your revenue streams to reduce business risk</li>
                  <li>• Build predictable, recurring revenue where possible</li>
                  <li>• Create standard operating procedures for all critical functions</li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreedomScore;