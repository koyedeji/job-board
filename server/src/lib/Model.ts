import FileReader from "./FileReader";
import Util from "./Util";

class Model<T = any> {
  constructor(private fileName: string) {}

  async create(options: T): Promise<{ message: string; id: string }> {
    try {
      const existingContent = await FileReader.read(this.fileName);
      const newContent = Util.addUniqueId(options);
      const response = await FileReader.write(this.fileName, [
        newContent,
        ...existingContent,
      ]);
      return Promise.resolve({
        message: response.message,
        id: newContent.id,
      });
    } catch (err) {
      throw err;
    }
  }

  async list(): Promise<T[]> {
    try {
      return await FileReader.read(this.fileName);
    } catch (err) {
      throw err;
    }
  }

  async findBy(key: string, value: string | number): Promise<T> {
    const field = key || "id";
    try {
      const data = await FileReader.read(this.fileName);
      return (
        data.find((node: Record<string, any>) => node[field] === value) || null
      );
    } catch (err) {
      throw err;
    }
  }

  async get(id: string) {
    const content = await FileReader.read(this.fileName);
    return content.find((node: { id: string }) => node.id === id);
  }
}

export default Model;
