import React from "react"
import { FaLink } from "react-icons/fa"
import { motion } from "framer-motion"

import bakiImg from "../assets/baki-ai.png"
import movieImg from "../assets/movie-app.png"
import eduImg from "../assets/edu-online.png"
import shopImg from "../assets/shopp.png"
import wattImg from "../assets/wattApp.png"
import { useApp } from "../context/AppContext"

type Project = {
  title: string
  image: string
  description: string
  link: string
}

const Projects: React.FC = () => {
  const { dark, lang } = useApp()

  const text = {
    uz: {
      title: "Mening loyihalarim",
      desc: "Mening eng yaxshi ishlanmalarim",
    },
    ru: {
      title: "Мои проекты",
      desc: "Мои лучшие работы",
    },
    en: {
      title: "My Projects",
      desc: "Here are some of my featured works",
    },
    de: {
      title: "Meine Projekte",
      desc: "Hier sind einige meiner Projekte",
    },
  }

  const t = text[lang]

  const projects: Project[] = [
    {
      title: "Baki.ai",
      image: bakiImg,
      description:
        lang === "uz"
          ? "AI asosida yaratilgan platforma (React, TS, Tailwind)"
          : lang === "ru"
          ? "Платформа на базе AI (React, TS, Tailwind)"
          : lang === "de"
          ? "KI-basierte Plattform (React, TS, Tailwind)"
          : "AI-based platform built with React, TypeScript, Tailwind CSS",
      link: "https://baki-ai-1.netlify.app/",
    },
    {
      title: "Movie App",
      image: movieImg,
      description:
        lang === "uz"
          ? "API bilan ishlaydigan kino ilovasi"
          : lang === "ru"
          ? "Приложение фильмов с API"
          : lang === "de"
          ? "Film-App mit API"
          : "Movie browsing app with API integration",
      link: "https://e-movie-app.netlify.app/",
    },
    {
      title: "Online IT School",
      image: eduImg,
      description:
        lang === "uz"
          ? "IT kurslar platformasi"
          : lang === "ru"
          ? "Платформа IT курсов"
          : lang === "de"
          ? "IT-Lernplattform"
          : "Educational IT platform",
      link: "https://edu-online-it-school.netlify.app/",
    },
    {
      title: "Shopping Cart",
      image: shopImg,
      description:
        lang === "uz"
          ? "E-commerce savdo tizimi"
          : lang === "ru"
          ? "E-commerce корзина"
          : lang === "de"
          ? "E-Commerce Warenkorb"
          : "Shopping cart system",
      link: "https://online-shopp-store.netlify.app/",
    },
    {
      title: "WhatsApp Clone",
      image: wattImg,
      description:
        lang === "uz"
          ? "Real-time chat ilovasi"
          : lang === "ru"
          ? "Чат приложение в реальном времени"
          : lang === "de"
          ? "Echtzeit-Chat-App"
          : "Real-time chat app",
      link: "https://chat-sphere-clone--muxamammad.replit.app",
    },
  ]

  return (
    <div className={`py-20 min-h-screen transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold mb-4 text-center mt-10 ${
            dark ? "text-white" : "text-emerald-500 text-shadow-2xs text-shadow-black"
          }`}
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-center mb-12 ${
            dark ? "text-neutral-500" : "text-black"
          }`}
        >
          {t.desc}
        </motion.p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative group rounded-2xl overflow-hidden shadow-xl ${
                dark ? "" : "shadow-2xl shadow-black"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform transition duration-500 group-hover:scale-110"
              />

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