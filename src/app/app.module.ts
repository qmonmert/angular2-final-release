import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { TrainingModule } from './training/training.module';
import { AppRoutes } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent, 
    NotFoundComponent
  ],
  imports: [
    ContactModule, 
    TrainingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
