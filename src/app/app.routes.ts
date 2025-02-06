import { Routes } from '@angular/router';
import { DogsListComponent } from './components/dog-list/dog-list.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogsListComponent },
];
