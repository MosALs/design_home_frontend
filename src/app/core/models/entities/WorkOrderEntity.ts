import { Data } from '@angular/router';
export class WorkOderEntity {

    id: number;
    rating: number;
    review: string;
    sendingClientId: number;
    receivingUserId: number;
    requsetDate: Date;
    closedDate: Data;
    openDate: Date;
    workNeeded: string;
    paid: boolean;
}
