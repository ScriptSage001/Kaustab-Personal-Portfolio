import { Injectable } from '@angular/core';
import { Education } from '../models/education-model';

@Injectable({
    providedIn: 'root'
})

export class EducationService {
    educations: Education[] = [
        {
            "degree": "Bachelor of Science",
            "shortDegree": "BSc",
            "institution": "University of Calcutta",
            "subjects": "Computer Science, Mathematics, Physics",
            "startYear": 2016,
            "endYear": 2020
        }
    ];

    getAllEducations(): Education[] {
        return this.educations;
    }
}