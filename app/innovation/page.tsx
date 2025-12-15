export const metadata = {
  title: "Innovation - Celesté Motors",
  description: "Discover the cutting-edge innovations powering Celesté Motors vehicles",
};

export default function InnovationPage() {
  const innovations = [
    {
      title: "AI-Assisted Driving",
      description: "Advanced artificial intelligence systems that enhance safety and driving experience with real-time decision making, adaptive cruise control, and intelligent collision avoidance.",
      features: [
        "Lane departure warning",
        "Adaptive cruise control",
        "Automatic emergency braking",
        "Traffic sign recognition",
        "Parking assistance"
      ]
    },
    {
      title: "Zero-Emission Engines",
      description: "Revolutionary electric and hybrid powertrains that deliver exceptional performance while maintaining environmental responsibility and reducing carbon footprint.",
      features: [
        "100% electric variants",
        "Hybrid technology options",
        "Fast charging capability",
        "Regenerative braking",
        "Extended range batteries"
      ]
    },
    {
      title: "Aerodynamic Design",
      description: "Wind tunnel-tested body designs that maximize efficiency, reduce drag, and enhance performance while maintaining stunning aesthetics and luxurious appeal.",
      features: [
        "Coefficient of drag: 0.24",
        "Active aerodynamics",
        "Optimized airflow management",
        "Enhanced fuel efficiency",
        "Reduced wind noise"
      ]
    },
    {
      title: "Smart Connectivity",
      description: "Integrated IoT systems that connect your vehicle to your digital life, providing seamless control, entertainment, and real-time diagnostics through mobile apps.",
      features: [
        "Mobile app integration",
        "Over-the-air updates",
        "Voice command system",
        "Cloud-based navigation",
        "Remote vehicle control"
      ]
    },
    {
      title: "Advanced Materials",
      description: "Lightweight yet incredibly strong materials including carbon fiber composites and aerospace-grade aluminum that improve safety, performance, and efficiency.",
      features: [
        "Carbon fiber components",
        "High-strength steel frame",
        "Aluminum body panels",
        "Weight reduction technology",
        "Enhanced crash protection"
      ]
    },
    {
      title: "Intelligent Interior",
      description: "Luxurious cabins featuring ambient lighting, premium materials, advanced climate control, and ergonomic designs that adapt to driver preferences.",
      features: [
        "Adaptive ambient lighting",
        "Memory seat positions",
        "Air quality monitoring",
        "Gesture controls",
        "Premium sound systems"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Innovation</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Pushing boundaries to redefine what's possible in automotive engineering
          </p>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Patents Filed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">₹500Cr</div>
              <p className="text-gray-700">R&D Investment</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-700">Engineers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700">Indigenous Tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Our Technological Advancements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {innovation.description}
                  </p>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {innovation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Tech Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              The Future is Here
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're not just keeping up with the future—we're creating it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">2025 Vision</h3>
              <p className="text-gray-700">
                Full autonomous driving capabilities with Level 4 automation
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Sustainability</h3>
              <p className="text-gray-700">
                100% of our lineup will include zero-emission options
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Connected Living</h3>
              <p className="text-gray-700">
                Seamless integration with smart homes and IoT ecosystems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Experience Innovation Today
          </h2>
          <p className="text-xl mb-8">
            Visit our dealership to see these technologies in action
          </p>
        </div>
      </section>
    </main>
  );
}
