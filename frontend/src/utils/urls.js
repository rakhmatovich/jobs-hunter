export const DOMAIN = "http://localhost:1337";

export const JOBS = DOMAIN + "/api/jobs?populate=company";
export const JOB = DOMAIN + "/api/jobs/id?populate[company][populate]=logo";
export const USERS = DOMAIN + "/api/users";
export const AUTH = DOMAIN + "/api/auth/local";
export const CREATE_SUMMARY = DOMAIN + "/api/summaries";
export const UPDATE_SUMMARY = DOMAIN + "/api/summaries/:id";
