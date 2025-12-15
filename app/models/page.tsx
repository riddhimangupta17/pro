"use client";

import { useState } from "react";
import Link from "next/link";

const sedans = [
  {
    name: "Celesté Sedona One S",
    price: "₹35 Lac",
    tagline: "Where luxury meets affordability",
    specs: {
      engine: "2.0L Turbo Petrol / Electric Hybrid",
      power: "180 HP",
      transmission: "8-Speed Automatic",
      topSpeed: "220 km/h",
      acceleration: "0-100 km/h in 8.5s",
      fuelEfficiency: "18 km/l (Petrol) / 25 km/l (Hybrid)",
      seating: "5 Passengers",
      bootSpace: "520 Liters"
    },
    features: [
      "AI-Assisted Cruise Control",
      "Premium Leather Interiors",
      "8-inch Touchscreen Infotainment",
      "Automatic Climate Control",
      "6 Airbags",
      "ABS with EBD",
      "Alloy Wheels (17-inch)",
      "LED Headlights & DRLs"
    ]
  },
  {
    name: "Celesté Regal LXS",
    price: "₹65 Lac",
    tagline: "Elevated elegance, supreme comfort",
    specs: {
      engine: "3.0L V6 Turbo / Electric Hybrid",
      power: "280 HP",
      transmission: "9-Speed Automatic",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 6.2s",
      fuelEfficiency: "15 km/l (Petrol) / 22 km/l (Hybrid)",
      seating: "5 Passengers",
      bootSpace: "560 Liters"
    },
    features: [
      "Level 2 Autonomous Driving",
      "Ventilated Nappa Leather Seats",
      "12.3-inch Digital Instrument Cluster",
      "Premium Sound System (12 Speakers)",
      "Panoramic Sunroof",
      "Wireless Charging",
      "360° Camera System",
      "Adaptive LED Matrix Headlights"
    ]
  },
  {
    name: "Celesté Luxe ELX Alpha",
    price: "₹1.2 Crore",
    tagline: "The pinnacle of luxury sedans",
    specs: {
      engine: "4.0L V8 Twin-Turbo / Plug-in Hybrid",
      power: "450 HP",
      transmission: "10-Speed Automatic",
      topSpeed: "280 km/h",
      acceleration: "0-100 km/h in 4.5s",
      fuelEfficiency: "12 km/l (Petrol) / 20 km/l (Hybrid)",
      seating: "5 Passengers (Executive Rear Seats)",
      bootSpace: "600 Liters"
    },
    features: [
      "Full AI-Assisted Autonomous Driving",
      "Executive Reclining Rear Seats with Massage",
      "Dual 12.3-inch Screens + Rear Entertainment",
      "22-Speaker Premium Audio System",
      "Active Air Suspension",
      "Night Vision Camera",
      "Gesture Controls",
      "Carbon Fiber Interior Accents"
    ]
  }
];

const sportsCars = [
  {
    name: "Celesté Panthera GT X",
    price: "₹1.5 Crore",
    tagline: "Unleash the beast within",
    specs: {
      engine: "3.5L V6 Twin-Turbo",
      power: "450 HP",
      transmission: "7-Speed Dual-Clutch",
      topSpeed: "290 km/h",
      acceleration: "0-100 km/h in 3.8s",
      fuelEfficiency: "10 km/l",
      seating: "2+2 Configuration",
      bootSpace: "280 Liters"
    },
    features: [
      "Sport-Tuned Suspension",
      "Carbon Ceramic Brakes",
      "Racing Bucket Seats",
      "Launch Control System",
      "Active Aerodynamics",
      "Performance Exhaust System",
      "Track Mode Settings",
      "Lightweight Alloy Wheels (19-inch)"
    ]
  },
  {
    name: "Celesté TurboVain ELITE",
    price: "₹2.8 Crore",
    tagline: "Pure performance, unmatched style",
    specs: {
      engine: "4.5L V8 Twin-Turbo",
      power: "600 HP",
      transmission: "8-Speed Dual-Clutch",
      topSpeed: "320 km/h",
      acceleration: "0-100 km/h in 3.2s",
      fuelEfficiency: "8 km/l",
      seating: "2 Passengers",
      bootSpace: "220 Liters"
    },
    features: [
      "Adjustable Magnetic Ride Suspension",
      "Carbon Fiber Body Panels",
      "Alcantara Racing Interior",
      "Active Rear Spoiler",
      "Torque Vectoring System",
      "Performance Data Recorder",
      "Brembo Racing Brakes",
      "Forged Carbon Wheels (20-inch)"
    ]
  },
  {
    name: "Celesté Apex-ZR Hyper",
    price: "₹4.2 Crore",
    tagline: "The ultimate expression of speed",
    specs: {
      engine: "5.2L V10 Naturally Aspirated",
      power: "750 HP",
      transmission: "7-Speed Sequential",
      topSpeed: "350 km/h",
      acceleration: "0-100 km/h in 2.8s",
      fuelEfficiency: "6 km/l",
      seating: "2 Passengers",
      bootSpace: "150 Liters"
    },
    features: [
      "Full Carbon Fiber Monocoque Chassis",
      "Active Aero Package with DRS",
      "Lightweight Racing Seats (Carbon Fiber)",
      "Hybrid Turbo System",
      "Titanium Exhaust with Active Valves",
      "Advanced Telemetry System",
      "Race-Spec Ceramic Brakes",
      "Centerlock Racing Wheels (21-inch)"
    ]
  }
];

export default function ModelsPage() {
  const [activeCategory, setActiveCategory] = useState<"sedans" | "sports">("sedans");

  const currentModels = activeCategory === "sedans" ? sedans : sportsCars;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Models</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Choose from our range of premium sedans and high-performance sports cars
          </p>
        </div>
      </section>

      {/* Category Toggle */}
      <section className="py-12 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveCategory("sedans")}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all ${
                activeCategory === "sedans"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Premium Sedans
            </button>
            <button
              onClick={() => setActiveCategory("sports")}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all ${
                activeCategory === "sports"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Sports Cars
            </button>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {currentModels.map((model, index) => (
              <div
                key={model.name}
                className={`bg-white rounded-lg shadow-xl overflow-hidden ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
              >
                {/* Image Placeholder */}
                <div className={`lg:w-1/2 ${activeCategory === "sedans" ? "bg-gradient-to-br from-blue-600 to-blue-800" : "bg-gradient-to-br from-red-600 to-red-800"} p-12 flex items-center justify-center min-h-[400px]`}>
                  <div className="text-center text-white">
                    <svg className="w-32 h-32 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                    </svg>
                    <p className="text-2xl font-bold">{model.name}</p>
                    <p className="text-lg mt-2 opacity-75">Product Image Placeholder</p>
                  </div>
                </div>

                {/* Model Details */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                      {model.name}
                    </h2>
                    <p className="text-xl text-gray-600 italic mb-4">{model.tagline}</p>
                    <div className="text-3xl font-bold text-blue-600">
                      Starting at {model.price}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      {Object.entries(model.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b pb-2">
                          <span className="text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>
                          <span className="font-semibold text-slate-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/customization"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-semibold transition-all"
                    >
                      Customize This Model
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg text-center font-semibold transition-all"
                    >
                      Book Test Drive
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Can't Decide? Let Us Help
          </h2>
          <p className="text-xl mb-8">
            Visit your nearest dealership for a personalized consultation and test drive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dealerships"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Find a Dealership
            </Link>
            <Link
              href="/customization"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Build Your Own
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
