import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadformComponent } from './leadform.component';

describe('LeadformComponent', () => {
  let component: LeadformComponent;
  let fixture: ComponentFixture<LeadformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
