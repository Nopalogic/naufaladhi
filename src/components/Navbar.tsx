"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollDetector from "@/utils/scrollDetector";

export default function Navbar() {
  const scroll = ScrollDetector();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Experiences",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 flex w-full items-center ${scroll.scrollTop ? "lg:backdrop-blur shadow-md":"bg-transparent"}`}
      >
        <div className="container">
          <div className="relative flex items-center justify-center">
            <div className="flex items-center px-4">
              <button
                className="absolute right-4 top-4 block rounded-md bg-cyan-900 p-2 text-cyan-400 hover:bg-cyan-800 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {/* <FontAwesomeIcon icon={faBars} size="2xl" /> */}
              </button>

              <nav
                className={`absolute left-0 top-4 ${isOpen ? "" : "hidden"} w-full rounded-lg bg-slate-900 py-5 lg:static lg:block lg:max-w-full lg:bg-transparent`}
              >
                <ul className="block lg:flex">
                  <li className="lg:hidden">
                    <button
                      className="absolute right-4 top-1 block p-2 text-cyan-400"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {/* <FontAwesomeIcon icon={faXmark} size="2xl" /> */}
                    </button>
                  </li>
                  {navigation.map((nav) => (
                    <li key={nav.name}>
                      <Link
                        href={nav.href}
                        className="mx-8 flex py-1 text-base text-white"
                      >
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
