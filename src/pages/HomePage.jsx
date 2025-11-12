import React from 'react'
import { motion } from 'framer-motion'
import FlightSearchForm from '../components/flight/FlightSearchForm'

// --- ASSET IMPORTS ---
import HeroImage from '../assets/hero-background.jpg' // This is unused, but fine to leave
import MumbaiImg from '../assets/mumbai.jpg'
import DubaiImg from '../assets/dubai.jpg'
import BangaloreImg from '../assets/bangalore.jpg'
import GoaImg from '../assets/goa.jpg'
import KolkataImg from '../assets/kolkata.jpg'
import ChennaiImg from '../assets/chennai.jpg'

import { FloatingPaths } from '../components/common/FloatingPaths'
import { ExpandingGallery } from '../components/common/ExpandingGallery'
import WarpBackground from '../components/common/WarpBackground'
// --- ICON IMPORTS ---
import { Zap, ShieldCheck, DollarSign, Award } from 'lucide-react'

// --- MOCK DATA ---
const popularDestinations = [
  { city: 'Mumbai', price: '4,500', image: MumbaiImg },
  { city: 'Dubai', price: '12,800', image: DubaiImg }, // <-- FIX: Changed 'Delhi' to 'Dubai'
  { city: 'Bangalore', price: '6,200', image: BangaloreImg },
  { city: 'Goa', price: '3,800', image: GoaImg },
  { city: 'Kolkata', price: '5,100', image: KolkataImg },
  { city: 'Chennai', price: '4,200', image: ChennaiImg },
];

const galleryItems = popularDestinations.map(dest => ({
  common: dest.city,
  binomial: `Flights from ₹${dest.price}`, // Use this for the italic text
  photo: {
    url: dest.image,
    text: `Photo of ${dest.city}`,
    by: 'OnWings Travel', // Add a placeholder 'by'
    pos: 'center'
  }
}));

// Data for the "Why Choose Us" section
const features = [
  { icon: <Zap className="w-8 h-8 text-red-600" />, title: 'Instant Booking', description: 'Book your flight in seconds with our seamless checkout.'},
  { icon: <DollarSign className="w-8 h-8 text-red-600" />, title: 'Best Price Guarantee', description: "We find the best deals, so you don't have to."},
  { icon: <ShieldCheck className="w-8 h-8 text-red-600" />, title: 'Secure Payments', description: 'Your data is protected by industry-standard security.'},
  { icon: <Award className="w-8 h-8 text-red-600" />, title: 'Award Winning', description: 'Trusted by over 1 million passengers worldwide.'},
];

// --- ANIMATION VARIANTS ---
const fadeInOnScroll = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' } }
};


// --- HOMEPAGE COMPONENT ---
const HomePage = () => {
  return (
    <>
      {/* ===== 1. HERO SECTION ===== */}
      {/* THIS IS THE FIX: 
        These classes force the div to be 100% of the screen width 
        and then re-center it, breaking it out of the container.
      */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 -mt16">
        {/* Background Image */}
        <WarpBackground />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto h-[600px] lg:h-[700px] flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-shadow-lg mb-4 text-white/50 font-outfit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* You can add text here */}
            Your World, Redefined in the Clouds With <span className='text-3xl md:text-4xl font-bold text-shadow-lg mb-4 text-white/80 font-outfit'>Onwings</span>
          </motion.h1>

          {/* ... (your commented-out <motion.p>) ... */}

          {/* The Search Form */}
          <motion.div
            className="w-full max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-black/80  p-6 rounded-none shadow-2xl">
              <FlightSearchForm />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== 2. "WHY CHOOSE US" (FEATURES) SECTION ===== */}
      <section className="container mx-auto py-24">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInOnScroll}
        >
          <h2 className="text-black text-4xl font-bold mb-3">Explore Various Options</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-red-800 border border-black/10 rounded-lg p-6 shadow-lg text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInOnScroll}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white/80">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== 3. "POPULAR DESTINATIONS" SECTION (NOW A SLIDER) ===== */}
      <section className="bg-white py-24">
        <div className="container mx-auto">        
          <div className="relative w-full h-[500px]">
          <section className="bg-white py-24">
                <ExpandingGallery items={popularDestinations} />
          </section>
          </div>

        </div>
      </section>
    </>
  )
}

export default HomePage