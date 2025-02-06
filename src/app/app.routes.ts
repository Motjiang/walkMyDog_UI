import { Routes } from '@angular/router';
import { DogsListComponent } from './components/dog-list/dog-list.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogsListComponent },
  { path: 'details/:index', loadComponent: () => import('./components/dog-view/dog-view.component').then(m => m.DogViewComponent) }
];
