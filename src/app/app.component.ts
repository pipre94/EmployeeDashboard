import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'EmployeeDashboard';
  constructor(private peopleServices: PeopleService){}

  ngOnInit(): void {
  }
}
