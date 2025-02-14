// src/pages/Home.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Download } from 'lucide-react';
import DGImage from '../assets/DG Image.jpeg';
import ResumePDF from '../assets/Dipansh Bhaskar Gore Front-End Resume.pdf'; // Updated import

const Home = () => {
  // State for Modal (if needed for future updates)
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  // Function to handle PDF Download
  const onDownloadClick = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Dipansh_Bhaskar_Gore_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center text-center lg:text-left relative overflow-hidden space-y-8 lg:space-y-0 lg:space-x-16 px-4 md:px-12 lg:px-24">
        
        {/* Left Side: Image Section */}
        <motion.div 
          className="rounded-full overflow-hidden shadow-xl border-4 border-gray-500 w-64 h-64 lg:w-80 lg:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.15 }}
        >
          <img 
            src={DGImage} 
            alt="Dipansh Gore" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side: Text Section */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-blue-500">Dipansh Gore</span>
          </motion.h1>
          <br />

          <motion.p 
            className="text-xl md:text-2xl mb-6 font-light text-gray-300 drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            A Professional {' '}
            <span className="font-semibold text-cyan-400">
              <Typewriter
                words={['Full-Stack Web Developer', 'React.JS Developer', 'Front-End Developer', 'UI/UX Designer']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.p>
          <br />

          {/* Buttons Container */}
          <div className="flex space-x-4">
            {/* View My Work Button */}
            <motion.a
              href="/projects"
              className="flex items-center animate-bounce space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:from-blue-600 hover:to-cyan-500 transition transform hover:-translate-y-1 hover:scale-110 duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            {/* Download Resume Button */}
            <motion.button
              onClick={onDownloadClick}
              className="flex items-center animate-bounce space-x-2 bg-gradient-to-r from-green-400 to-teal-500 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:from-teal-500 hover:to-green-400 transition transform hover:-translate-y-1 hover:scale-110 duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <span>Download Resume</span>
              <Download className="w-5 h-5" />
            </motion.button>
          </div>
          
        </div>
        
      </section>
    </div>
  );
};

export default Home;
