import { Routes } from '@angular/router';
import { ListPeopleComponent } from './people/list-people/list-people.component';
import { CreatePeopleComponent } from './people/create-people/create-people.component';

export const routes: Routes = [
    { path: '', redirectTo: '/list-people', pathMatch: 'full' },
    { path: 'list-people', component: ListPeopleComponent },
    { path: 'create-people', component: CreatePeopleComponent },
    { path: 'update-people/:id', component: CreatePeopleComponent },
    { path: '**', redirectTo: '' }
  ];
