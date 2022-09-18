import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './components/pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/partials/footer/footer.component';
import { PlumbingRepairsComponent } from './components/pages/plumbing-repairs/plumbing-repairs.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PlumberDetailComponent } from './components/pages/plumber-detail/plumber-detail.component';
import { MatSelectModule } from '@angular/material/select';
import { PlumbingServicesComponent } from './components/pages/plumbing-services/plumbing-services.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PlumbingRepairsComponent,
    PlumberDetailComponent,
    PlumbingServicesComponent,
    ServiceDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
