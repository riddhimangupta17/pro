import Link from "next/link";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Celesté Motors
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Luxury. Innovation. Accessible.
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Where cutting-edge engineering meets affordability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/models"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Explore Our Models
            </Link>
            <Link
              href="/customization"
              className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Build Your Own
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Discover Celesté
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/models?category=sedans"
              className="group relative overflow-hidden rounded-lg shadow-xl h-80 bg-gradient-to-br from-blue-600 to-blue-800 hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Premium Sedans</h3>
                <p className="text-lg">Experience comfort and elegance</p>
                <p className="text-sm mt-2 text-gray-200">Starting at ₹35 Lac</p>
              </div>
            </Link>

            <Link
              href="/models?category=sports"
              className="group relative overflow-hidden rounded-lg shadow-xl h-80 bg-gradient-to-br from-red-600 to-red-800 hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Sports Cars</h3>
                <p className="text-lg">Unleash pure performance</p>
                <p className="text-sm mt-2 text-gray-200">Starting at ₹1.5 Crore</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Innovation</h3>
              <p className="text-gray-600">
                AI-assisted driving, zero-emission engines, and cutting-edge technology in every vehicle.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Affordability</h3>
              <p className="text-gray-600">
                Luxury that doesn't break the bank. Premium quality at accessible prices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Luxury Engineering</h3>
              <p className="text-gray-600">
                Precision-crafted interiors and aerodynamic designs that redefine automotive excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            What Our Customers Say
          </h2>
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Celesté?
          </h2>
          <p className="text-xl mb-8">
            Visit our dealership or customize your dream vehicle today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dealerships"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Find a Dealership
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
