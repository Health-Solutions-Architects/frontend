import { NavbarComponent } from '@Components/navbar.component';
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, NavbarComponent],
  templateUrl: 'doctor-treatment.component.html',
  styleUrl: 'doctor-treatment.component.scss',
})
export class DoctorTreatmentComponent {}
