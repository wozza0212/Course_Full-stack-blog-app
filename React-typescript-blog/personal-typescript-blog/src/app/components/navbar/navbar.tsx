import Link from "next/link";
import Image from "next/legacy/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Removed from "../removed-login/login-nav";

const navigation = [
  { name: "Blogs", href: "/blogs" },
  { name: "Portfolio", href: "/portfolios" },
];

const Navbar = () => {
  return (
    <>
      {/* NAVIGATION START */}
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link legacyBehavior href="/">
                <a>
                  <span className="sr-only">Your Company</span>
                  <Image
                    width={30}
                    height={30}
                    alt="Your Company"
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            {navigation.map((item) => (
              <Link legacyBehavior key={item.name} href={item.href}>
                <a className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="hidden md:block">{/* Search Input Component */}</div>
        </nav>
      </div>

      {/* <Transition
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                > */}
      {/* <button
                    className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                  > */}

      {/* <Removed /> */}

      {/* </button> */}
      {/* </Transition> */}
      {/* NAVIGATION END */}
    </>
  );
};

export default Navbar;
