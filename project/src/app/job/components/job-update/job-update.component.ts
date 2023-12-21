
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../../sevices/job.service';
import { Job, addJob } from '../../models/job';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/company/services/company.service';

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent {
  addJobForm!: FormGroup;
  industryName: any[];
  locationName: any[];
  catogoryName:any[];
  formattedDate: string;
  id:any;
  constructor(private formBuilder: FormBuilder, private jobService: JobService,private route:ActivatedRoute,private companyService:CompanyService) {
   
   }
  // job: Job[] = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
     // Use the received parameter
   });
    this.getJobById(this.id);
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

  // onSubmit() {
  //   const jobData: addJob = this.addJobForm.value;

  //   this.jobService.addJob(jobData).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //     })
  // }


  resetForm() {
    this.addJobForm.reset();
  }

  updateJob(){
    const jobData: addJob = this.addJobForm.value;
    const currentDate = new Date().toISOString();
    // const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
    const companyId = localStorage.getItem('companyId');
    jobData.companyId=companyId;
    jobData.postedDate=currentDate;

    jobData.postedBy=localStorage.getItem('jobProviderId');
    if(companyId){

  this.jobService.updateJob(jobData,this.id).subscribe(
    (res: any) => {
      console.log(res);
      alert("updated Successfully");
    })
  }
  else{
    alert("Cannot update job Please add company details");
  }
  this.resetForm();

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
  getJobById(id:any){
    this.jobService.getJobById(id).subscribe(response=>{
      // console.log(response[0].jobTitle);
      const apiResponse = {
        
        jobTitle: response[0].jobTitle,
        jobSummary: response[0].jobSummary,
        locationId: response[0].locationId,
        industryId: response[0].industryId,
        categoryId:response[0].categoryId,
        postedBy:response[0].postedBy
        // Other fields
      };
      this.addJobForm.patchValue(apiResponse);
    })
}



}
