"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    model: "Celesté Sedona One S",
    text: "The perfect blend of luxury and affordability. I never thought I could own such a premium vehicle at this price point!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Bangalore, Karnataka",
    model: "Celesté Regal LXS",
    text: "The AI-assisted driving features are incredible. Celesté has truly revolutionized the Indian automotive industry.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    location: "Delhi, NCR",
    model: "Celesté Panthera GT X",
    text: "This sports car is a dream come true! The performance is outstanding and the design is simply breathtaking.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad, Gujarat",
    model: "Celesté Luxe ELX Alpha",
    text: "Exceptional build quality and attention to detail. The interior feels like a private jet on wheels!",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-slate-50 rounded-lg shadow-xl p-8 md:p-12">
        <div className="text-center mb-6" aria-label={`Rating: ${testimonials[currentIndex].rating} out of 5 stars`}>
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl" aria-hidden="true">★</span>
          ))}
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-6 italic text-center">
          "{testimonials[currentIndex].text}"
        </p>
        
        <div className="text-center">
          <p className="font-bold text-lg text-slate-900">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-gray-600">{testimonials[currentIndex].location}</p>
          <p className="text-sm text-blue-600 mt-2">
            {testimonials[currentIndex].model}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
