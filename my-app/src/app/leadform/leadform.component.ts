import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-leadform',
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './leadform.component.html',
  styleUrl: './leadform.component.css'
})
export class LeadformComponent {
  leadForm: FormGroup;
  private apiUrl = 'https://walkeradvertisment.azurewebsites.net/api/Leads/CreateLead'
  private apiKey = environment.apiKey;

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) {
    this.leadForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.email]],
      zipCode: ['', Validators.required],
      canCommunicateText: [null, Validators.required],
      canCommunicateEmail: [null, Validators.required],
    });
  }
  
  onSubmit(): void {
    if (this.leadForm.valid) {
      const headers = new HttpHeaders({
        'X-Api-Key': this.apiKey,
      });
      this.http
        .post(this.apiUrl, this.leadForm.value, { headers })
        .subscribe({
          next: () => {
            alert('Lead created successfully!');
            this.router.navigate(['/leads']);
          },
          error: (err) => {
            console.error('Error creating lead:', err);
            alert('An error occurred while creating the lead.');
          },
        });
    }
  }


  navigateToLeads(): void {
    this.router.navigate(['/leads']);
  }
}
