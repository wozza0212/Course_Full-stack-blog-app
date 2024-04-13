import type { NextPage } from "next";
import Link from "next/link";
import { BlogList, PortfolioList, BaseLayout } from "./components";
import { getFileNames, getDirectory, getItemInPath } from "../../lib/markdown";

export const fetchBlogs = async () : Promise<string[]> => {
  const directory = getDirectory("content/blogs");
  const fileNames = getFileNames(directory);
  console.log(fileNames);
  fileNames.forEach((fileName) => {
    const postContent = getItemInPath(`${directory}/${fileName}`);
    console.log(postContent);


  })
  return fileNames

}

const Home: NextPage = () => {
  fetchBlogs();
  return (
    <BaseLayout>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Newest Blogs
          <Link legacyBehavior href="/blogs">
            <a className="text-sm ml-1 text-indigo-600">(See All)</a>
          </Link>
        </h2>
        <BlogList />
        <br></br>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Portfolios
          <Link legacyBehavior href="/portfolios">
            <a className="text-sm ml-1 text-indigo-600">(See All)</a>
          </Link>
        </h2>
        <PortfolioList />
    </ BaseLayout>
  );
};

export default Home;
