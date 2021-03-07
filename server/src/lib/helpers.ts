import crypto from "crypto";

export default class Utils {
  public static secret: string | Buffer;
  static uuid() {
    return crypto.randomBytes(16).toString("hex");
  }

  static addUniqueId(content: Record<string, any>) {
    return {
      ...content,
      id: this.uuid(),
    };
  }

  static generateSecret() {
    if (Utils.secret) {
      return Utils.secret;
    }
    const secret = Buffer.from("Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64");
    Utils.secret = secret;
    return secret;
  }
}
