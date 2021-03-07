import Model from "./Model";

interface UserInfo {
  email: string;
  password: string;
  id?: string;
  companyId?: string;
}

interface JobsInfo {
  description: string;
  title: string;
  id?: string;
  companyId?: string;
}

const Database = {
  users: new Model<UserInfo>("users"),
  companies: new Model("companies"),
  jobs: new Model<JobsInfo>("jobs"),
};

export default Database;
