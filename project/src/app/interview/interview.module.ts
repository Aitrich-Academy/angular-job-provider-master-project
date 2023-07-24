import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewListComponent } from './components/interview-list/interview-list.component';
import { InterviewViewComponent } from './components/interview-view/interview-view.component';
import { InterviewHomeComponent } from './components/interview-home/interview-home.component';
import { InterviewRouteModule } from './routes/interview-route.module';



@NgModule({
  declarations: [
    InterviewListComponent,
    InterviewViewComponent,
    InterviewHomeComponent
  ],
  imports: [
    CommonModule,
    InterviewRouteModule
  ]
})
export class InterviewModule { }
