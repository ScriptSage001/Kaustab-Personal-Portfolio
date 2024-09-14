import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience-model';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {
    private jobsCollection = '/jobs';

    constructor(private firestore: AngularFirestore) { }

    getAllExperiences(): Observable<Experience[]> {
        return this.firestore.collection<Experience>(this.jobsCollection, ref =>
            ref.orderBy('serialNo', 'desc')).valueChanges();
    }
}
