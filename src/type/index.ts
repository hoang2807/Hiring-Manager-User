export interface IResponsive<T> {
  status: boolean;
  statusCode: number;
  path: string;
  data: T;
  timestamp: string;
}

export interface IJob {
  id: number;
  title: string;
  enterpriseName: string;
  job_description: string;
  job_requirements: string;
  position: string;
  skills: string;
  salary: string;
  working_time: string;
  location: string;
  benefits: string;
  deadline_date: string;
  enterpriseId: number;
  image: string;
}
