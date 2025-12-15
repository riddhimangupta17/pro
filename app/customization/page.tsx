"use client";

import { useState } from "react";

const models = [
  { name: "Celesté Sedona One S", basePrice: 3500000, category: "sedan" },
  { name: "Celesté Regal LXS", basePrice: 6500000, category: "sedan" },
  { name: "Celesté Luxe ELX Alpha", basePrice: 12000000, category: "sedan" },
  { name: "Celesté Panthera GT X", basePrice: 15000000, category: "sports" },
  { name: "Celesté TurboVain ELITE", basePrice: 28000000, category: "sports" },
  { name: "Celesté Apex-ZR Hyper", basePrice: 42000000, category: "sports" },
];

const colors = [
  { name: "Pearl White", price: 0, hex: "#F8F9FA" },
  { name: "Midnight Black", price: 50000, hex: "#1A1A1A" },
  { name: "Steel Silver", price: 30000, hex: "#B4B4B4" },
  { name: "Royal Blue", price: 75000, hex: "#1E3A8A" },
  { name: "Ruby Red", price: 75000, hex: "#DC2626" },
  { name: "Emerald Green", price: 100000, hex: "#059669" },
];

const tires = [
  { name: "Standard 17-inch Alloys", price: 0 },
  { name: "Premium 18-inch Alloys", price: 150000 },
  { name: "Sport 19-inch Forged", price: 300000 },
  { name: "Performance 20-inch Carbon", price: 500000 },
];

const interiors = [
  { name: "Fabric Interior", price: 0 },
  { name: "Leather Interior", price: 200000 },
  { name: "Premium Leather with Ventilation", price: 400000 },
  { name: "Nappa Leather with Massage", price: 700000 },
];

const upgrades = [
  { name: "Panoramic Sunroof", price: 150000 },
  { name: "Premium Sound System", price: 200000 },
  { name: "Advanced Driver Assistance", price: 300000 },
  { name: "360° Camera System", price: 100000 },
  { name: "Wireless Charging", price: 50000 },
  { name: "Head-Up Display", price: 150000 },
  { name: "Adaptive LED Headlights", price: 100000 },
  { name: "Air Suspension", price: 500000 },
];

