import { Routes } from '@angular/router';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';

export const ContactRoutes: Routes = [
    { path: 'contacts', component: ContactsDashboardComponent },
    { path: 'contact/:id', loadChildren: 'app/contact/contact-detail/contact-detail.module#ContactDetailModule'}
];
