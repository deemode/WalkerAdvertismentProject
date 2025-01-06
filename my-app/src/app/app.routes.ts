import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { LeadformComponent } from './leadform/leadform.component';

export const routes: Routes = [
  { path: 'leads', component: LeadsComponent },
  { path: 'create-lead', component: LeadformComponent },
  { path: '', redirectTo: '/leads', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