export default function CustomizationPage() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedTires, setSelectedTires] = useState(tires[0]);
  const [selectedInterior, setSelectedInterior] = useState(interiors[0]);
  const [selectedUpgrades, setSelectedUpgrades] = useState<typeof upgrades>([]);

  const toggleUpgrade = (upgrade: typeof upgrades[0]) => {
    if (selectedUpgrades.includes(upgrade)) {
      setSelectedUpgrades(selectedUpgrades.filter((u) => u !== upgrade));
    } else {
      setSelectedUpgrades([...selectedUpgrades, upgrade]);
    }
  };

  const calculateTotal = () => {
    let total = selectedModel.basePrice;
    total += selectedColor.price;
    total += selectedTires.price;
    total += selectedInterior.price;
    selectedUpgrades.forEach((upgrade) => {
      total += upgrade.price;
    });
    return total;
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Crore`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Build Your Dream Celesté</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Customize every detail to create your perfect vehicle
          </p>
        </div>
      </section>

      {/* Customization Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-2 space-y-8">
              {/* Model Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Select Your Model</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {models.map((model) => (
                    <button
                      key={model.name}
                      onClick={() => setSelectedModel(model)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedModel.name === model.name
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="font-bold text-lg text-slate-900">{model.name}</div>
                      <div className="text-sm text-gray-600 capitalize">{model.category}</div>
                      <div className="text-blue-600 font-semibold mt-2">
                        {formatPrice(model.basePrice)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Choose Your Color</h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                        selectedColor.name === color.name
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div
                        className="w-16 h-16 rounded-full mb-2 border-2 border-gray-300"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <div className="text-xs text-center font-semibold text-slate-900">
                        {color.name}
                      </div>
                      {color.price > 0 && (
                        <div className="text-xs text-blue-600">+{formatPrice(color.price)}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tires Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Select Tires</h2>
                <div className="space-y-3">
                  {tires.map((tire) => (
                    <button
                      key={tire.name}
                      onClick={() => setSelectedTires(tire)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all flex justify-between items-center ${
                        selectedTires.name === tire.name
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <span className="font-semibold text-slate-900">{tire.name}</span>
                      {tire.price > 0 && (
                        <span className="text-blue-600">+{formatPrice(tire.price)}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interior Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Choose Interior</h2>
                <div className="space-y-3">
                  {interiors.map((interior) => (
                    <button
                      key={interior.name}
                      onClick={() => setSelectedInterior(interior)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all flex justify-between items-center ${
                        selectedInterior.name === interior.name
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <span className="font-semibold text-slate-900">{interior.name}</span>
                      {interior.price > 0 && (
                        <span className="text-blue-600">+{formatPrice(interior.price)}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upgrades Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Add Upgrades</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {upgrades.map((upgrade) => (
                    <button
                      key={upgrade.name}
                      onClick={() => toggleUpgrade(upgrade)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedUpgrades.includes(upgrade)
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{upgrade.name}</div>
                          <div className="text-sm text-blue-600">+{formatPrice(upgrade.price)}</div>
                        </div>
                        {selectedUpgrades.includes(upgrade) && (
                          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Panel - Sticky */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-xl p-6 sticky top-32">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Your Configuration</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="pb-3 border-b">
                    <div className="text-sm text-gray-600">Model</div>
                    <div className="font-semibold text-slate-900">{selectedModel.name}</div>
                    <div className="text-sm text-blue-600">{formatPrice(selectedModel.basePrice)}</div>
                  </div>

                  <div className="pb-3 border-b">
                    <div className="text-sm text-gray-600">Color</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className="w-6 h-6 rounded-full mr-2 border border-gray-300"
                          style={{ backgroundColor: selectedColor.hex }}
                        ></div>
                        <span className="font-semibold text-slate-900">{selectedColor.name}</span>
                      </div>
                      {selectedColor.price > 0 && (
                        <span className="text-sm text-blue-600">+{formatPrice(selectedColor.price)}</span>
                      )}
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <div className="text-sm text-gray-600">Tires</div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-900">{selectedTires.name}</span>
                      {selectedTires.price > 0 && (
                        <span className="text-sm text-blue-600">+{formatPrice(selectedTires.price)}</span>
                      )}
                    </div>
                  </div>

                  <div className="pb-3 border-b">
                    <div className="text-sm text-gray-600">Interior</div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-900">{selectedInterior.name}</span>
                      {selectedInterior.price > 0 && (
                        <span className="text-sm text-blue-600">+{formatPrice(selectedInterior.price)}</span>
                      )}
                    </div>
                  </div>

                  {selectedUpgrades.length > 0 && (
                    <div className="pb-3 border-b">
                      <div className="text-sm text-gray-600 mb-2">Upgrades</div>
                      {selectedUpgrades.map((upgrade) => (
                        <div key={upgrade.name} className="flex justify-between text-sm mb-1">
                          <span className="text-slate-900">{upgrade.name}</span>
                          <span className="text-blue-600">+{formatPrice(upgrade.price)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="text-sm text-gray-600 mb-1">Estimated Total</div>
                  <div className="text-3xl font-bold text-blue-600">
                    {formatPrice(calculateTotal())}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    * Prices are indicative and may vary by location
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-all mb-3">
                  Request Quote
                </button>
                <button className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-4 rounded-lg font-semibold text-lg transition-all">
                  Book Test Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Need Help Customizing?
            </h2>
            <p className="text-xl text-gray-700">
              Our experts are here to guide you through every step
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Call Us</h3>
              <p className="text-gray-700">+91 1800-CELESTE</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Visit Us</h3>
              <p className="text-gray-700">Find nearest dealership</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Email Us</h3>
              <p className="text-gray-700">sales@celestemotors.in</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
