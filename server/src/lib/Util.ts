import crypto from "crypto";

export default class Util {
  static uuid() {
    return crypto.randomBytes(16).toString("hex");
  }

  static addUniqueId(content: Record<string, any>) {
    return {
      ...content,
      id: this.uuid(),
    };
  }
}
