import { ContextProps } from "../types";
export const hello = (_parent: void, _args: void, context: ContextProps) => {
  const { user } = context;
  if (!user) {
    throw new Error("Not authorized");
  }
  console.log(user);
  return "hello world";
};
