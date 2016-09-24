import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import "rxjs/add/operator/map";

import { CONTACTS } from './contacts';

@Injectable()
export class ContactService {

  constructor(private http: Http) {}

  getHttpContacts() {
    return this.http.get('./app/services/contacts.json').map(res => res.json());
  }

  getContacts() {
    return CONTACTS;
  }

}
