import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/Portfolio/Animated';
import Contact from '@/components/Portfolio/Contact';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Saira, Signika } from 'next/font/google';

const saira = Saira({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const signika = Signika({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const DeveloperDetails = ({ staggeredVariants }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showHoverBorderGradient, setShowHoverBorderGradient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHoverBorderGradient(true);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);

  return (
    <div className={`w-full md:w-2/5 text-white p-8 mb-20 overflow-y-auto md:h-screen z-20 ${signika.className}`}>
      <div className="md:sticky md:top-0">
        <div className="mb-8 relative w-48 h-64 mx-auto overflow-hidden hover:grayscale-0">
          <Image
            src="/icons/face.jpeg"
            alt="John Doe"
            layout="fill"
            objectFit="cover"
            className={`transition-transform duration-100 grayscale hover:text-[#dce4c9] ${
              imageLoaded ? "translate-y-0" : "translate-y-full"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              imageLoaded ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>
        <motion.div
          className="relative overflow-hidden"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-center hover:text-[#d2e2ae]">Ritushree Das</h1>
          <motion.div
            className="absolute inset-0"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1000, delay: 0.1 }}
          ></motion.div>
        </motion.div>
        <div className="mb-4 text-center hover:text-[#dce4c9]">
          <AnimatedText text="Passionate about creating beautiful and functional web applications." />
        </div>
        {showHoverBorderGradient && (
          <div className='flex justify-center mt-4'>
            <HoverBorderGradient
              containerClassName="rounded-xl"
              as="button"
              className="bg-black text-white flex items-center space-x-7 px-20 hover:text-[#dce4c9]"
            >
              I am looking out for opportunities!!
            </HoverBorderGradient>
          </div>
        )}
        <Contact staggeredVariants={staggeredVariants} />
      </div>
    </div>
  );
};

export default DeveloperDetails;
