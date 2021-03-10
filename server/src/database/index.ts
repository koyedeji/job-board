import { DatabaseProps, UserInfo, JobInfo, CompanyInfo } from "../types";
import { Model } from "../lib";

const database: DatabaseProps = {
  users: new Model<UserInfo>("users"),
  companies: new Model<JobInfo>("companies"),
  jobs: new Model<CompanyInfo>("jobs"),
};

export default database;
