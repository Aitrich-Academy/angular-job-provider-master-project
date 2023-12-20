export class Job {
    jobTitle:string='';
    companyName:string='';
    location:string='';
    jobDescription='';
    jobType:string='';
    salary:number | undefined;
    onsite:string=''
  static id: string;
}
export interface addJob {
    postedBy: string;
    id:string;
    jobTitle?:string;
    jobSummary:string;
    locationName?:any;
    industryName?:any;
    jobCategoryName?:any;
    postedByNavigationFirstName?:string;
    companyId:any;
    postedDate:any;
}

