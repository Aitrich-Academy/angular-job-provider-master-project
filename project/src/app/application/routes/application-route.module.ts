import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationHomeComponent } from '../components/application-home/application-home.component';
import { ApplicationListComponent } from '../components/application-list/application-list.component';
import { ApplicationViewComponent } from '../components/application-view/application-view.component';
import { InterviewViewComponent } from 'src/app/interview/components/interview-view/interview-view.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationHomeComponent,
    children: [
      {
        path: 'list',
        component: ApplicationListComponent
      },
      {
        path: 'view',
        component: ApplicationViewComponent
      }
      
      // {
      //   path: 'schedule/:id',
      //   component: InterviewViewComponent
      // }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicationRouteModule { }
