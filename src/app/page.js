"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";

import DeveloperDetails from "@/components/Portfolio/DeveloperDetails";
import AboutMe from "@/components/Portfolio/AboutMe";
import MySkills from "@/components/Portfolio/MySkills";
import Timeline from "@/components/Portfolio/Timeline";
import Projects from "@/components/Portfolio/Project";
import Loader from "@/app/Loader/page"
import ReachOut from "@/components/Portfolio/Reachout"
import BlurLightEffect from "@/components/ui/blurEffect"


const skills = [
  
  "/icons/html_r.png",
  "/icons/css_r.png",
  "/icons/js_r.png",
  "/icons/tailwind_res.png",
  "/icons/ts_r.png",
  "/icons/react_r.png",
  "/icons/next_r.png",
  // "/icons/nodejs_r.png",
  "/icons/express.png",
  "/icons/sql_r.png",
  "/icons/mongodb.png",
  
  "/icons/prisma.png",
  "/icons/figma_r.png",
  
  // "/final/css_resized.png",
  
];

const timelineEvents = [
  {
    year: "2021",
    title: "HIGHER SECONDARY EXAMINATION",
    description: "DAV MODEL SCHOOL ,IIT KGP",
    details: "Detailed info about the first project.",
  },
  {
    year: "2021-2025",
    title: "ACADEMY OF TECHNOLOGY",
    description: "BTECH IN COMPUTER SCIENCE AND ENGINEERING",
    details: "Detailed info about joining the company.",
  },
  {
    year: "2023-2024",
    title: "IEEE COMPUTER SOCIETY ",
    description: "VICE-CHAIR",
    details: "Detailed info about the first project.",
  },
  {
    year: "2023",
    title: "MICROSOFT STUDENT AMBASSADOR",
    description: "BETA MLSA",
    details: "Detailed info about starting React.",
  },
  
  
  
 
  
];

const projects = [
  {
    id: 1,
    title: "NARRAIVE",
    techStack: ["Firebase", "React", "Express", "MongoDB"],
    description: "This is a book management application to suggest you books based on your interest and also you can add books to your wishlist and also you can read the books online. It features a personalized recommendation engine and provides an integrated e-reader for a seamless reading experience.",
    image: "/icons/library.png",
    links: {
      github: "https://github.com/ritushreedas2002/library",
      live: "https://library-aes6.vercel.app/"
    },
    slides: [
      { img: "/asd.png", desc: "Description for Slide 1 of Project 1" },
      { img: "/asd.png", desc: "Description for Slide 2 of Project 1" },
      { img: "/asd.png", desc: "Description for Slide 3 of Project 1" },
      { img: "/asd.png", desc: "Description for Slide 4 of Project 1" },
      { img: "/asd.png", desc: "Description for Slide 5 of Project 1" },
    ],
  },
  {
    id: 2,
    title: "INVESTNEST",
    techStack: ["TailwindCSS", "NextJS", "React Query", "MongoDB"],
    description: "This is a personal finance app that helps users to track their expenses and investments. It also provides a platform for users to invest in cryptocurrency and we manage a virtual portfolio for them. The app offers insightful analytics and visualizations to help users make informed financial decisions.",
    image: "/icons/investnest.png",
    links: {
      github: "https://github.com/ritushreedas2002/investnest",
      live: "Ongoing"
    },
    slides: [
      {
        img: "/assets/asset 6.png",
        desc: "Description for Slide 1 of Project 2",
      },
      {
        img: "/assets/asset 7.png",
        desc: "Description for Slide 2 of Project 2",
      },
      {
        img: "/assets/asset 8.png",
        desc: "Description for Slide 3 of Project 2",
      },
      {
        img: "/assets/asset 9.png",
        desc: "Description for Slide 4 of Project 2",
      },
      {
        img: "/assets/asset 10.png",
        desc: "Description for Slide 5 of Project 2",
      },
    ],
  },
  {
    id: 3,
    title: "ALGOACE",
    techStack: ["ReactJS","TailWindCSS", "Nodemailer"],
    description: "This is a Chrome extension designed to help users revise Data Structures and Algorithms (DSA) concepts efficiently. It offers daily DSA problems to keep users engaged . Users can also take quizzes on various topics to test their understanding. The extension includes a reminder system for to-dos, ensuring users stay on top of their study schedule and complete their tasks on time.",
    image: "/icons/extension.png", // Added image key
    links: {
      github: "https://github.com/ritushreedas2002/project3", // Added appropriate links
      live:"string",
    },
    slides: [
      {
        img: "/assets/asset 11.png",
        desc: "Description for Slide 1 of Project 3",
      },
      {
        img: "/assets/asset 12.png",
        desc: "Description for Slide 2 of Project 3",
      },
      {
        img: "/assets/asset 13.png",
        desc: "Description for Slide 3 of Project 3",
      },
      {
        img: "/assets/asset 14.png",
        desc: "Description for Slide 4 of Project 3",
      },
      {
        img: "/assets/asset 15.png",
        desc: "Description for Slide 5 of Project 3",
      },
    ],
  },
];


const staggeredVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Set the loader to stay for 6 seconds

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BlurLightEffect />
          <div className="max-w-screen bg-black bg-grid-white/[0.2] relative flex flex-col md:flex-row md:h-screen">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <DeveloperDetails staggeredVariants={staggeredVariants} />
            <div className="flex-col justify-center md:w-3/5 overflow-y-auto md:h-screen ">
              {showContent && (
                <div>
                  <AboutMe />
                  <MySkills
                    skills={skills}
                    fadeInAnimationVariants={fadeInAnimationVariants}
                  />
                  <Timeline timelineEvents={timelineEvents} />
                  <Projects projects={projects} />
                  <ReachOut />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
