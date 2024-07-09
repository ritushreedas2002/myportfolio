import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = ({ staggeredVariants }) => {
  return (
    <div className="mb-4">
      <div className="flex space-x-4 justify-center">
        {[
          { icon: FaEnvelope, link: "mailto:ritushreedas20027@gmail.com" },
          { icon: FaLinkedin, link: "https://www.linkedin.com/in/ritushree-das/" },
          { icon: FaGithub, link: "https://github.com/ritushreedas2002" },
          { icon: FaDownload, link: "/resume/resume.pdf", download: true },
        ].map(({ icon: Icon, link, download }, index) => (
          <motion.div
            key={link}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={staggeredVariants}
            className="overflow-hidden relative p-4 mx-2 rounded-md shadow-md cursor-pointer"
            onClick={() => {
              if (download) {
                const linkElement = document.createElement("a");
                linkElement.href = link;
                linkElement.download = "Resume.pdf";
                document.body.appendChild(linkElement);
                linkElement.click();
                document.body.removeChild(linkElement);
              } else {
                window.open(link, "_blank");
              }
            }}
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.5, duration: 0.5 }}
            >
              <Icon className="text-[#14B8A6] text-2xl hover:text-[#dce4c9]" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
