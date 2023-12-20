import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterviewService } from '../../services/interview.service';
import { Interview } from '../../models/interview';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interview-view',
  templateUrl: './interview-view.component.html',
  styleUrls: ['./interview-view.component.css']
})
export class InterviewViewComponent {
  ScheduleInteriewForm!: FormGroup;
  id:any;
  constructor(private formBuilder: FormBuilder, private interviewService: InterviewService,private route: ActivatedRoute) { }
  interview: Interview[] = [];

  ngOnInit() {
    // Form initialization
   
    
      this.ScheduleInteriewForm = this.formBuilder.group({
        selectedDate: ['', Validators.required], // Use Validators if the field is required
      });
      this.route.params.subscribe(params => {
      this.id = params['id'];
        // Use the received parameter
      });
  }

  onSubmit() {
    const selectedDate = this.ScheduleInteriewForm.value.selectedDate;
    console.log('Selected Date:', selectedDate);
    alert(selectedDate);
    this.interviewService.scheduleInterview(selectedDate,this.id).subscribe(
      (res) => {
        console.log("Interview Scheduled Successfully", res);
      }
    );
    this.resetForm();
  }
  resetForm() {
    this.ScheduleInteriewForm.reset();
  }

}

