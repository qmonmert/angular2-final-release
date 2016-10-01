import { Component, OnInit } from '@angular/core';
import { ContactService } from './../contact-services/contact.service';
import { Contact } from './../contact';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'contacts-dashboard',
  templateUrl: './contacts-dashboard.component.html'
})
export class ContactsDashboardComponent implements OnInit {

  contacts: Observable<Contact>;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getHttpContacts().subscribe(data => this.contacts = data);
  }

}
