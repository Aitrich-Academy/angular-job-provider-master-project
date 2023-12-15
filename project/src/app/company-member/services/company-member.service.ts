import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyMemberService {

  constructor(private http: HttpClient) {}

  addCompanyMember(data:any){
    return this.http.post<any>(environment.baseurl+'api/Company/addcompanymember',data);
  }
}
