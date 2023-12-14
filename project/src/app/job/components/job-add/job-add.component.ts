import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../../sevices/job.service';
import { Job, addJob } from '../../models/job';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent {
  addJobForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private jobService: JobService) { }
  // job: Job[] = [];

  ngOnInit() {
    // Form initialization
    this.addJobForm = this.formBuilder.group({
      // Define form controls with validation rules
      jobTitle: ['', Validators.required],
      
      locationName: ['', Validators.required],
      industryName:['Validators.required'],
      jobSummary: ['', Validators.required],
      jobCategoryName: ['', [Validators.required]],
      // salary: ['', [Validators.required,]],
      postedByNavigationFirstName:['',[Validators.required]],
     workplace: ['', [Validators.required,]]
      // Add more form controls as needed
    });
  }

  onSubmit() {
    const jobData: addJob = this.addJobForm.value;

    this.jobService.addJob(jobData).subscribe(
      (res: any) => {
        console.log(res);
      })

    // this.resetForm();

  }
  resetForm() {
    this.addJobForm.reset();
  }

}
