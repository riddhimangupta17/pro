export const metadata = {
  title: "About Us - Celesté Motors",
  description: "Learn about Celesté Motors' journey to make luxury accessible",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Making luxury accessible to every Indian
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                The Birth of Celesté Motors
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in the heart of India, Celesté Motors emerged from a simple yet powerful vision: 
                to bring world-class luxury automobiles within reach of the aspiring Indian middle class.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our founders, a team of passionate engineers and designers, recognized a gap in the market. 
                While international luxury brands dominated the premium segment, their price points remained 
                inaccessible to most Indians. Celesté Motors was born to bridge this gap.
              </p>
              <p className="text-lg text-gray-700">
                Through innovative manufacturing processes, strategic partnerships, and a commitment to 
                indigenous engineering, we've created vehicles that rival international standards while 
                maintaining competitive pricing.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg p-12 shadow-xl">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">2020</div>
                <p className="text-xl text-slate-900 font-semibold">Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Vision</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To become India's leading luxury automotive manufacturer, setting new standards 
              for innovation, quality, and accessibility in the automotive industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Quality First</h3>
              <p className="text-gray-700">
                Every vehicle undergoes rigorous testing to meet international safety and quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Innovation</h3>
              <p className="text-gray-700">
                Continuous investment in R&D to bring cutting-edge technology to our customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Customer Focus</h3>
              <p className="text-gray-700">
                Building lasting relationships through exceptional service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Journey</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-blue-600">2020</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Company Founded</h3>
                <p className="text-gray-700">
                  Celesté Motors established with a vision to democratize luxury automobiles in India.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-blue-600">2021</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">First Model Launch</h3>
                <p className="text-gray-700">
                  Introduction of the Celesté Sedona One S, our first premium sedan that set new standards in the segment.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-blue-600">2022</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Sports Car Debut</h3>
                <p className="text-gray-700">
                  Launched the Panthera GT X, entering the high-performance sports car market with competitive pricing.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-blue-600">2023</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Innovation Center</h3>
                <p className="text-gray-700">
                  Opened our state-of-the-art R&D facility focusing on AI-assisted driving and zero-emission technologies.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-blue-600">2024</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Nationwide Expansion</h3>
                <p className="text-gray-700">
                  Established dealerships in 25+ cities across India, making Celesté accessible to millions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-xl mb-8">
            Be part of the revolution that's making luxury accessible to all Indians
          </p>
        </div>
      </section>
    </main>
  );
}
