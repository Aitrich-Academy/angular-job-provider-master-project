import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../../sevices/job.service';
import { Job, addJob } from '../../models/job';
import { CompanyService } from 'src/app/company/services/company.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent {
  addJobForm!: FormGroup;
  industryName: any[];
  locationName: any[];
  catogoryName:any[];
  formattedDate: string;

  constructor(private formBuilder: FormBuilder, private jobService: JobService,private companyService:CompanyService) { }
  // job: Job[] = [];

  ngOnInit():void {
    // Form initialization
    this.addJobForm = this.formBuilder.group({
      // Define form controls with validation rules
      jobTitle: ['', Validators.required],
      
      locationId: ['', Validators.required],
      industryId:['',Validators.required],
      jobSummary: ['', Validators.required],
      categoryId: ['', [Validators.required]],
      // salary: ['', [Validators.required,]],
      postedBy:['',[Validators.required]]
     
      // Add more form controls as needed
    });
    this.loadIndustries();
    this.loadLocations();
    this.loadCategories();
  }

  onSubmit() {
    const jobData: addJob = this.addJobForm.value;
      alert(jobData);
      const currentDate = new Date().toISOString();
      // const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
      const companyId = localStorage.getItem('companyId');
      jobData.companyId=companyId;
      jobData.postedDate=currentDate;
      jobData.postedBy=localStorage.getItem('jobProviderId');
      if(companyId){

    this.jobService.addJob(jobData).subscribe(
      (res: any) => {
        console.log(res);
      })
    }
    else{
      alert("Cannot post job Please add company details");
    }
    this.resetForm();
 }
  resetForm() {
    this.addJobForm.reset();
  }
  loadIndustries() {
    this.companyService.getIndustries().subscribe((data: any[]) => {
      alert(data)
      this.industryName = data;
    });
  }
  
  loadLocations() {
    this.companyService.getLocations().subscribe((data: any[]) => {
     this.locationName = data;
      
    });
  }
  loadCategories() {
    this.companyService.getCategories().subscribe((data: any[]) => {
      this.catogoryName = data;
      });
  }

}
