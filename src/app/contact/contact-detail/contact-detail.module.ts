import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactDetailRoutes } from './contact-detail.routes';
import { ContactDetailViewComponent } from './contact-detail-view/contact-detail-view.component';

@NgModule({
  declarations: [
    ContactDetailViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ContactDetailRoutes)
  ]
})
export class ContactDetailModule { }
