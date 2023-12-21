import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { ListCompanyComponent } from './components/list-company/list-company.component';

const routes: Routes = [
  {
    path: '', component: CompanyHomeComponent,
    children: [

      { path: 'add', component: AddCompanyComponent },
      { path: 'list', component: ListCompanyComponent}
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
