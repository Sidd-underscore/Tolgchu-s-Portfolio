import Image from "next/image";
import { Projects } from "./components/projects.jsx";
import {ArrowDown} from "lucide-react"

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="bg-neutral-50 dark:bg-neutral-800 hover:shadow-lg hover:bg-neutral-700 transition rounded p-1 text-sm inline-flex items-end leading-4 text-neutral-900 dark:text-neutral-100"
    />
  );
}

export default async function Page() {
  return (
    <section>
      <div className="h-screen flex items-center">
        <div className="-mt-[45vh]">
          <h1 className="font-bold relative text-2xl md:text-3xl mb-8 tracking-tighter py-4 w-fit">
            <div className="absolute top-0 left-0 w-[calc(100%_+_25px)] h-full bg-gradient-to-br from-pink-500 to-indigo-400 blur-2xl" />
            <span className="blur-none">Hey, I'm Tolgchu ✨</span>
          </h1>

          <div className="grid gap-6 grid-cols-2 grid-rows-1">
            <p className="text-gray-200 leading-loose">
              I'm a programmer cat interested in AI, who co-owns{" "}
              <Badge href="https://purgpt.xyz">
                <img
                  alt=""
                  className="w-[1.25em] h-[1.25em] mr-2"
                  src="/purgpt.png"
                />{" "}
                PurGPT
              </Badge>
              , codes in{" "}
              <Badge href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img
                  alt=""
                  className="w-[1.25em] h-[1.25em] mr-2 rounded-sm"
                  src="/js.png"
                />{" "}
                JavaScript
              </Badge>{" "}
              and owns the{" "}
              <Badge href="https://discord.gg/experiments">
                <img alt="" className="w-[1.25em] h-[1.25em] mr-2" src="/deh.png" />{" "}
                Discord Experiment Hub
              </Badge>{" "}
              Discord server.
            </p>
            <div>
              <Image
                src="https://lanyard.cnrad.dev/api/329671025312923648?animated=true&showDisplayName=true"
                width={700}
                height={475}
                sizes="50vw"
                className="hidden dark:block"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Tolgchu's current status on Discord"
                priority
              />
              <Image
                src="https://lanyard.cnrad.dev/api/329671025312923648?animated=true&showDisplayName=true&theme=light"
                width={700}
                height={475}
                sizes="50vw"
                className="dark:hidden block"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="Tolgchu's current status on Discord"
                priority
              />
            </div>
          </div>

          <div className="text-gray-500 font-mono text-sm animate-bounce flex items-center">
            Scroll for more
            <ArrowDown className="w-5 h-5 ml-2"/>

          </div>
        </div>
      </div>

      <div id="projects" className="h-screen flex items-center justify-center">
        <div className="mt-48">
          <h1 className="text-2xl font-bold text-center">My Projects</h1>
          <Projects />
        </div>
      </div>
    </section>
  );
}
