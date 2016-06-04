import { ITypeItem } from './models';

export class TypeItem implements ITypeItem {
    createdAt: number = Firebase.ServerValue.TIMESTAMP;
    type: string;


    constructor(type: string) {
        this.type = type;
    }
}


