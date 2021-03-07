import db from "./models";

const Query = {
  jobs: async () => await db.jobs.list(),
  job: (root: any, args: { id: string }) => db.jobs.get(args.id),
};

const Job = {
  company: (job: Record<string, any>) => db.companies.get(job.companyId),
};

const resolvers = { Query, Job };
export default resolvers;
