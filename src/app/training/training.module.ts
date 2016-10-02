import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrainingRoutes } from './training.routes';
import { TrainingsDashboardComponent } from './trainings-dashboard/trainings-dashboard.component';

@NgModule({
  declarations: [
    TrainingsDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(TrainingRoutes)
  ],
  exports: [
    
  ],
  providers: [
    
  ]
})
export class TrainingModule { }
