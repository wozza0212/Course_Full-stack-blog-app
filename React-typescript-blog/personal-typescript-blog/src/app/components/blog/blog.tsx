
import { BlogItem } from "./blog-item";
import { FunctionComponent } from "react";
import { Blog } from "../../../../interfaces/Blog";
import { getBlogs } from "../../../../lib/blogs";

type Props = {
  blogs: Blog[]
}

export const fetchBlogs = async () : Promise<object> => {

  const blogs = getBlogs();
  console.log(blogs)
  
  return {
    props: {blogs}
  }

}


const BlogList: FunctionComponent<Props> = async ({blogs}) => {
    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {blogs.map((blog) => (
            <BlogItem blog={blog} key={blog.slug}/>
        ))}
      </div>
    )
}

export default BlogList;