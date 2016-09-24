import { Component, OnInit } from '@angular/core';

import { ContactService } from './services/contact.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  contacts: Observable<any>;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getHttpContacts().subscribe(data => this.contacts = data);
  }

}
