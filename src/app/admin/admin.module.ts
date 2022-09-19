import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminServicesComponent } from './pages/admin-services/admin-services.component';
import { AdminPlumbersComponent } from './pages/admin-plumbers/admin-plumbers.component';
import { AdminInventoryComponent } from './pages/admin-inventory/admin-inventory.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminJobsComponent } from './pages/admin-jobs/admin-jobs.component';
import { AdminNotFoundComponent } from './pages/admin-not-found/admin-not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminCreateServiceModalComponent } from './components/modals/admin-create-service-modal/admin-create-service-modal.component';
import { AdminDeleteServiceModalComponent } from './components/modals/admin-delete-service-modal/admin-delete-service-modal.component';
import { AdminEditServiceModalComponent } from './components/modals/admin-edit-service-modal/admin-edit-service-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminServicesComponent,
    AdminPlumbersComponent,
    AdminInventoryComponent,
    AdminUsersComponent,
    AdminJobsComponent,
    AdminNotFoundComponent,
    AdminTableComponent,
    AdminCreateServiceModalComponent,
    AdminDeleteServiceModalComponent,
    AdminEditServiceModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
  ],
})
export class AdminModule {}
