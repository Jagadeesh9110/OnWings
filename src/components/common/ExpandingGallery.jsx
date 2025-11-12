import React from 'react';

// A simple utility for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
}

// Renamed to ExpandingGallery and set up to receive 'items'
export const ExpandingGallery = ({ items }) => {
  return (
    // This is the <section> from your code
    <section className="w-full flex flex-col items-center justify-start py-12">
      
      <div className="max-w-3xl text-center px-4">
        <h1 className="text-4xl font-bold text-black/80 mb-3">Popular Destinations</h1>
      </div>

      <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
        {/* We now map over the 'items' prop (your destination data) */}
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={item.image} // Use the image from your data
              alt={item.city}  // Use the city from your data
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpandingGallery;