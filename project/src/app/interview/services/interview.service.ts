import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interview } from '../models/interview';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InterviewService {
  baseurl=environment.baseurl;
  jobProviderId=localStorage.getItem('jobProviderId');
  companyId=localStorage.getItem('companyId');
  constructor(private http:HttpClient) { }

  getInterviewList(){
    return this.http.get<Interview[]>(environment.baseurl+'api/Interview/company/company-user/'+this.companyId+'/Interviewlist');
  }
  scheduleInterview(date:any,applicationId:any){
    const dataToSend = {
      applicationId: applicationId,
      date: date
    };
    return this.http.post(this.baseurl+'api/Interview/company/company-user/'+this.jobProviderId+'/Interview',dataToSend)
  }
  
  cancelInterview(id:any){
  return this.http.delete(this.baseurl+'api/Interview/company/company-user/'+id+'/cancel');
  }
}
