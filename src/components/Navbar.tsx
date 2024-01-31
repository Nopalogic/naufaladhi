"use client";

import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import profilePic from "/public/profile.jpg";
import Image from "next/image";

export default function Navbar() {
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
      <header className="fixed top-0 z-50 w-full bg-opacity-100">
        <Popover as="header">
          <div className="py-6">
            <nav
              className="relative mx-auto flex max-w-[1244px] items-center justify-between px-8 md:px-12 xl:px-4"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center">
                <div className="flex w-full items-center justify-end md:w-auto">
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="items-center justify-center rounded-md bg-cyan-900 p-2 text-cyan-400 ring-white hover:bg-cyan-800 focus:inline-flex focus:outline-none focus:ring-2">
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>

                {/* Desktop nav */}
                <div className="mx-auto hidden space-x-2.5 rounded-full px-6 py-2.5 text-cyan-100 shadow-md backdrop-blur md:flex">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-base font-semibold leading-10 underline-offset-2 opacity-40 hover:opacity-70"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile nav */}
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-20 p-2 md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <Image
                    src={profilePic}
                    alt="naufal adhi"
                    className="h-12 w-auto rounded-full"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="foces:ring-cyan-600 inline-flex items-center justify-center rounded-md bg-white p-2 text-cyan-400 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-inset">
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div>
                <div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-ssyan-900 block rounded-md px-3 py-2 text-base font-medium hover:bg-cyan-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </header>
    </>
  );
}
