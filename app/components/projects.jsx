"use client";

import { motion } from "framer-motion";
import ArrowIcon from "../icons/arrow.jsx";
import projects from "../lib/projects.json";
import Link from "next/link.js";

export const Projects = ({ children }) => {
  return (
    <div
      className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 my-8 flex flex-col space-y-4 w-full"
    >
      <motion.div
        className="max-w-screen grid gap-8 mb-6 lg:mb-16 md:grid-cols-2"
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <div key={project.id}>
            <Project project={project} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Project = ({ project }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className="max-w-screen"
      key={project.id}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group border border-neutral-200 dark:border-neutral-700 transition bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-700 rounded grid gap-2 grid-cols-12 grid-rows-1 px-3 py-4 w-full"
      >
        <img
          src={project.image}
          className="col-span-1 w-full h-auto mt-1 rounded-sm"
          alt={project.name + "'s Icon"}
          title={project.name + "'s Icon"}
        />

        <div className="col-span-10 flex flex-col">
          <p className="font-bold text-neutral-900 dark:text-neutral-100">
            {project.name}
          </p>
          <p className="text-sm transition text-white/75 group-hover:text-white">
            {project.description}
          </p>
        </div>

        <div className="col-span-1 w-full h-full flex items-top justify-end text-neutral-700 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </Link>
    </motion.div>
  );
};
