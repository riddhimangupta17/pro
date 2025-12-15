"use client";

import { useState } from "react";

const dealerships = [
  {
    city: "Mumbai",
    state: "Maharashtra",
    address: "Plot No. 123, Western Express Highway, Andheri East, Mumbai - 400069",
    phone: "+91 22 1234 5678",
    email: "mumbai@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
  {
    city: "Delhi",
    state: "NCR",
    address: "Sector 18, Mathura Road, Faridabad, Delhi NCR - 121002",
    phone: "+91 11 9876 5432",
    email: "delhi@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    address: "No. 456, Old Madras Road, Whitefield, Bangalore - 560066",
    phone: "+91 80 5555 6666",
    email: "bangalore@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    address: "Road No. 36, Jubilee Hills, Hyderabad - 500033",
    phone: "+91 40 7777 8888",
    email: "hyderabad@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    address: "Mount Poonamallee Road, Porur, Chennai - 600116",
    phone: "+91 44 3333 4444",
    email: "chennai@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
  {
    city: "Pune",
    state: "Maharashtra",
    address: "Baner Road, Near Aundh, Pune - 411007",
    phone: "+91 20 2222 3333",
    email: "pune@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    address: "S.G. Highway, Thaltej, Ahmedabad - 380054",
    phone: "+91 79 9999 0000",
    email: "ahmedabad@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    address: "E.M. Bypass, Kasba, Kolkata - 700107",
    phone: "+91 33 1111 2222",
    email: "kolkata@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    address: "Tonk Road, Near Jawahar Circle, Jaipur - 302018",
    phone: "+91 141 4444 5555",
    email: "jaipur@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
  {
    city: "Chandigarh",
    state: "Punjab",
    address: "Industrial Area Phase 2, Chandigarh - 160002",
    phone: "+91 172 6666 7777",
    email: "chandigarh@celestemotors.in",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
  },
];

export default function DealershipsPage() {
  const [selectedCity, setSelectedCity] = useState<string>("all");

  const filteredDealerships =
    selectedCity === "all"
      ? dealerships
      : dealerships.filter((d) => d.city === selectedCity);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Dealerships</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Find a Celesté Motors dealership near you across India
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1577085796749!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Celesté Motors Dealership Locations across India"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Interactive map showing approximate dealership locations across major Indian cities
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-slate-50 sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-semibold text-slate-900">Filter by city:</span>
            <button
              onClick={() => setSelectedCity("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCity === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Cities
            </button>
            {dealerships.map((d) => (
              <button
                key={d.city}
                onClick={() => setSelectedCity(d.city)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCity === d.city
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {d.city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dealerships List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {selectedCity === "all"
                ? `All Dealerships (${dealerships.length})`
                : `${selectedCity} Dealership`}
            </h2>
            <p className="text-gray-600">
              Visit us for test drives, sales, and after-sales service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealerships.map((dealership) => (
              <div
                key={dealership.city}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {dealership.city}
                  </h3>
                  <p className="text-sm text-gray-600">{dealership.state}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-700 text-sm">{dealership.address}</p>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-gray-700 text-sm font-medium">
                        {dealership.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-700 text-sm">{dealership.email}</p>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-700 text-sm">{dealership.hours}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all">
                    Book Test Drive
                  </button>
                  <button className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition-all">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Services Available at Our Dealerships
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Test Drives</h3>
              <p className="text-gray-700">
                Experience our vehicles firsthand with expert guidance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Financing</h3>
              <p className="text-gray-700">
                Flexible financing options and easy loan assistance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Service Center</h3>
              <p className="text-gray-700">
                Expert maintenance and genuine spare parts
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Consultation</h3>
              <p className="text-gray-700">
                Personalized vehicle recommendations and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit Us?</h2>
          <p className="text-xl mb-8">
            Book an appointment or walk in for a test drive today
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
            Schedule Your Visit
          </button>
        </div>
      </section>
    </main>
  );
}
