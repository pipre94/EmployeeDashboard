import { positionsInterface } from "./positionsInterface";

export interface peopleInterface{
    id:any;
    idNumber:any;
    name: any;
    photo: any;
    admissionDate: any;
    positionId: any;
    positionsEntity: positionsInterface;
}