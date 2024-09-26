import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LogoutComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule, // Include SharedModule for common components and modules
    IonicModule, // Include FormsModule for form validation
    FormsModule // Include IonicModule for Ionic components
  ]
})
export class PagesModule { }
