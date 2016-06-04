import { IActivityItem } from './models';

export class Activity implements IActivityItem {
    createdAt: number = Firebase.ServerValue.TIMESTAMP;
    type: string;
    result: boolean;

    constructor(type: string, result: boolean) {
        this.type = type;
        this.result = result;
    }
}


