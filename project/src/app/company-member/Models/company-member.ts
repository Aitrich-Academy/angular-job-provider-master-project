export interface companyMember{
    companyId:string;
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    phone: number,
}

export interface listMember{
    companyId:string;
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    phone: number,
    company: string,
    jobPosts: string
}