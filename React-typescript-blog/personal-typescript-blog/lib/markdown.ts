import fs from "fs";
import { join } from "path";
export const getFileNames = (dir: string): string[] => {
    return fs.readdirSync(dir);
};

export const getDirectory = (path: string): string => {
    return join(process.cwd(), path);
}

export const getItemInPath = (filePath: string) : string => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return fileContent
}
