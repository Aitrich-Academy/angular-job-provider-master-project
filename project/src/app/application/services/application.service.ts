import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../models/application';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  jobProviderId=localStorage.getItem('jobProviderId');
  constructor(private http:HttpClient) { }

  getApplicants(){
    return this.http.get<Application[]>(environment.baseurl+'api/v1/job-provider/'+this.jobProviderId+'/getJobApplicants');
  }

}
