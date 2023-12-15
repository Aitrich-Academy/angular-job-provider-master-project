
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Job, addJob } from '../models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseurl = environment.baseurl;
  companyId = localStorage.getItem('companyId');
  jobProviderId=localStorage.getItem('jobProviderId');
  constructor(private http: HttpClient) { }
  getJob(page: number, limit: number, query?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    // If a query is provided, add it to the parameters
    // if (query) {
    //   params = params.set('search', query);
    // }
    return this.http.get<any[]>(this.baseurl+'api/v1/jobs');
  }

  addJob(job: addJob) {
    return this.http.post(this.baseurl+'company/'+this.companyId+'/job-provider/'+this.jobProviderId+'/job',job);
  }

  updateJob(job:addJob):Observable<any>{
    console.log(job);
 
    return this.http.put(`${this.baseurl}/jobprovider/jobs?id=${job.id}`,job);

  }

  getjobid(jobid:any)

  {

  }
   
    
}
    
