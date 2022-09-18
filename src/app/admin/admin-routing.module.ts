import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminInventoryComponent } from './pages/admin-inventory/admin-inventory.component';
import { AdminJobsComponent } from './pages/admin-jobs/admin-jobs.component';
import { AdminNotFoundComponent } from './pages/admin-not-found/admin-not-found.component';
import { AdminPlumbersComponent } from './pages/admin-plumbers/admin-plumbers.component';
import { AdminServicesComponent } from './pages/admin-services/admin-services.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'services', component: AdminServicesComponent },
      { path: 'plumbers', component: AdminPlumbersComponent },
      { path: 'inventory', component: AdminInventoryComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'jobs', component: AdminJobsComponent },
      { path: 'not-found', component: AdminNotFoundComponent },
      { path: '**', redirectTo: '/admin/not-found', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
