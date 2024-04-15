import type { NextPage } from "next";
import Link from "next/link";
import { BlogList, PortfolioList, BaseLayout } from "./components";
import { getBlogs } from "../../lib/blogs";
import { Blog } from "../../interfaces/Blog";


type Props = {
  blogs: Blog[]
}
const Home: NextPage<Props> = () => {
  const blogs = getBlogs();
  return (
    <BaseLayout>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Newest Blogs
          <Link legacyBehavior href="/blogs">
            <a className="text-sm ml-1 text-indigo-600">(See All)</a>
          </Link>
        </h2>
        <BlogList blogs={blogs}/>
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
