"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAssignment2, setShowAssignment2] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-blue-700 to-gray-800 text-white fixed w-full z-20 shadow-lg top-0 left-0"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">James</h1>
          <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-blue-700 to-gray-800 md:bg-transparent md:flex md:space-x-6 text-center md:text-left transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
            {["Home", "About Me", "Contact", "Assignment"].map((link) => (
              <li key={link} className="md:py-0 py-2">
                <a href={`#${link.replace(" ", "").toLowerCase()}`} className="block text-white hover:text-yellow-400 transition-colors" onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Sections */}
      <div className="mt-24">
        {/* Home Section */}
        <motion.section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-4 py-12">
          <motion.img src="/my-picture.jpg" alt="My Picture" className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-yellow-400 shadow-2xl object-cover"/>
          <motion.h2 className="mt-6 text-4xl font-bold text-yellow-400">Hello, I'm Omoregie James</motion.h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl">Welcome to my portfolio! I am passionate about technology, problem-solving, and innovation.</p>
        </motion.section>

        {/* About Me Section */}
        <motion.section id="aboutme" className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-center px-4 py-12">
          <motion.h2 className="text-4xl font-bold text-yellow-400">About Me</motion.h2>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl">I’m Omoregie James, a Computer Science student at Yaba College of Technology (YABATECH) with matriculation number <strong>F/HD/23/3210125</strong>. I am passionate about technology, problem-solving, and leveraging innovative solutions to make life easier. My academic journey is focused on developing skills in programming, software development, and data analysis. I look forward to making impactful contributions to the tech world!</p>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-4 py-12">
          <motion.h2 className="text-4xl font-bold text-yellow-400">Contact</motion.h2>
          <p className="mt-4 text-lg text-gray-300"><strong>📞 Phone:</strong> +234 906 898 5819</p>
          <p className="text-lg text-gray-300"><strong>📧 Email:</strong> Omoregiejames200@gmail.com</p>
        </motion.section>

        {/* Assignment Section */}
        <motion.section id="assignment" className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-center px-4 py-12">
          <motion.h2 className="text-4xl font-bold text-yellow-400">Assignment 1</motion.h2>
          <motion.h2 className="text-2xl font-bold text-gray-300">Write short note on:</motion.h2>
          <div className="mt-8 max-w-3xl text-left text-gray-300 space-y-6">
            {[
              { title: "Machine Learning", content: "Machine learning enables computers to learn from data and improve performance without explicit programming." },
              { title: "Artificial Intelligence (AI)", content: "AI creates systems capable of tasks requiring human intelligence, like problem-solving and decision-making." },
              { title: "Supervised Learning", content: "Supervised learning trains models using labeled data for prediction or classification." },
              { title: "Unsupervised Learning", content: "Unsupervised learning focuses on discovering patterns in unlabeled data, like clustering or dimensionality reduction." },
              { title: "Deep Learning", content: "Deep learning uses neural networks with multiple layers to solve complex problems." },
            ].map(({ title, content }) => (
              <motion.div key={title}>
                <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
                <p className="text-sm md:text-lg">{content}</p>
              </motion.div>
            ))}
          </div>

          {/* Read More Button */}
          {!showAssignment2 && (
            <motion.button
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              onClick={() => setShowAssignment2(true)}
            >
              Read More
            </motion.button>
          )}

          {/* Assignment 2 - Hidden until button is clicked */}
          {showAssignment2 && (
            <motion.div className="mt-12 text-left text-gray-300 justify-center max-w-3xl">
              <motion.h2 className="text-4xl font-bold justify-center text-yellow-400">Assignment 2</motion.h2>
              <motion.h2 className="text-2xl font-bold text-gray-300">create a problem that can be solved by identifying the issues,  debugging and isolating or solving the problem. You are to document the procedure on how you go about it:</motion.h2>

              <div className="mt-8 space-y-6">
                <motion.h3 className="text-2xl font-bold text-yellow-400">Problem Statement:</motion.h3>
                <p>Many students experience time management issues and can get stressed if they cannot meet the set deadlines.</p>

                <motion.h3 className="text-2xl font-bold text-yellow-400">Problem Solution:</motion.h3>
                <p>Educate learners on time management, perform tasks of organizing in a timely and efficient manner through the use of technology, and encourage the balancing of study time with other tasks and responsibilities.</p>

                <motion.h3 className="text-2xl font-bold text-yellow-400">5 Tips to Better Your Time Management:</motion.h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>1. Set reminders for all your tasks:</strong> The key to time management success is to know your deadlines and set reminders.</li>
                  <li><strong>2. Create a daily planner:</strong> Plan out your day in advance to stay on track.</li>
                  <li><strong>3. Give each task a time limit:</strong> Assigning time limits can improve efficiency.</li>
                  <li><strong>4. Block out distractions:</strong> Avoid interruptions to stay focused.</li>
                  <li><strong>5. Establish a routine:</strong> Having a structured routine reduces stress.</li>
                </ul>
              </div>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
}
