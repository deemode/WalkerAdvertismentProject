import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export class LeadsComponent {
  leads: any[] = [];
  leadDetails: any = null;
  private apiUrl = 'https://walkeradvertisment.azurewebsites.net/api/Leads/GetAllLeads'
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient, private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
    this.fetchLeads();
  }

  fetchLeads(): void {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });

    this.http.get<any[]>(this.apiUrl, { headers })
    .subscribe(
      (data) =>{
        this.leads = data;
      },
      (error) => {
        console.error('Error fetching leads:', error);
      }
    );
  }

  openDetails(leadId: string, content: any): void {
    this.leadDetails = null;
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });

    this.http
      .get<any>(`https://walkeradvertisment.azurewebsites.net/api/Leads/GetLeadById/${leadId}`, { headers })
      .subscribe(
        (data) => {
          this.leadDetails = data;
        },
        (error) => {
          console.error('Error fetching lead details:', error);
        }
      );

      this.modalService.open(content, { centered: true });
  }

  navigateToCreateLead(): void {
    this.router.navigate(['/create-lead']);
  }
}
