import { Component, Input } from '@angular/core';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent {

  @Input() 
  contacts;

}
