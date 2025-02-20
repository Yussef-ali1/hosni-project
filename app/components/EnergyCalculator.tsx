import React, { useState } from 'react';
import { BarChart, Activity, ArrowRight } from 'lucide-react';

export default function EnergySavingsCalculator() {
  const [formData, setFormData] = useState({
    homeSize: 1500,
    residents: 2,
    currentBulbs: 20,
    applianceAge: 5
  });
  
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value)
    });
  };

  const calculateSavings = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      // Basic calculation logic
      const energyBaseline = formData.homeSize * 0.5; // kWh per sq ft per month
      const residentFactor = formData.residents * 150; // kWh per person per month
      const bulbSavings = formData.currentBulbs * 5; // Savings by switching to LED
      const applianceFactor = Math.max(0, formData.applianceAge - 3) * 50; // Older appliances use more energy
      
      const currentEnergy = energyBaseline + residentFactor + applianceFactor;
      const potentialEnergy = currentEnergy - bulbSavings - (applianceFactor * 0.7);
      const energySavings = currentEnergy - potentialEnergy;
      
      // CO2 calculation (approximately 0.4 kg CO2 per kWh)
      const currentCO2 = currentEnergy * 0.4;
      const potentialCO2 = potentialEnergy * 0.4;
      const co2Savings = currentCO2 - potentialCO2;
      
      setResults({
        currentEnergy: currentEnergy,
        potentialEnergy: potentialEnergy,
        energySavings: energySavings,
        currentCO2: currentCO2,
        potentialCO2: potentialCO2,
        co2Savings: co2Savings,
        yearlySavings: energySavings * 12 * 0.15 // Approx $0.15 per kWh
      });
      
      setIsCalculating(false);
    }, 800);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Calculator Intro */}
          <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pr-8">
            <div className="flex items-center mb-4">
              <BarChart className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Energy & CO₂ Savings Calculator</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Find out how much you can save on energy and reduce your carbon footprint!
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Enter Your Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Home Size (sq ft): {formData.homeSize}
                  </label>
                  <input
                    type="range"
                    name="homeSize"
                    min="500"
                    max="5000"
                    step="100"
                    value={formData.homeSize}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Residents: {formData.residents}
                  </label>
                  <input
                    type="range"
                    name="residents"
                    min="1"
                    max="8"
                    value={formData.residents}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Light Bulbs: {formData.currentBulbs}
                  </label>
                  <input
                    type="range"
                    name="currentBulbs"
                    min="5"
                    max="50"
                    value={formData.currentBulbs}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average Appliance Age (years): {formData.applianceAge}
                  </label>
                  <input
                    type="range"
                    name="applianceAge"
                    min="0"
                    max="15"
                    value={formData.applianceAge}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <button
                  onClick={calculateSavings}
                  disabled={isCalculating}
                  className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  {isCalculating ? (
                    <><Activity className="animate-spin h-5 w-5 mr-2" /> Calculating...</>
                  ) : (
                    'Calculate My Savings'
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Results Display */}
          <div className="w-full md:w-7/12">
            {results ? (
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Your Sustainability Impact</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Monthly Energy Usage</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Current:</span>
                      <span className="text-red-600 font-bold">{results.currentEnergy.toFixed(0)} kWh</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Potential:</span>
                      <span className="text-green-600 font-bold">{results.potentialEnergy.toFixed(0)} kWh</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t mt-2">
                      <span className="text-gray-600">You could save:</span>
                      <span className="text-green-600 font-bold">{results.energySavings.toFixed(0)} kWh</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">CO₂ Emissions</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Current:</span>
                      <span className="text-red-600 font-bold">{results.currentCO2.toFixed(1)} kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Potential:</span>
                      <span className="text-green-600 font-bold">{results.potentialCO2.toFixed(1)} kg</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t mt-2">
                      <span className="text-gray-600">You could reduce:</span>
                      <span className="text-green-600 font-bold">{results.co2Savings.toFixed(1)} kg</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg mb-6">
                  <h4 className="text-xl font-bold text-center mb-2">Yearly Impact</h4>
                  <div className="flex flex-col sm:flex-row justify-around items-center gap-4">
                    <div className="text-center">
                      <p className="text-gray-600">Financial Savings</p>
                      <p className="text-3xl font-bold text-green-600">${results.yearlySavings.toFixed(0)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600">Energy Saved</p>
                      <p className="text-3xl font-bold text-blue-600">{(results.energySavings * 12).toFixed(0)} kWh</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600">CO₂ Reduction</p>
                      <p className="text-3xl font-bold text-teal-600">{(results.co2Savings * 12).toFixed(0)} kg</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href="/green-products" 
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
                  >
                    Explore Eco-Friendly Products <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center h-full flex flex-col justify-center items-center">
                <BarChart className="h-16 w-16 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Calculate Your Impact?</h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Enter your details on the left and discover how much energy, money, and CO₂ emissions you could save by switching to sustainable alternatives.
                </p>
                <button
                  onClick={() => document.querySelector('input[name="homeSize"]').focus()}
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
                >
                  Try It Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}