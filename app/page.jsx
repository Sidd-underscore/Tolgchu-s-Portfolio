import Image from "next/image";
import Profile from "./components/profile";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition rounded p-1 text-sm inline-flex items-end leading-4 text-neutral-900 dark:text-neutral-100"
    />
  );
}

export default async function Page() {
  let host = process.env.HOST ?? 'http://localhost:3401';
  let presence = await fetch(`${host}/presence`).then((res) => res.json());

  return (
    <section>
      <h1 className="text-gray-700 dark:text-white font-bold relative text-2xl md:text-3xl mb-8 tracking-tighter py-4 w-fit">
        <div className="absolute top-0 -left-[25px] w-[calc(100%_+_75px)] h-full bg-gradient-to-br from-pink-500 to-indigo-400 blur-2xl" />
        <span className="blur-none">Hey, I'm ✨Tolgchu✨!</span>
      </h1>

      <div className="md:grid gap-6 grid-cols-2 grid-rows-1">
        <p className="mb-6 md:mb-0 dark:text-gray-200 leading-loose">
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
          project.
        </p>
        <Profile presence={presence} />
      </div>
    </section>
  );
}
