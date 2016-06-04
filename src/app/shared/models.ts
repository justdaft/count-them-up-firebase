export interface ITypeItem {
    $key?: string;
    createdAt: number;
    type: string;
}

export interface IPerson {
    name: string;
    age?: number;
    dob: string;
    $key?: string;
    theme: number;
    createdAt?: number;
    activities?: any;
    total: number;
}

export interface IActivityItem {
    $key?: string;
    createdAt: number;
    type: string;
    result: boolean;
}
