import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyMemberRoutingModule } from './routes/company-member-routing.module';
import { MemberAddComponent } from './components/member-add/member-add.component';
import { MemberHomeComponent } from './components/member-home/member-home.component';
import { MemberListComponent } from './components/member-list/member-list.component';



@NgModule({
  declarations: [
    MemberAddComponent,
    MemberHomeComponent,
    MemberListComponent
  ],
  imports: [
    CommonModule,
    CompanyMemberRoutingModule
  ]
})
export class CompanyMemberModule { }
