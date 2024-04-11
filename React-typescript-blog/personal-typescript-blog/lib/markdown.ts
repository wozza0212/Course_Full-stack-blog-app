import fs from "fs";
import { join } from "path";
export const getFileNames = (dir: string): string[] => {
    return fs.readdirSync(dir);
};

export const getDirectory = (path: string): string => {
    return join(process.cwd(), path);
}

