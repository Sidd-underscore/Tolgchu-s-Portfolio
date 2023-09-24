import Link from "next/link.js";
import { Projects } from "../../components/projects.jsx";
import projects from "../../lib/projects.json";

export default async function Page({params}) {
  const project = projects.find(item => item.id === params.id);

  return (
    <section>
      <h1 className="font-bold relative text-2xl md:text-3xl mb-8 tracking-tighter py-4 w-fit">
        <div className={"absolute top-0 left-0 w-[calc(100%_+_25px)] h-full bg-gradient-to-br blur-2xl " + project?.gradient} />
        <span className="blur-none">{project?.name || "Project not FOund"}</span>
      </h1>
      <code className="text-sm">{project.dates} • {project.role}</code>

      <p className="mb-2 mt-4">{project.description}</p>
      
      <p>Find {project.name} at <Link href={project.link} target="_blank" className="underline hover:no-underline">{project.link}</Link>!</p>

      <hr className="my-4 border-white/25" />
      <h1 className="text-2xl font-bold mt-8 text-center -mb-6">
        Some other projects
      </h1>
      <Projects />
    </section>
  );
}
