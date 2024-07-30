import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { peopleModel } from '../../models/peopleModel';
import { PeopleService } from '../../services/people.service';
import { positionsInterface } from '../../models/positionsInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { peopleInterface } from '../../models/peopleInterface';

@Component({
  selector: 'app-create-people',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-people.component.html',
  styleUrl: './create-people.component.css'
})
export class CreatePeopleComponent implements OnInit {
  people = new peopleModel();
  positions:positionsInterface[] = [];
  peopleInter:peopleInterface[] = [];
  idBypeoples: number=0;
  constructor( private peopleServices: PeopleService, private route: ActivatedRoute, private router: Router){ }
  
  ngOnInit(): void {
    this.peopleServices.getAllPositions().subscribe(
      (data)=> 
        { 
          this.positions = data;
        });

        this.route.params.subscribe(params => {
          this.idBypeoples = params['id'];
          this.onSelectEmployee(this.idBypeoples);
        });
  }
  onPositionChange(value: number): void {
    console.log('Selected Position ID:', value);
  }

  onSelectEmployee(employeeId: number) {
    this.peopleServices.getPeopleById(employeeId).subscribe(data => {
      this.people = data;
      this.people.photo = '';
      console.log(this.people);
    });
  }
  
  savePeople(){
    if(this.idBypeoples == undefined){
      this.peopleServices.createNewPeople(this.people).subscribe(
        (data) => {
          console.log(data);
          alert('Usuario guardado exitosamente!');
          window.location.reload()
        },
        (error) => {
          console.error('error', error);
          alert('Ocurrió un error al guardar el usuario.');
        }
      );
    }else{
      this.peopleServices.updatePeopleById(this.idBypeoples,this.people).subscribe(
        (data) => {
          console.log(data);
          alert('Usuario Actualizado exitosamente!');
          this.router.navigate([`/list-people`]);

        },
        (error) => {
          console.error('error', error);
          alert('Ocurrió un error al actualizar el usuario.');
        }
      );
    }
  }
}
