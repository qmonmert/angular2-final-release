import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { ContactService } from './contact-services/contact.service';
import { ContactRoutes } from './contact.routes';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactsDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forChild(ContactRoutes)
  ],
  exports: [
    ContactsListComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
