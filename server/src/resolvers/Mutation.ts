import { ContextProps } from "../types";
import { Token } from "../lib";

interface Login {
  email: string;
  password: string;
}

export const login = async (
  parent: Record<string, never>,
  args: Login,
  context: ContextProps
) => {
  const { email, password } = args;
  const { database } = context;
  const user = await database.users.findBy("email", email);

  if (!(user && user.password === password)) {
    throw new Error("Invalid credentials");
  }

  const token = Token.generate({ id: user.id });
  return {
    token,
  };
};
