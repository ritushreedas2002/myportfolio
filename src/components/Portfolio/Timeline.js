// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer'; // Add this import

// const Timeline = ({ timelineEvents }) => {
//   const controls = useAnimation();
//   const { ref: timelineRef, inView: timelineInView } = useInView({
//     triggerOnce: true,
//   });
//   const [activeEvent, setActiveEvent] = useState(null);

//   useEffect(() => {
//     if (timelineInView) {
//       controls.start("visible");
//     }
//   }, [controls, timelineInView]);

//   return (
//     <div className="relative h-screen p-8 mb-20" ref={timelineRef}>
//       <motion.div
//         className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-500 w-3 rounded-full"
//         initial={{ height: 0 }}
//         animate={controls}
//         transition={{ duration: 1.0 }}
//         variants={{ visible: { height: "100%" } }}
//       />

//       {timelineEvents.map((event, index) => {
//         const ref = useRef();
//         const [isVisible, setIsVisible] = useState(false);

//         useEffect(() => {
//           const observer = new IntersectionObserver(
//             ([entry]) => {
//               setIsVisible(entry.isIntersecting);
//             },
//             { threshold: 0.1 }
//           );

//           if (ref.current) {
//             observer.observe(ref.current);
//           }

//           return () => {
//             if (ref.current) {
//               observer.unobserve(ref.current);
//             }
//           };
//         }, [ref]);

//         return (
//           <motion.div
//             key={index}
//             ref={ref}
//             className={`absolute ${
//               index % 2 === 0 ? "md:left-32 left-7" : "md:right-32 right-7"
//             } transform p-4 max-w-sm md:text-base text-xs bg-white mt-7 md:w-60 w-40 shadow-md rounded-md cursor-pointer`}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//             animate={isVisible ? "visible" : "hidden"}
//             variants={{
//               visible: { opacity: 1, x: 0 },
//               hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
//             }}
//             style={{ top: `${index * 150}px` }}
//             onMouseEnter={() => setActiveEvent(index)}
//             onMouseLeave={() => setActiveEvent(null)}
//           >
//             <h3 className="font-bold text-lg">{event.year}</h3>
//             <h4 className="font-semibold">{event.title}</h4>
//             <p>{event.description}</p>
//           </motion.div>
//         );
//       })}

//       {activeEvent !== null && (
//         <motion.div
//           className={`absolute ${
//             activeEvent % 2 === 0
//               ? "left-1/2 -translate-x-full"
//               : "right-1/2 translate-x-full"
//           } transform bg-white shadow-lg rounded-lg p-6 md:w-80 w-40 md:text-base text-sm z-20`}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           style={{ top: `${activeEvent * 150 + 60}px` }}
//         >
//           <h3 className="font-bold text-lg">
//             {timelineEvents[activeEvent].year}
//           </h3>
//           <h4 className="font-semibold mb-2">
//             {timelineEvents[activeEvent].title}
//           </h4>
//           <p>{timelineEvents[activeEvent].details}</p>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Timeline;

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimelineEvent from '@/components/Portfolio/TimeLineEvent'; // Import the custom component

const Timeline = ({ timelineEvents }) => {
  const controls = useAnimation();
  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: false, // Set to false to trigger on every view
  });
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    if (timelineInView) {
      controls.start("visible");
    }
  }, [controls, timelineInView]);

  return (
    <div className="relative h-screen p-8 mb-20" ref={timelineRef}>
      <motion.div
  className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#eaefdc] to-[#E3FF95] w-3 rounded-full h-[60%] "
  initial={{ height: 0 }}
  animate={controls}
  transition={{ duration: 1.0 }}
  variants={{ visible: { height: "80%" } }}
/>

      {timelineEvents.map((event, index) => (
        <TimelineEvent
          key={index}
          event={event}
          index={index}
          setActiveEvent={setActiveEvent}
        />
      ))}

      {/* {activeEvent !== null && (
        <motion.div
          className={`absolute ${
            activeEvent % 2 === 0
              ? "left-1/2 -translate-x-full"
              : "right-1/2 translate-x-full"
          } transform  shadow-lg rounded-lg p-6 md:w-60 md:h-40 w-40 md:text-base text-sm z-20 bg-[#3d4040] bg-opacity-95 backdrop-blur-lg text-white `}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ top: `${activeEvent * 150 + 60}px` }}
        >
          <h3 className="font-bold text-lg">
            {timelineEvents[activeEvent].year}
          </h3>
          <h4 className="font-semibold mb-2">
            {timelineEvents[activeEvent].title}
          </h4>
          <p>{timelineEvents[activeEvent].details}</p>
        </motion.div>
      )} */}
    </div>
  );
};

export default Timeline;

