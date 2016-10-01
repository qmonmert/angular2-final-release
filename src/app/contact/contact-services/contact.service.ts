import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CONTACTS } from './contacts';

@Injectable()
export class ContactService {

  constructor(private http: Http) {}

  getHttpContacts() {
    return this.http.get('./app/contact/contact-services/contacts.json')
                    .map(res => res.json());
  }

  getContacts() {
    return CONTACTS;
  }

  getContact(id) {
    return this.http.get('./app/contact/contact-services/contacts.json')
                    .map(res => res.json())
                    .map(contacts => contacts.filter(contact => contact.id == id)[0]);
  }

}
