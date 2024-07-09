import React from 'react';
import { Saira, Signika, Fira_Sans, DM_Sans, Alegreya_Sans, Merriweather } from 'next/font/google';

const saira = Saira({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const signika = Signika({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const AboutMe = () => {
  return (
    <div className={` px-4 md:p-8 text-gray-300 hover:text-white md:px-32 ${signika.className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4  md:mt-20 text-[#E6FFA0]">About Me</h2>
      <p className="mb-4 text-sm md:text-base hover:text-[#dce4c9]">
        It all started with my friend calling me, and saying he has learnt a
        beautiful framework called FLUTTER. Back then I was at my first year
        in my undergraduate degree, and I had no idea what on earth he was
        talking about.
      </p>
      <p className="mb-4 text-sm md:text-base hover:text-[#dce4c9]">
        Fast forward to today, I am building websites, Mobile Application
        for my company, I have betted my life on this single framework
        called REACT. I never knew I would love building UI/UX so much until
        I started doing it.
      </p>
      <p className="mb-4 text-sm md:text-base hover:text-[#dce4c9]">
        I graduated in 2023, in Computer Science and currently I am working
        as a Frontend Developer at Betterhalf.ai, where primarily
      </p>
    </div>
  );
};

export default AboutMe;
