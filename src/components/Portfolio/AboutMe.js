import React from 'react';
import { Saira, Signika, Fira_Sans, DM_Sans, Alegreya_Sans, Merriweather } from 'next/font/google';

const saira = Saira({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const signika = Signika({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const AboutMe = () => {
  return (
    <div className={` px-4 md:p-8 text-gray-300 hover:text-white md:px-32 ${signika.className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4  md:mt-20 text-[#E6FFA0]">About Me</h2>
      <p className="mb-4 text-sm md:text-base hover:text-[#dce4c9]">
        Starting in my third year of undergrad, I developed a book reading app using the MERN stack, integrating OpenAI API, Google Books API, Firebase, and Dialogflow. This project sparked my passion for building sophisticated, interactive applications.
      </p>
      <p className="mb-4 text-sm md:text-base hover:text-[#dce4c9]">
       Today, I work as a FullStack Developer at CodeKenTechLabs, focusing on creating dynamic websites and mobile applications. My expertise with React and my commitment to UI/UX design drive me to develop innovative solutions that enhance user experiences.
      </p>
      <p className="mb-4 text-sm md:text-base hover:text-[#dce4c9]">
       
      </p>
    </div>
  );
};

export default AboutMe;
