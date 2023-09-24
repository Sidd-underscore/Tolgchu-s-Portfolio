import Link from "next/link.js";
import { socialLinks } from "../lib/socials.js";

function Social({ data }) {
  return (
    <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition text-gray-400 hover:text-gray-200">
      <Link href={data.link} target="_blank" title={data.name}>
        {data.icon}
      </Link>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="sitcky bottom-0 p-4 bg-white/5 border border-white/5 rounded-md mb-8 flex items-center justify-between">
      <div>
        <strong>Tolgchu</strong>
      </div>
      <div className="flex space-x-2">
        {socialLinks.map((social, index) => (
          <span key={index}>
            <Social data={social} />
          </span>
        ))}
      </div>
    </footer>
  );
}
