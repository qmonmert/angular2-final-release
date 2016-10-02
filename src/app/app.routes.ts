import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: 'trainings', redirectTo: 'trainings', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent}
];
