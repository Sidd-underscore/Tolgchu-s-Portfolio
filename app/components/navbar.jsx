"use client"

import clsx from "clsx"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { LayoutGroup, motion } from "framer-motion"
import navItems from '../lib/navItems.json'

export default function Navbar() {
  const pathname = usePathname()


  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="fixed top-8 left-[50%] [transform:translate(-50%,0)] flex justify-center">
        <LayoutGroup>
          <nav
            className="font-mono font-bold text-sm border border-neutral-700 leading-loose uppercase flex justify-center items-center relative px-4 pb-0 fade md:overflow-auto scroll-pr-6 md:relative bg-neutral-200 dark:bg-neutral-800/50 backdrop-blur-lg rounded-full w-fit"
            id="nav"
          >
            <div className="flex flex-row space-x-0">
              {Object.entries(navItems).map(([path, { name, alias }]) => {
                const isActive = path === pathname || pathname.includes(alias)
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                      {
                        "text-neutral-500": !isActive
                      }
                    )}
                  >
                    <span className="relative py-1 px-2">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute h-[1em] top-2 mx-1 inset-0 blur-lg bg-neutral-400 dark:bg-neutral-600 z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  )
}
