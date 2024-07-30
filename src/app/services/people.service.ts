import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { peopleInterface } from '../models/peopleInterface';
import { peopleModel } from '../models/peopleModel';
import { positionsInterface } from '../models/positionsInterface';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiRoute = "https://localhost:7117/";

  constructor(private http:HttpClient) { }

  getAllPeople(): Observable<peopleInterface[]> {
    return this.http.get<peopleInterface[]>(`${this.apiRoute}People`);
  }
  getPeopleById(id:number): Observable<any> {
    return this.http.get<any>(`${this.apiRoute}People/${id}`);
  }

  getAllPositions(): Observable<positionsInterface[]>{
    return this.http.get<positionsInterface[]>(`${this.apiRoute}Positions`);
  }

  createNewPeople(peopleModel: peopleModel): Observable<any>
  {
    var route = `${this.apiRoute}People`;
    return this.http.post(route, peopleModel);
  }

  updatePeopleById(id:number, peopleModel: peopleModel): Observable<any>
  {
    var route = `${this.apiRoute}People/${id}`;
    peopleModel.id = id;
    return this.http.put(route, peopleModel);
  }

  deletePeople(id:number){
    var route = `${this.apiRoute}People/${id}`;
    return this.http.delete(route);
  }
}
