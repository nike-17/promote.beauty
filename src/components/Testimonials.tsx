import React from 'react';

const testimonial = {
  content: "BeautyAds has revolutionized how we reach new clients at Beautissima. The platform's intuitive interface and powerful targeting capabilities have helped us attract our ideal customers. We've seen a remarkable increase in high-value bookings since implementing their advertising solutions.",
  author: "Irina Groshina",
  role: "Owner, Beautissima Bothell",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
};

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-pink-500">Testimonial</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by beauty professionals
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <figure className="relative isolate bg-white p-10 shadow-xl shadow-gray-900/10 rounded-2xl">
            <svg viewBox="0 0 162 128" aria-hidden="true" className="absolute left-0 top-0 -z-10 h-32 stroke-gray-900/10 fill-white">
              <path d="M65.5 28.5h-2.2c-13.5 0-24.5 11-24.5 24.5v2.2c0 13.5 11 24.5 24.5 24.5h2.2c13.5 0 24.5-11 24.5-24.5v-2.2c0-13.5-11-24.5-24.5-24.5z" />
            </svg>
            <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
              <p>"{testimonial.content}"</p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <img
                className="h-14 w-14 rounded-full bg-gray-50 object-cover"
                src={testimonial.image}
                alt={testimonial.author}
              />
              <div className="text-base">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="mt-1 text-gray-500">{testimonial.role}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}