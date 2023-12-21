import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { MatCardModule } from '@angular/material/card';
import { ListCompanyComponent } from './components/list-company/list-company.component';

@NgModule({
  declarations: [
    AddCompanyComponent,
    CompanyHomeComponent,
    ListCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class CompanyModule { }
