import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ContactModule, 
    RouterModule.forRoot(AppRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
