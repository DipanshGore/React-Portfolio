// src/pages/Contact.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GmailIcon from '../assets/icons/gmail.png';
import LinkedInIcon from '../assets/icons/linkedin.png';
import GitHubIcon from '../assets/icons/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_a9f4mjg', // Replace with your EmailJS Service ID
      'template_z7fwaor', // Replace with your EmailJS Template ID
      form.current,
      '5uYRwdNe-hoIQzJLv'   // Replace with your EmailJS Public Key
    )
    .then((result) => {
      console.log(result.text);
      setIsSubmitted(true);
      form.current.reset(); // Clear form after submission
    }, (error) => {
      console.log(error.text);
      alert("Failed to send the message. Please try again.");
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-5xl font-bold text-cyan-400 mb-8 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I’m currently open to new opportunities! Feel free to reach out for collaborations or just to say hello.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <motion.form 
            ref={form}
            className="bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 hover:shadow-2xl transition duration-300 hover:scale-105 transform hover:shadow-2xl hover:shadow-cyan-500/50 border-t-4 border-cyan-400"
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Send a Message</h3>
            <input 
              type="text" 
              name="from_name"
              placeholder="Your Name" 
              className="w-full p-4 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:border-cyan-400"
              required
            />
            <input 
              type="email" 
              name="from_email"
              placeholder="Your Email" 
              className="w-full p-4 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:border-cyan-400"
              required
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="5"
              className="w-full p-4 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:border-cyan-400"
              required
            ></textarea>
            <motion.button 
              type="submit" 
              className="w-full bg-cyan-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-cyan-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>

            {isSubmitted && (
              <motion.p 
                className="text-green-500 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Your message has been sent successfully!
              </motion.p>
            )}
          </motion.form>

          {/* Contact Information */}
          <motion.div 
            className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 hover:scale-105 transform hover:shadow-2xl hover:shadow-cyan-500/50 border-t-4 border-cyan-400"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-4">
              Feel free to reach out via email or connect with me on LinkedIn or GitHub.
            </p>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center justify-center md:justify-start"
                whileHover={{ scale: 1.1 }}
              >
                <img src={GmailIcon} alt="Gmail" className="w-8 h-8 mr-4" />
                <a 
                  href="mailto:dgore7078@gmail.com" 
                  className="text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                  dgore7078@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center justify-center md:justify-start"
                whileHover={{ scale: 1.1 }}
              >
                <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8 mr-4" />
                <a 
                  href="https://www.linkedin.com/in/dipansh-gore-561586247"
                  className="text-gray-300 hover:text-cyan-400 transition duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center justify-center md:justify-start"
                whileHover={{ scale: 1.1 }}
              >
                <img src={GitHubIcon} alt="GitHub" className="w-8 h-8 mr-4" />
                <a 
                  href="https://github.com/DipanshGore" 
                  className="text-gray-300 hover:text-cyan-400 transition duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
