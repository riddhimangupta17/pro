export const metadata = {
  title: "Research & Development - Celesté Motors",
  description: "Explore Celesté Motors' R&D achievements and future technologies",
};

export default function RandDPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Research & Development</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Pioneering the future of automotive technology through continuous innovation
          </p>
        </div>
      </section>

      {/* R&D Facility Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                State-of-the-Art R&D Center
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our world-class research and development facility spans over 100,000 square feet 
                and houses cutting-edge equipment, testing labs, and a team of brilliant minds 
                working on tomorrow's automotive solutions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                From advanced wind tunnels to crash test facilities, our R&D center is equipped 
                to test and perfect every aspect of vehicle performance, safety, and efficiency.
              </p>
              <p className="text-lg text-gray-700">
                We invest 15% of our annual revenue back into research and development, ensuring 
                we stay at the forefront of automotive innovation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">100+</div>
                    <div className="text-gray-600">Safety Tests per Model</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">50+</div>
                    <div className="text-gray-600">Ongoing Research Projects</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">200+</div>
                    <div className="text-gray-600">Research Scientists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Key Research Focus Areas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Battery Technology</h3>
              <p className="text-gray-700">
                Developing next-generation battery systems with higher energy density, 
                faster charging, and longer lifespan for our electric vehicles.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Autonomous Systems</h3>
              <p className="text-gray-700">
                Creating sophisticated AI-powered autonomous driving systems that can 
                handle Indian road conditions and traffic patterns.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Emissions Reduction</h3>
              <p className="text-gray-700">
                Innovating cleaner combustion technologies and hybrid systems to 
                minimize environmental impact and meet stringent emission standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Material Science</h3>
              <p className="text-gray-700">
                Researching lightweight composites and advanced alloys to improve 
                performance, safety, and fuel efficiency without compromising strength.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Connected Vehicles</h3>
              <p className="text-gray-700">
                Building IoT platforms for vehicle-to-vehicle and vehicle-to-infrastructure 
                communication to enhance safety and traffic management.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Safety Engineering</h3>
              <p className="text-gray-700">
                Developing advanced safety systems including predictive crash avoidance, 
                reinforced structures, and intelligent airbag systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Infographic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            R&D Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-xl font-semibold text-slate-900 mb-2">Patents</div>
              <p className="text-gray-600 text-sm">Filed across various automotive technologies</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-xl font-semibold text-slate-900 mb-2">Efficiency Gain</div>
              <p className="text-gray-600 text-sm">In battery performance over 3 years</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-xl font-semibold text-slate-900 mb-2">Safety Rating</div>
              <p className="text-gray-600 text-sm">Achieved on all our models</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">₹500Cr</div>
              <div className="text-xl font-semibold text-slate-900 mb-2">Investment</div>
              <p className="text-gray-600 text-sm">Annual R&D budget commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Technologies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-slate-900">
            Future Technologies in Development
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            A glimpse into what we're working on for the next generation of Celesté vehicles
          </p>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Solid-State Batteries (2026)</h3>
              <p className="text-gray-700 mb-2">
                Next-generation battery technology that will double range while reducing charging time to just 15 minutes.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Expected Launch: 2026</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Level 4 Autonomous Driving (2027)</h3>
              <p className="text-gray-700 mb-2">
                Fully autonomous driving capabilities for highway and urban environments, with human oversight optional.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Expected Launch: 2027</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Hydrogen Fuel Cells (2028)</h3>
              <p className="text-gray-700 mb-2">
                Zero-emission hydrogen-powered vehicles with 800km range and 5-minute refueling time.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Expected Launch: 2028</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Bio-Based Materials (2025)</h3>
              <p className="text-gray-700 mb-2">
                Sustainable interior materials derived from plant-based sources, reducing environmental impact by 40%.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Expected Launch: 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Innovation Journey
          </h2>
          <p className="text-xl mb-8">
            We're always looking for brilliant minds to join our R&D team
          </p>
        </div>
      </section>
    </main>
  );
}
