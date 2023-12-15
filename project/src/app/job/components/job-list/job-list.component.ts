import { Component, OnInit } from '@angular/core';
import { addJob } from '../../models/job';
import { JobService } from '../../sevices/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: addJob[] = [];
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  itemsPerPage = 5;
  searchQuery: string = '';

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }
  getJobs() {
    this.jobService.getJob(this.currentPage, this.itemsPerPage,this.searchQuery
      ).subscribe(
      (res: any) => {
        this.jobs = res;
        // this.currentPage = res.currentPage;
        // this.totalPages = res.totalPages;
        // this.totalItems = res.totalItems;
      },
      (error) => {
        console.error('Error fetching job data:', error);
      }
    );
  }

  changePage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.getJobs();
    }
  }

  
  onSearch() {
      this.currentPage = 1; // Reset to the first page when a new search query is entered
     this.getJobs();
     }
 
 
   
  }
  


