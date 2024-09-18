import { Timestamp } from "@angular/fire/firestore";

export interface Award {
    title: string;
    issuingAuthority: string;
    certificateUrl: string;
    receivedOn: Timestamp
    formattedreceivedOn: string | null;
}