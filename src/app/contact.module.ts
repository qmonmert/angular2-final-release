import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  exports: [
    ContactsListComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
