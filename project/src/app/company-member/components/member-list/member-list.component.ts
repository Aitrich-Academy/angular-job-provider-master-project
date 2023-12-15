import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyMemberService } from '../../services/company-member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  companyMembers: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private companymemberservice: CompanyMemberService
  ) {}

  ngOnInit() {
    this.listCompanyMember();
  }

  listCompanyMember() {
    this.companymemberservice.listCompanyMember().subscribe((data: any[]) => {
      this.companyMembers = data;
    });
  }
}
