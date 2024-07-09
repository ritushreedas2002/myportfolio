// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { CgDetailsMore } from "react-icons/cg";
// import { FaGithub } from "react-icons/fa";
// import { IoPlayCircle } from "react-icons/io5";

// import { Saira, Signika } from "next/font/google";

// const saira = Saira({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });
// const signika = Signika({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const Projects = ({ projects }) => {
//   const [activeProject, setActiveProject] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % activeProject.slides.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide(
//       (prev) =>
//         (prev - 1 + activeProject.slides.length) % activeProject.slides.length
//     );
//   };

//   return (
//     <div className={`w-full overflow-y-auto mt-4 ${signika.className}`}>
//       <h2
//         className={`text-4xl font-bold mb-4 mt-20 text-white text-center hover:text-[#E6FFA0] ${signika.className}`}
//       >
//         Projects
//       </h2>
//       {projects.map((project) => (
//         <div key={project.id} className="flex items-center justify-center p-8">
//           <div className="bg-[#3d4040] bg-opacity-95 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-3xl w-full flex flex-col transition-all duration-300 hover:bg-opacity-90 hover:shadow-xl">
//             <h2 className="text-2xl font-bold mb-4 text-[#14B8A6]">
//               {project.title}
//             </h2>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.techStack.map((tech, techIndex) => (
//                 <span
//                   key={techIndex}
//                   className="bg-[#0d0e0e] text-white px-4 py-2 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             {/* <button
//               className="absolute top-4 right-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
//               onClick={() => {
//                 setActiveProject(project);
//                 setCurrentSlide(0);
//               }}
//             >
//               Learn More
//             </button> */}
//             <div
//               id="bento-grid"
//               className="container flex-1"
//               style={{ gridAutoRows: "80px" }}
//             >
//               <div
//                 id="grid-container"
//                 className="flex flex-col gap-6 lg:grid lg:grid-cols-3"
//               >
//                 <div className="lg:col-span-2 row-start-1 row-end-6 group rounded-2xl gradient-hover-outer">
//                   <div className="gradient-hover-inner rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
//                     <Image
//                       src={project.image}
//                       alt="invest"
//                       width={700}
//                       height={300}
//                     />
//                   </div>
//                 </div>
//                 <div className="row-start-1 row-end-5 group rounded-2xl  bg-black text-gray-300">
//                   <div className=" rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center ">
//                     <p className="text-sm  font-light">{project.description}</p>
//                     <div className="flex absolute bottom-3">
//                       <Link href={project.links.github}>
//                         <FaGithub className="text-[#2EC0B0] text-3xl" />
//                       </Link>
//                       <Link href={project.links.live}>
//                         <IoPlayCircle className="text-[#2EC0B0] text-3xl" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div className="row-start-5 row-end-6 group rounded-2xl gradient-hover-outer">
//                   <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
//                     <h3 className="text-2xl">Feature 6</h3>
//                     <p className="text-lg text-center font-light">
//                       Description for Feature 6
//                     </p>
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {activeProject && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm p-4 z-50">
//           <div className="bg-white rounded-xl p-2 md:p-8 max-w-2xl md:max-w-5xl w-full relative">
//             <h2 className="text-2xl font-bold mb-4">{activeProject.title}</h2>
//             <div className="flex justify-between items-center">
//               <button
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition-colors duration-300"
//                 onClick={handlePrevSlide}
//               >
//                 Back
//               </button>
//               <div className="flex items-center justify-center w-full md:h-80 h-60 overflow-hidden relative">
//                 {activeProject.slides.map((slide, index) => (
//                   <div
//                     key={index}
//                     className={`absolute w-full flex flex-col items-center md:flex-row transition-transform duration-300 ${
//                       index === currentSlide
//                         ? "translate-x-0"
//                         : index < currentSlide
//                         ? "-translate-x-full"
//                         : "translate-x-full"
//                     }`}
//                   >
//                     <div className="w-full md:w-2/3">
//                       <Image
//                         src={slide.img}
//                         alt={`Slide ${index + 1}`}
//                         width={600}
//                         height={600}
//                         className="rounded-xl"
//                       />
//                     </div>
//                     <div className="w-full md:w-1/3 md:pl-8 mt-4 md:mt-0">
//                       <p>{slide.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition-colors duration-300"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//             <button
//               className="absolute top-4 right-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
//               onClick={() => setActiveProject(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";
import { Saira, Signika } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Projects = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeProject.slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + activeProject.slides.length) % activeProject.slides.length
    );
  };

  return (
    <div className={`min-w-screen overflow-y-auto  ${signika.className}`}>
      <h2
        className={`text-4xl font-bold mb-4   text-center text-[#E6FFA0] ${signika.className}`}
      >
        Projects
      </h2>
      {projects.map((project) => (
        <div key={project.id} className="flex items-center justify-center p-8">
          <div className="bg-[#3d4040] bg-opacity-95 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-3xl w-full flex flex-col transition-all duration-300 hover:bg-opacity-90 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-[#14B8A6] hover:text-[#dce4c9]">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-[#0d0e0e] text-white px-4 py-2 rounded-full hover:text-[#dce4c9]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div
              id="bento-grid"
              className="container flex-1"
              style={{ gridAutoRows: "80px" }}
            >
              <div
                id="grid-container"
                className="flex flex-col gap-6 lg:grid lg:grid-cols-3"
              >
                <div className="lg:col-span-2 row-start-1 row-end-6 group rounded-2xl gradient-hover-outer">
                  <div className="gradient-hover-inner rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="responsive"
                      width={700}
                      height={300}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <div className="row-start-1 row-end-5 group rounded-2xl bg-black text-gray-300">
                  <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center">
                    <p className="text-sm font-light hover:text-[#dce4c9]">{project.description}</p>
                    <div className="flex space-x-4 mt-auto">
                      <Link href={project.links.github} passHref>
                        
                          <FaGithub className="text-[#2EC0B0] text-3xl hover:text-[#dce4c9]" />
                        
                      </Link>
                      {project.links.live && (
                        <Link href={project.links.live} passHref>
                          
                            <IoPlayCircle className="text-[#2EC0B0] text-3xl hover:text-[#dce4c9]" />
                        
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm p-4 z-50">
          <div className="bg-white rounded-xl p-2 md:p-8 max-w-2xl md:max-w-5xl w-full relative">
            <h2 className="text-2xl font-bold mb-4">{activeProject.title}</h2>
            <div className="flex justify-between items-center">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition-colors duration-300"
                onClick={handlePrevSlide}
              >
                Back
              </button>
              <div className="flex items-center justify-center w-full md:h-80 h-60 overflow-hidden relative">
                {activeProject.slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-full flex flex-col items-center md:flex-row transition-transform duration-300 ${
                      index === currentSlide
                        ? "translate-x-0"
                        : index < currentSlide
                        ? "-translate-x-full"
                        : "translate-x-full"
                    }`}
                  >
                    <div className="w-full md:w-2/3">
                      <Image
                        src={slide.img}
                        alt={`Slide ${index + 1}`}
                        width={600}
                        height={600}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="w-full md:w-1/3 md:pl-8 mt-4 md:mt-0">
                      <p>{slide.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition-colors duration-300"
                onClick={handleNextSlide}
              >
                Next
              </button>
            </div>
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              onClick={() => setActiveProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

