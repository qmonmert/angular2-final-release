import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ContactService } from './../../contact-services/contact.service';
import { Contact } from './../../contact'

@Component({
  selector: 'contact-detail-view',
  templateUrl: './contact-detail-view.component.html'
})
export class ContactDetailViewComponent implements OnInit {

  contact: Observable<Contact>;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.contactService.getContact(this.route.snapshot.params['id'])
                        .subscribe(contact => this.contact = contact);
  }

}
