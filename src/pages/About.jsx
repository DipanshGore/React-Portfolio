import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaLightbulb, 
  FaRocket, 
  FaGraduationCap, 
  FaCertificate, 
  FaCheckCircle 
} from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-gray-100 py-20 flex flex-col justify-center items-center text-center">
      <div className="max-w-5xl mx-auto px-4">

        {/* About Me Section */}
        <motion.h2 
          className="text-6xl font-bold text-cyan-400 mb-6 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 leading-relaxed mb-12 drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Motivated Front-End Developer with hands-on experience in building responsive web applications using React, 
          HTML, CSS, JavaScript, and modern UI frameworks like Tailwind CSS and React-Bootstrap. 
          Seeking to leverage technical expertise, problem-solving abilities, and a proactive mindset to contribute to innovative projects in a dynamic organization.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <SkillCard 
            icon={<FaLaptopCode className="text-cyan-400 text-6xl mx-auto mb-4" />}
            title="Front-End Expertise"
            description="Proficient in React, HTML, CSS, and JavaScript, building dynamic, responsive user interfaces."
          />
          <SkillCard 
            icon={<FaLightbulb className="text-yellow-400 text-6xl mx-auto mb-4" />}
            title="Problem Solver"
            description="Analytical thinker with a proactive mindset, constantly learning and finding solutions to complex challenges."
          />
          <SkillCard 
            icon={<FaRocket className="text-red-400 text-6xl mx-auto mb-4" />}
            title="Growth-Oriented"
            description="Eager to contribute to innovative projects, continuously improving technical skills and knowledge."
          />
        </div>

        {/* Education Section */}
        <SectionTitle title="Education" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <EducationCard 
            icon={<FaGraduationCap className="text-blue-400 text-6xl mx-auto mb-4" />}
            title="Bachelor of Engineering"
            details="Computer Science & Engineering, Sipna COET, SGBAU | CGPA: 8.5/10, Amravati, Maharashtra | May 2024"
          />
          <EducationCard 
            icon={<FaGraduationCap className="text-green-400 text-6xl mx-auto mb-4" />}
            title="Higher Secondary Certificate"
            details="Shri Samarth Jr College of Science, Ghatanji, Maharashtra | Feb 2020"
          />
          <EducationCard 
            icon={<FaGraduationCap className="text-purple-400 text-6xl mx-auto mb-4" />}
            title="Secondary School Certificate"
            details="S.P.M High School, Ghatanji, Maharashtra | March 2018"
          />
        </div>

        {/* Certifications Section */}
        <SectionTitle title="Certifications" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <CertificationCard 
            icon={<FaCertificate className="text-yellow-400 text-6xl mx-auto mb-4" />}
            title="AWS Educate Cloud 101"
            provider="Amazon | 2024"
          />
          <CertificationCard 
            icon={<FaCertificate className="text-blue-400 text-6xl mx-auto mb-4" />}
            title="Full Stack Java"
            provider="JSpiders Hyderabad | Present"
          />
          <CertificationCard 
            icon={<FaCertificate className="text-green-400 text-6xl mx-auto mb-4" />}
            title="Website with WordPress"
            provider="Coursera | 2024"
          />
        </div>

        {/* Soft Skills Section */}
        <SectionTitle title="Soft Skills" />
        <ul className="text-left space-y-4">
          <li className="text-xl text-gray-300">
            <FaCheckCircle className="inline text-cyan-400 mr-2" />
            Strong problem-solving and analytical thinking.
          </li>
          <li className="text-xl text-gray-300">
            <FaCheckCircle className="inline text-cyan-400 mr-2" />
            Written and Oral Communication in English, Hindi, and Marathi.
          </li>
          <li className="text-xl text-gray-300">
            <FaCheckCircle className="inline text-cyan-400 mr-2" />
            Team collaboration and leadership.
          </li>
        </ul>
      </div>
    </section>
  );
};

// Reusable Components
const SectionTitle = ({ title }) => (
  <motion.h2 
    className="text-5xl font-bold text-cyan-400 mb-10 "
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {title}
  </motion.h2>
);

const SkillCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:shadow-cyan-500/50 border-t-4 border-cyan-400 hover:scale-105 transform transition duration-300"
    whileHover={{ scale: 1.20 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
  >
    {icon}
    <h3 className="text-2xl font-bold mb-2 text-gray-100">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const EducationCard = ({ icon, title, details }) => (
  <SkillCard icon={icon} title={title} description={details} />
);

const CertificationCard = ({ icon, title, provider }) => (
  <SkillCard icon={icon} title={title} description={provider} />
);

export default About;
