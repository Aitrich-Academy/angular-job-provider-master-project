import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { companyMember, listMember } from '../Models/company-member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyMemberService {
  baseurl = environment.baseurl;
  jobProviderId=localStorage.getItem('jobProviderId');
  companyId=localStorage.getItem('companyId');

  constructor(private http: HttpClient) {}

  addCompanyMember(data:companyMember){
     return this.http.post<any>(this.baseurl+'api/Company/job-provider/'+this.companyId+'/addcompanymember',data);
   }

   getCompany():Observable<any[]>{   
    return this.http.get<any[]>(this.baseurl+'api/v1/job-provider/'+this.jobProviderId+'/getCompany');
  }

  listCompanyMember(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + 'api/job-provider/' + this.companyId + '/listcompanymember');
  }
  
}
