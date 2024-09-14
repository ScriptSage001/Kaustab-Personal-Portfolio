import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../shared/services/experience-service';
import { Experience } from '../shared/models/experience-model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  joiningDate: Date = new Date('2022-03-07');
  experience: number = 0;
  jobs: Experience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void{
    this.calculateExperience();
    this.getAllExperiences();
  }

  calculateExperience(): void {
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - this.joiningDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    this.experience = parseFloat(diffInYears.toFixed(1));
  }

  getAllExperiences(): void {
    this.experienceService.getAllExperiences().subscribe(data => {
      this.jobs = data;
    });
  }

  toggleDetails(index: number): void {
    this.jobs[index].showDetails = !this.jobs[index].showDetails;
  }
}
