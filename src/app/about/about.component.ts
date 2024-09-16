import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { ExperienceService } from '../shared/services/experience-service';
import { SkillService } from '../shared/services/skill-service';
import { Experience } from '../shared/models/experience-model';
import { Skill } from '../shared/models/skill-model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('experienceState',[
      state('hidden', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden' 
      })),
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('detailsState',[
      state('hidden', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden' 
      })),
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ]),
      transition('* => *', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('skillState',[
      state('hidden', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden' 
      })),
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  joiningDate: Date = new Date('2022-03-07');
  experience: number = 0;
  jobs: Experience[] = [];
  allSkills: Skill[] = [];
  skills: Skill[] = [];
  showExperience: boolean = false;
  showSkills: boolean = false;
  skillTypes: string[] = ["All", "Languages", "Frameworks & Technologies", "Tools", "Cloud Platforms", "Methodologies", "Other"];
  typeSelected: string = this.skillTypes[0];
  fadeState: string = 'in';

  constructor(private experienceService: ExperienceService, private skillService: SkillService) {}

  ngOnInit(): void{
    this.calculateExperience();
    this.getAllExperiences();
    this.getAllSkills();
    this.loadSkillsByTypeSelected();
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

  getAllSkills(): void {
    this.allSkills = this.skillService.getAllSkills();
  }

  toggleDetails(index: number): void {
    this.jobs[index].showDetails = !this.jobs[index].showDetails;
  }

  toggleShowExperience() {
    this.showExperience = !this.showExperience;

    const exp = document.getElementsByClassName('experience-header')[0];
    exp.classList.toggle('header-clicked');
  }

  toggleShowSkills() {
    this.showSkills = !this.showSkills;

    const skill = document.getElementsByClassName('skills-header')[0];
    skill.classList.toggle('header-clicked');
  }

  get experienceState() {
    return this.showExperience ? 'visible' : 'hidden';
  }

  get skillState() {
    return this.showSkills ? 'visible' : 'hidden';
  }

  private loadSkillsByTypeSelected() {
    this.skills = [];
    if (this.typeSelected === 'All') {
      this.skills = this.allSkills;
    }
    else {
      this.skills = this.allSkills.filter(skill => skill.type === this.typeSelected);
    }
  }

  onTypeClick(type: string): void {
    this.fadeState = 'out';
    setTimeout(() => {
      this.typeSelected = type;
      this.loadSkillsByTypeSelected();
      this.fadeState = 'in';
    }, 100);
  }
}
