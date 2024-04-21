import Link from "next/link";
import Image from "next/legacy/image";
import { XMarkIcon } from "@heroicons/react/24/outline";


const navigation = [
    { name: "Blogs", href: "/blogs" },
    { name: "Portfolio", href: "/portfolios" },
  ];

const Removed = () => {
    return (
        <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
        <div className="flex items-center justify-between px-5 pt-4">
          <div>
            <Image
              height={20}
              width={20}
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </div>
          <div className="-mr-2">
            <button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close main menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link legacyBehavior key={item.name} href={item.href}>
              <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="px-4">{/* Search Input Component */}</div>
        <a
          href="#"
          className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
        >
          Log in
        </a>
      </div>
    )
}

export default Removed