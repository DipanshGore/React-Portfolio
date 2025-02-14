// src/pages/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJsSquare, FaReact , FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNpm 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiRedux, SiFirebase, 
  SiMui, SiAuth0, SiMysql, SiStyledcomponents, SiAxios,  
} from 'react-icons/si';

// Importing Colorful Icons
import RestApiIcon from '../assets/icons/rest-api.png';
import CoreJavaIcon from '../assets/icons/core-java.png';
import VscodeIcon from '../assets/icons/vscode.png';
import MysqlWorkbenchIcon from '../assets/icons/mysql-workbench.png';
import OracleSqlPlusIcon from '../assets/icons/oracle-sqlplus.png';
import IntellijIdeaIcon from '../assets/icons/intellij-idea.png';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Core Java Basic'],
    icons: [
      <img src={CoreJavaIcon} alt="Core Java" className="w-8 h-8 mr-3" />
    ],
  },
  {
    category: 'Frontend Development',
    items: [' HTML', 'CSS', ' JavaScript ', 'Bootstrap', 'React.JS', 'Tailwind CSS'],
    icons: [
      <FaHtml5 className="text-orange-600" />,
      <FaCss3Alt className="text-blue-600" />,
      <FaJsSquare className="text-yellow-400" />, 
      <FaBootstrap className="text-purple-600" />, 
      <FaReact className="text-cyan-400 animate-spin-slow" />, 
      <SiTailwindcss className="text-teal-400" />
    ],
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'REST APIs'],
    icons: [
      <FaNodeJs className="text-green-600" />,
      <img src={RestApiIcon} alt="REST API" className="w-8 h-8 mr-3" />
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React Bootstrap', 'Material-UI (MUI)', 'Redux', 'Styled Components', 'Axios'],
    icons: [
      <FaBootstrap className="text-purple-600" />, 
      <SiMui className="text-blue-600" />, 
      <SiRedux className="text-purple-700" />,
      <SiStyledcomponents className="text-pink-500" />,
      <SiAxios className="text-blue-500" />
    ],
  },
  {
    category: 'Authentication',
    items: ['Auth0', 'Firebase Authentication'],
    icons: [
      <SiAuth0 className="text-orange-600" />, 
      <SiFirebase className="text-yellow-500" />
    ],
  },
  {
    category: 'Databases & Hosting',
    items: ['SQL', 'Firebase Firestore'],
    icons: [
      <SiMysql className="text-blue-600" />,
      <SiFirebase className="text-yellow-500" />, 
    ],
  },
  {
    category: 'Other Tools',
    items: ['VS Code', 'MySQL Workbench', 'Oracle SQL* Plus', 'IntelliJ IDEA'],
    icons: [
      <img src={VscodeIcon} alt="VS Code" className="w-8 h-8 mr-3" />,
      <img src={MysqlWorkbenchIcon} alt="MySQL Workbench" className="w-8 h-8 mr-3" />,
      <img src={OracleSqlPlusIcon} alt="Oracle SQL* Plus" className="w-8 h-8 mr-3" />,
      <img src={IntellijIdeaIcon} alt="IntelliJ IDEA" className="w-8 h-8 mr-3" />
    ],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-5xl font-bold text-center text-cyan-400 mb-12 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Skills Cards with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 hover:shadow-cyan-500/50 border-t-4 border-cyan-400"
              whileHover={{ scale: 1.10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                {skillCategory.category}
              </h3>
              <ul className="text-gray-400 space-y-2">
                {skillCategory.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-3xl">
                      {skillCategory.icons?.[idx] || '•'}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
 