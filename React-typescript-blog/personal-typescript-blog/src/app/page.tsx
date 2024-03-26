import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/legacy/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Navbar, Footer, Header } from "./components";


const blogs = [
  {
    slug: "nft-marketplace-in-react-js-next-typescript-full-guide",
    title: "NFT Marketplace in React, Typescript & Solidity - Full Guide",
    description:
      "Learn how to use React / Next JS, Solidity, and Pinata(IPFS) to create NFT marketplace on Ethereum. All In Typescript.",
    date: "2022-12-12",
    coverImage: "https://thrangra.sirv.com/Ethereum_blue_light-small.jpg",
  },
  {
    slug: "web-development-and-coding-full-course",
    title: "Web Development & Code 101 - Full Guide [2022]",
    description:
      "Learn programming in JS language, HTML, and CSS. Create a Web Application made in React JS. The path to the final project includes many assignments, code exercises, and challenges.",
    date: "2022-08-12",
    coverImage: "https://thrangra.sirv.com/Course_logo%20copy.jpg",
  },
  {
    slug: "rust-webassembly-with-js-ts-the-practical-guide",
    title: "Rust & WebAssembly with JS (TS) - The Practical Guide",
    description:
      "Learn how to code in Rust! Compile the code to WebAssembly, prepare JS/TS frontend and finish the course by creating the practical Snake game that can run in any browser.",
    date: "2022-04-12",
    coverImage: "https://thrangra.sirv.com/Rust_small.jpg",
  },
  {
    slug: "unity-2d-with-c-complete-game-dev-course",
    title: "Unity 2D With C# - Complete Game Dev Course",
    description:
      "Create the complete 2D survival game in Unity with C#. Learn best practices and patterns.",
    date: "2022-02-12",
    coverImage: "https://thrangra.sirv.com/Final_Unity_2D_Small.jpg",
  },
  {
    slug: "markdown-full-example",
    title: "Markdown Extensive Example",
    description: "Learn how to write markdown",
    date: "2022-01-12",
    coverImage:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50",
  },
];

const portfolios = [
  {
    slug: "software-engineer-siemens",
    title: "Software Engineer Siemens",
    description: "Working as C++ and C# software engineer",
    employmentDate: "2022-01-12",
    coverImage:
      "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=50",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/eincodepro",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/c/Eincode",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 576 512" {...props}>
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/filip_jerga",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Jerga99",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
        {/* <Head>
          <title>Portfolio - Filip Jerga</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}

        <div className="relative">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <Navbar />
            <Header />
          </div>
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              priority
              layout="fill"
              alt=""
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1369&q=60"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Newest Blogs
            <Link legacyBehavior href="/blogs">
              <a className="text-sm ml-1 text-indigo-600">(See All)</a>
            </Link>
          </h2>

          {/* Blog List Starts */}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {blogs.map((blog) => (
              <div key={blog.slug} className="group">
                <div className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                  <Link legacyBehavior href={`/blogs/${blog.slug}`}>
                    <a>
                      <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                        <Image
                          priority
                          layout="fill"
                          objectFit="cover"
                          src={blog.coverImage}
                          className="rounded-lg hover:cursor-pointer"
                          alt={""}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                      <span aria-hidden="true" className="inset-0" />
                      {blog.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {blog.description}
                    </p>
                  </div>
                </div>
                <Link legacyBehavior href={`/blogs/${blog.slug}`}>
                  <a className="text-sm font-bold text-gray-700">Read More</a>
                </Link>
              </div>
            ))}
          </div>
          {/* Blog List Ends */}

          <br></br>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Portfolios
            <Link legacyBehavior href="/portfolios">
              <a className="text-sm ml-1 text-indigo-600">(See All)</a>
            </Link>
          </h2>

          {/* Portfolio List Starts */}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {portfolios.map((portfolio) => (
              <div key={portfolio.slug} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    layout="fill"
                    src={portfolio.coverImage}
                    alt={""}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link legacyBehavior href={`/portfolios/${portfolio.slug}`}>
                    <a>
                      <span className="absolute inset-0" />
                      {portfolio.title}
                    </a>
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {portfolio.description}
                </p>
              </div>
            ))}
          </div>
          {/* Portfolio List Ends */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
