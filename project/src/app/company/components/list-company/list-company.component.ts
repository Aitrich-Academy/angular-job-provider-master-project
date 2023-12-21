import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { company } from '../../models/comapny';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent {
  company:company[];
  constructor(private companyService:CompanyService){}
  ngOnInit(){
    this.getCompany();
  }
  getCompany(){
  
    this.companyService.getCompany().subscribe((response:company[])=>{
      
      console.log(response);
      this.company=response; 
      console.log(this.company)
    })
 }
}
