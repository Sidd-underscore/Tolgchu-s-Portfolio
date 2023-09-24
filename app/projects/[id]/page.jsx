"use client"

import { Projects } from "../../components/projects.jsx";
import { useRouter } from "next/navigation";
import projects from "../../lib/projects.json";

export default async function Page() {
  const { id } = useRouter();
  const project = projects.find(item => item.id === id);

  return (
    <section>
      <h1 className="font-bold relative text-2xl md:text-3xl mb-8 tracking-tighter py-4 w-fit">
        <div className="absolute top-0 left-0 w-[calc(100%_+_25px)] h-full bg-gradient-to-br from-pink-500 to-indigo-400 blur-2xl" />
        <span className="blur-none">{project.id}</span>
      </h1>

      <div className="grid gap-6 grid-cols-2 grid-rows-1"></div>
      <hr className="border-white/25" />
      <h1 className="text-2xl font-bold mt-8 text-center -mb-6">
        Some other projects
      </h1>
      <Projects />
    </section>
  );
}
