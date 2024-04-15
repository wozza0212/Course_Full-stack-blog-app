import { getDirectory, getFileNames, getItemInPath, getAllItems } from "./markdown";
import { Blog } from "../interfaces/Blog";
import { MarkdownItem } from "../interfaces/Markdown";



const BLOG_DIR = getDirectory("content/blogs");


const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR);
};

const getBlog = (fileName: string): Blog => {
  const blog = getItemInPath(`${BLOG_DIR}/${fileName}`) as Blog;
  return blog;
};

const getBlogs = () : Blog[]=> {
  const blogFileNames = getBlogFileNames();
  return getAllItems(blogFileNames, getBlog) as Blog[];

}
export {
  getBlogFileNames,
  getBlog,
  getBlogs
};
