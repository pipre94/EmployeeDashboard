import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { peopleInterface } from '../../models/peopleInterface';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-people',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './list-people.component.html',
  styleUrl: './list-people.component.css'
})
export class ListPeopleComponent implements OnInit{
  people:peopleInterface[] = [];

  constructor(private peopleServices: PeopleService, private router: Router){}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(){
    this.peopleServices.getAllPeople().subscribe(data=> {
      this.people = data;
      console.log(this.people);
    });
  }

  deletePeople(id:number){
    console.log(id);
    this.peopleServices.deletePeople(id).subscribe( data => window.location.reload() );
  }

  updatePeopleById(id:number){
    this.router.navigate([`/update-people/${id}`]);
  }  

}
