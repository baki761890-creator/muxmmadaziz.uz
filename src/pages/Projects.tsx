import React from 'react'
import { FaLink } from "react-icons/fa"

// ✅ rasmlarni import qilish (ENG TO‘G‘RI YO‘L)
import bakiImg from '../assets/baki-ai.png'
import movieImg from '../assets/movie-app.png'
import eduImg from '../assets/edu-online.png'

type Project = {
  title: string
  image: string
  description: string
  links: string
}

const projects: Project[] = [
  {
    title: 'Baki.ai',
    image: bakiImg,
    description: 'AI-based platform built with React + TypeScript and Tailwind CSS.',
    links: 'https://baki-ai-1.netlify.app/'
  },
  {
    title: 'Movie App',
    image: movieImg,
    description: 'Movie browsing app with API integration using React TS.',
    links: 'https://e-movie-app.netlify.app/'
  },
  {
    title: 'Online IT School',
    image: eduImg,
    description: 'Educational platform for IT courses built with React TS.',
    links: 'https://edu-online-it-school.netlify.app/'
  }
]

const Projects: React.FC = () => {
  return (
    <div className="page-transition py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="mb-10">Here are some of my projects:</p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="
                absolute inset-0 
                bg-black/60 
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                transition duration-300 
                flex flex-col justify-center items-center text-center p-4
              ">
                <h2 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-200 text-sm">
                  {project.description}
                </p>

                {/* DESKTOP + MOBILE BUTTON */}
                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6 
                    bg-emerald-400 
                    p-4 
                    rounded-2xl 
                    text-black 
                    opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                    transition
                  "
                >
                  <FaLink />
                </a>
              </div>

              {/* 🔥 MOBILE FLOAT BUTTON (EXTRA UX) */}
              <a
                href={project.links}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  absolute bottom-3 right-3 
                  bg-emerald-400 
                  p-3 
                  rounded-full 
                  text-black 
                  sm:hidden
                "
              >
                <FaLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects