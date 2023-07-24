import { Component, OnInit } from '@angular/core';
import { JobService } from '../../sevices/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})


export class JobListComponent implements OnInit{
  jobs:Job[]=[];

  constructor(private jobService: JobService) { }
  ngOnInit(){
    this.jobService.getJob().subscribe((jobs: Job[])=>{

      this.jobs=jobs;
      console.log(this.jobs);
      
    });

  }

}
