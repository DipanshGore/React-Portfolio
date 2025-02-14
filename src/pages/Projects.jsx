// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';

const projects = [
  {
    title: "Web Developer Intern at JK Innovative Pvt Limited",
    date: "Amravati, Maharashtra | July 2022 – October 2022",
    description: `Collaborated in a team with three members to develop and enhance a full-stack web application. 
                  Designed and implemented front-end interfaces using HTML, CSS, and JavaScript. 
                  Integrated back-end functionalities and managed database operations.`,
    technologies: ["HTML", "CSS", "JavaScript", "Full-Stack Development"]
  },
  {
    title: "E-Commerce Website",
    date: "Jan-2025",
    description: `Developed a dynamic E-commerce website using React with a component-based architecture. 
                  Integrated multiple APIs, created an internal JSON format database, and implemented 
                  login authentication. Utilized React Bootstrap, Tailwind CSS, Material UI (MUI), 
                  Styled Components, and AOS (Animate on Scroll) for responsive design. 
                  Implemented React Router and Hooks for seamless navigation and state management.`,
    technologies: ["React", "Bootstrap", "Tailwind CSS", "MUI", "AOS"],
  },
  {
    title: "Knight Bite Website Clone",
    date: "Dec-2024",
    description: `Built a responsive replica of the Knight Bite website using ReactJS. 
                  Leveraged Tailwind CSS, React Bootstrap, Styled Components, and Material UI (MUI) 
                  for sleek and modern UI design. Integrated AOS for enhanced animations, ensuring a 
                  smooth and engaging user experience. Utilized React Router and Hooks for state management.`,
    technologies: ["ReactJS", "Tailwind CSS", "Bootstrap", "MUI", "AOS"],
  },
  {
    title: "Personal Portfolio Website",
    date: "May-2024",
    description: `Developed a responsive personal portfolio website using HTML, CSS, JavaScript, 
                  and Bootstrap. Showcased skills, projects, and professional background. 
                  Integrated SQL for dynamic data management, enhancing user experience.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "SQL"],
  },
  {
    title: "Employee Registration & Management Portal",
    date: "Aug-2023",
    description: `Developed using NetBeans IDE and Java. Implemented robust features for employee 
                  data management, ensuring efficiency and reliability.`,
    technologies: ["Java", "NetBeans"],
  },
  {
    title: "Zomato Website Clone",
    date: "Oct-2024",
    description: `Designed and developed a fully responsive Zomato clone using HTML, CSS, and JavaScript. 
                  Enhanced user experience with smooth interactions and mobile optimization. 
                  Focused on responsiveness and user interaction.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Website Clones",
    date: "Nov-Dec-2024",
    description: `Replicated high-traffic platforms including Flipkart, Netflix, Rapido, and Samsung 
                  using HTML, CSS, and Bootstrap. Ensured clean, functional, and responsive designs.`,
    technologies: ["HTML", "CSS", "Bootstrap"],
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-5xl font-bold text-cyan-400 mb-12 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        
        {/* Projects Cards with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition 
                         duration-300 border-t-4 border-cyan-400 p-6 hover:scale-105 transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <FaLaptopCode className="text-cyan-400 text-5xl mx-auto" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.date}</p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                Technologies Used:
              </h4>
              <ul className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <motion.li 
                    key={idx} 
                    className="bg-cyan-900 text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full 
                               hover:bg-cyan-700 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
              
              <a 
                href="#" 
                className="inline-flex items-center text-cyan-400 font-semibold hover:underline"
              >
                View Details <FaExternalLinkAlt className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
