import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Saira, Signika, Fira_Sans, DM_Sans, Alegreya_Sans, Merriweather } from 'next/font/google';

const saira = Saira({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const signika = Signika({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });


const TimelineEvent = ({ event, index, setActiveEvent }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`absolute ${signika.className} ${
        index % 2 === 0 ? "md:left-32 left-7" : "md:right-32 right-7"
      } transform p-4 max-w-sm md:text-base text-xs bg-black border-2 border-gray-200 hover:border-[#E1FF90] mt-7 md:w-60 w-40 shadow-md rounded-md cursor-pointer`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.5 }}
      style={{ top: `${index * 150}px` }}
      onMouseEnter={() => setActiveEvent(index)}
      onMouseLeave={() => setActiveEvent(null)}
    >
      <h3 className="font-bold text-lg text-gray-100">{event.year}</h3>
      <h4 className="font-semibold text-gray-200">{event.title}</h4>
      <p className="text-gray-400">{event.description}</p>
    </motion.div>
  );
};

export default TimelineEvent;
