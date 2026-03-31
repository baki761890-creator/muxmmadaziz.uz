
import React from 'react'
import { FaLink } from "react-icons/fa";

const projects = [
  {
    title: 'Baki.ai',
    image: '../public/baki-ai.png',
    description: 'AI-based platform built with React + TypeScript and Tailwind CSS.',
    links: 'https://baki-ai-1.netlify.app/'
  },
  {
    title: 'Movie App',
    image: '../public/movie-app.png',
    description: 'Movie browsing app with API integration using React TS.',
    links: 'https://e-movie-app.netlify.app/'
  },
  {
    title: 'Online IT School',
    image: '../public/edu-online.png',
    description: 'Educational platform for IT courses built with React TS.',
    links: 'https://edu-online-it-school.netlify.app/'
  }
]

const Projects = () => {
  return (
    <div className="page-transition py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="mb-10">Here are some of my projects:</p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-white text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-200 text-sm">{project.description}</p>
                <a href={project.links} target="_blank" rel="noopener noreferrer" className=" mt-6 bg-emerald-400 p-4 rounded-2xl">
                  <FaLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects





