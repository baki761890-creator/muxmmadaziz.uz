import React from "react"
import { FaLink } from "react-icons/fa"
import { motion } from "framer-motion"



type Project = {
  title: string
  image: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "Baki.ai",
    image: "../assets/baki.png",
    description:
      "AI-based platform built with React, TypeScript, and Tailwind CSS.",
    link: "https://baki-ai-1.netlify.app/",
  },
  {
    title: "Movie App",
    image: "../assets/movie.png",
    description:
      "Movie browsing app with API integration using React and TypeScript.",
    link: "https://e-movie-app.netlify.app/",
  },
  {
    title: "Online IT School",
    image: "../assets/edu-online.png",
    description:
      "Educational platform for IT courses with modern UI and responsive design.",
    link: "https://edu-online-it-school.netlify.app/",
  },
  {
    title: "Shopping Cart",
    image: "../assets/shopp.png",
    description:
      "E-commerce solution for managing shopping carts with modern UI and responsive design.",
    link: "https://e-shopping-online.netlify.app/",
  },
]

const Projects: React.FC = () => {
  return (
    <div className="py-20 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          My Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-400 mb-12"
        >
          Here are some of my featured works
        </motion.p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group rounded-2xl overflow-hidden shadow-xl"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-5 opacity-0 md:group-hover:opacity-100 transition duration-300">
                <h2 className="text-xl font-semibold mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-sm">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 bg-emerald-400 text-black p-3 rounded-full hover:scale-110 transition"
                >
                  <FaLink />
                </a>
              </div>

              {/* MOBILE BUTTON */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-emerald-400 p-3 rounded-full text-black md:hidden"
              >
                <FaLink />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects