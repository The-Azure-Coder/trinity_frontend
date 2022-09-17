import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PlumberDetailComponent } from './components/pages/plumber-detail/plumber-detail.component';
import { PlumbingRepairsComponent } from './components/pages/plumbing-repairs/plumbing-repairs.component';
import { PlumbingServicesComponent } from './components/pages/plumbing-services/plumbing-services.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plumbers-details/:id', component: PlumberDetailComponent },
  { path: 'services', component: PlumbingServicesComponent },
  { path: 'plumbing-repairs', component: PlumbingRepairsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
