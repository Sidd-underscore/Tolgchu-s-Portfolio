import Link from "next/link.js";
import { Projects } from "../../components/projects.jsx";
import projects from "../../lib/projects.json";

export async function generateMetadata({ params }) {
  const project = projects.find((item) => item.id === params.id);

  return {
    title: project?.name
      ? project?.name + " - Projects"
      : "404 Project Not Found - Projects",
    description: project?.description 
      ? project?.description
      : "This project doesn't exist :("
  };
}

export default async function Page({ params }) {
  const project = projects.find((item) => item.id === params.id);

  return (
    <section>
      <h1 className="font-bold relative text-2xl md:text-3xl mb-8 tracking-tighter py-4 w-fit">
        <div
          className={`absolute top-0 -left-2 w-[calc(100%_+_75px)] h-full bg-gradient-to-br blur-2xl
            ${
              project?.gradient != undefined
                ? project?.gradient
                : "from-red-600 to-red-600"
            }`}
        />
        <span className="blur-none text-gray-700 dark:text-white">
          {project?.name || <code>404 Project Not Found</code>}
        </span>
      </h1>
      {project && (
        <code className="text-sm">
          {project?.dates} • {project?.role}
        </code>
      )}

      <p className="mb-2 mt-4">
        {project?.description ||
          "This project does not exist... Check out the ones below!"}
      </p>

      {project && (
        <p>
          Find {project?.name} at{" "}
          <Link
            href={project?.link}
            target="_blank"
            className="underline hover:no-underline"
          >
            {project?.link}
          </Link>
          !
        </p>
      )}

      <hr className="my-4 border-white/25" />
      <h1 className="text-2xl font-bold mt-8 text-center -mb-6">
        Some other projects
      </h1>
      <Projects />
    </section>
  );
}
