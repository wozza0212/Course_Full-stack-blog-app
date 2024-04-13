import fs from "fs";
import { join } from "path";
import { Blog } from "../interfaces/Blog";
const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

const getDirectory = (path: string): string => {
  return join(process.cwd(), path);
};

const BLOG_DIR = getDirectory("content/blogs");

const getItemInPath = (filePath: string): string => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return fileContent;
};

const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR);
};

const getBlog = (fileName: string) => {
  const blog = getItemInPath(`${BLOG_DIR}/${fileName}`);
  return blog;
};
export {
  getBlogFileNames,
  getBlog,
};
