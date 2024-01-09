export const DOMAIN = 'http://localhost:1337'

export const JOBS = DOMAIN + '/api/jobs?populate=company'
export const JOB = DOMAIN + '/api/jobs/id?populate[company][populate]=logo'

export const USERS = "http://localhost:1337/api/users";