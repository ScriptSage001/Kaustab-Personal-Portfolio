import { Timestamp } from "@angular/fire/firestore";

export interface Certificate {
    title: string;
    issuingAuthority: string;
    issuedAt: Timestamp;
    credentialUrl: string;
    formattedIssuedAt: string | null;
}