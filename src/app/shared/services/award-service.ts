import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Award } from '../models/award-model';

@Injectable({
  providedIn: 'root'
})


export class AwardService {
    private awardsCollection = '/awards';

    constructor(private firestore: AngularFirestore) { }

    getAllAwards(): Observable<Award[]> {
        return this.firestore.collection<Award>(this.awardsCollection, ref =>
            ref.orderBy('receivedOn', 'desc')).valueChanges();
    }
}