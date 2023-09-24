import { Projects } from "../components/projects.jsx";

export const metadata = {
    title: 'Projects'
}

export default async function Page() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-center">My Projects</h1>
      <Projects />
    </section>
  );
}
