import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { company } from '../models/comapny';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseurl = environment.baseurl;
  jobProviderId=localStorage.getItem('jobProviderId');
  constructor(private http: HttpClient) { }

  addCompany(data:company){
   
      return this.http.post<any>(this.baseurl+'api/Company/job-provider/'+this.jobProviderId+'/company',data);
     }
  
     getIndustries(): Observable<any[]> {
      return this.http.get<any[]>(this.baseurl+'api/v1/GetIndustries');
    }
  
    getLocations(): Observable<any[]> {
      return this.http.get<any[]>(this.baseurl+'api/v1/GetLocations');
    }
  
}
