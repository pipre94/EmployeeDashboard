import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { peopleInterface } from '../../models/peopleInterface';

@Component({
  selector: 'app-update-people',
  standalone: true,
  imports: [],
  templateUrl: './update-people.component.html',
  styleUrl: './update-people.component.css'
})
export class UpdatePeopleComponent implements OnInit {
  people:peopleInterface[] = [];

  constructor( private peopleServices: PeopleService){ }

  ngOnInit(): void {
  }

 
}
