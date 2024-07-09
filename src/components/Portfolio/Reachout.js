import { useState } from 'react';

import { Saira, Signika } from 'next/font/google';
const saira = Saira({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const signika = Signika({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const ReachOut = () => {
  const [message, setMessage] = useState('');

  return (
    <div className={`bg-black text-black p-10 rounded-lg shadow-lg max-w-3xl mx-auto mt-10 ${signika.className}`}>
      <h2 className="text-2xl font-bold mb-6 hover:text-[#E6FFA0] text-white">Message Me</h2>
      <div className=" p-6 rounded-lg shadow-lg flex">
        <textarea
          className="w-full p-4 bg-white border border-gray-300 rounded-l-lg focus:outline-none resize-none"
          placeholder="Write your message here..."
          rows="1"
          style={{ overflow: 'hidden' }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        ></textarea>
        <button className="w-32 p-4 bg-[#14B8A6] hover:bg-[#E2FF93] text-white rounded-r-lg hover:text-black transition-colors duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReachOut;
