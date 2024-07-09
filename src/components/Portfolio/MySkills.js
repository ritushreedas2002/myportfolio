import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Saira, Signika, Fira_Sans, DM_Sans, Alegreya_Sans, Merriweather } from 'next/font/google';
const saira = Saira({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const signika = Signika({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const MySkills = ({ skills, fadeInAnimationVariants }) => {
  return (
    <div className={`p-4 text-[#E6FFA0] ${signika.className}`}>
      <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="rounded-full shadow"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="w-20 h-11 relative m-2">
              <Image
                src={skill}
                alt={skill}
                layout="fill"
                objectFit="contain" // This ensures the image scales properly
               
              />
            </div>
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
