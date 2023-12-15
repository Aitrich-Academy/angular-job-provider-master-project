import { Component, OnInit } from '@angular/core';
import { CompanyMemberService } from '../../services/company-member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit{

  companyMember: any[] = [];

  constructor(private router: Router, private companymemberservice: CompanyMemberService) {}

  ngOnInit() {
   
  }

}
