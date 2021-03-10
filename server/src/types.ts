import { ExpressContext } from "apollo-server-express";
import { Model } from "./lib";

export interface UserInfo {
  email: string;
  password: string;
  id?: string;
  companyId?: string;
}

export interface JobInfo {
  description: string;
  title: string;
  id?: string;
  companyId?: string;
}

export interface CompanyInfo {
  id: string;
  name: string;
  description: string;
}

export interface ContextProps extends ExpressContext {
  database: DatabaseProps;
  user: { id: string; iat: string };
}

export interface DatabaseProps {
  users: Model;
  companies: Model;
  jobs: Model;
}
