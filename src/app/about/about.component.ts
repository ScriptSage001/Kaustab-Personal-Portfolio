import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { DatePipe } from '@angular/common';

import { ExperienceService } from '../shared/services/experience-service';
import { SkillService } from '../shared/services/skill-service';
import { CertificateService } from '../shared/services/certificate-service';
import { AwardService } from '../shared/services/award-service';
import { EducationService } from '../shared/services/education-service';

import { Experience } from '../shared/models/experience-model';
import { Skill } from '../shared/models/skill-model';
import { Certificate } from '../shared/models/certificate-model';
import { Award } from '../shared/models/award-model';
import { Education } from '../shared/models/education-model';

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
    ]),
    trigger('certificateState',[
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
    trigger('awardState',[
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
    trigger('educationState',[
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
  certificates: Certificate[] = [];
  awards: Award[] = [];
  educations: Education[] = [];

  showExperience: boolean = false;
  showSkills: boolean = false;
  showCertificate: boolean = false;
  showAwards: boolean = false;
  showEducation: boolean = false;

  skillTypes: string[] = ["All", "Languages", "Frameworks & Technologies", "Tools", "Cloud Platforms", "Methodologies", "Other"];
  typeSelected: string = this.skillTypes[0];
  awardSlideIndex: number = 0;

  fadeState: string = 'in';

  constructor(
    private datePipe: DatePipe,
    private experienceService: ExperienceService, 
    private skillService: SkillService,
    private certificateService: CertificateService,
    private awardService: AwardService,
    private educationService: EducationService) {}

  ngOnInit(): void{
    this.calculateExperience();
    this.getAllExperiences();
    this.getAllSkills();
    this.loadSkillsByTypeSelected();
    this.getAllCertificates();
    this.getAllAwards();
    this.showAwardSlide();
    this.getAllEducations();
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

  getAllCertificates(): void {
    this.certificateService.getAllCertificates().subscribe(data => {
      this.certificates = data;

      this.certificates.forEach(x => {
        x.formattedIssuedAt = this.datePipe.transform(
          x.issuedAt.toDate(), 'MMM, yyyy')
      });
    });
  }

  getAllAwards(): void {
    this.awardService.getAllAwards().subscribe(data => {
      this.awards = data;

      this.awards.forEach(x => {
        x.formattedreceivedOn = this.datePipe.transform(
          x.receivedOn.toDate(), 'MMM, yyyy')
      });
    });
  }

  getAllEducations(): void {
    this.educations = this.educationService.getAllEducations();
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

  toggleShowCertificate() {
    this.showCertificate = !this.showCertificate;

    const cert = document.getElementsByClassName('certificate-header')[0];
    cert.classList.toggle('header-clicked');
  }

  toggleShowAward() {
    this.showAwardSlide();
    this.showAwards = !this.showAwards;

    const award = document.getElementsByClassName('award-header')[0];
    award.classList.toggle('header-clicked');
  }

  toggleShowEducation() {
    this.showEducation = !this.showEducation;

    const edu = document.getElementsByClassName('education-header')[0];
    edu.classList.toggle('header-clicked');
  }

  get experienceState() {
    return this.showExperience ? 'visible' : 'hidden';
  }

  get skillState() {
    return this.showSkills ? 'visible' : 'hidden';
  }

  get certificateState() {
    return this.showCertificate ? 'visible' : 'hidden';
  }

  get awardState() {
    return this.showAwards ? 'visible' : 'hidden';
  }

  get educationState() {
    return this.showEducation ? 'visible' : 'hidden';
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

  selectAwardSlide(index: number): void {
    this.awardSlideIndex = index;
    this.showAwardSlide();
  }

  showAwardSlide(): void {
    var index = this.awardSlideIndex;

    const slides = document.getElementsByClassName('slider-image');
    Array.from(slides).forEach(x => {
      x.classList.remove('slider-active')
    });
    const slide = document.getElementById(`slide-${index}`);
    slide?.classList.add('slider-active');

    const navs = document.getElementsByClassName('slider-nav');
    Array.from(navs).forEach(x => {
      x.classList.remove('slider-nav-active')
    });
    const nav = document.getElementById(`nav-${index}`);
    nav?.classList.add('slider-nav-active');
  }
}
