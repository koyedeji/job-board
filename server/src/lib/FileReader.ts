import fs from "fs/promises";
import path from "path";

const getFullFilePath = (filename: string) => {
  return path.join(process.cwd(), "src", "data", `${filename}.json`);
};

export default class FileReader {
  static async read(fileName: string) {
    try {
      const content = await fs.readFile(getFullFilePath(fileName), "utf8");
      return JSON.parse(content);
    } catch (err) {
      throw err;
    }
  }

  static async write(
    fileName: string,
    content: unknown
  ): Promise<Record<string, any>> {
    const result =
      typeof content === "string" ? content : JSON.stringify(content, null, 2);
    try {
      await fs.writeFile(getFullFilePath(fileName), result, "utf8");
      return Promise.resolve({
        message: "success",
      });
    } catch (error) {
      throw error;
    }
  }
}
