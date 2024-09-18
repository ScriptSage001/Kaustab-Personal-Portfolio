import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Certificate } from '../models/certificate-model';

@Injectable({
  providedIn: 'root'
})

export class CertificateService {
    private certificatesCollection = '/certificates';

    constructor(private firestore: AngularFirestore) { }

    getAllCertificates(): Observable<Certificate[]> {
        return this.firestore.collection<Certificate>(this.certificatesCollection, ref =>
            ref.orderBy('issuedAt', 'desc')).valueChanges();
    }
}
