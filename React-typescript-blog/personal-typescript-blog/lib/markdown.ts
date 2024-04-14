import fs from "fs";
import { join } from "path";
import { Blog } from "../interfaces/Blog";
import matter from "gray-matter";
import { MarkdownItem } from "../interfaces/Markdown";
const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

const getDirectory = (path: string): string => {
  return join(process.cwd(), path);
};

const BLOG_DIR = getDirectory("content/blogs");

const getItemInPath = (filePath: string): MarkdownItem => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {...data, content} as MarkdownItem
};

const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR);
};

const getBlog = (fileName: string): Blog => {
  const blog = getItemInPath(`${BLOG_DIR}/${fileName}`) as Blog;
  return blog;
};
export {
  getBlogFileNames,
  getBlog,
};
