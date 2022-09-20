import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Services } from 'src/app/models/service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';
import { AdminCreateServiceModalComponent } from '../../components/modals/admin-create-service-modal/admin-create-service-modal.component';
import { AdminDeleteServiceModalComponent } from '../../components/modals/admin-delete-service-modal/admin-delete-service-modal.component';
import { AdminEditServiceModalComponent } from '../../components/modals/admin-edit-service-modal/admin-edit-service-modal.component';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.scss'],
})
export class AdminServicesComponent implements OnInit {
  services$!: Observable<Services[]>;

  constructor(
    private plumbingServiceService: PlumbingServicesService,
    private dialog: MatDialog
  ) {
    this.services$ = this.plumbingServiceService
      .getServices()
      .pipe(map((res: ApiResponse<Services[]>) => res.data));
  }

  /**
   * Opens the modal to create a new service
   */
  openCreateModal() {
    this.dialog.open(AdminCreateServiceModalComponent);
  }

  /**
   * Opens the modal to edit an exisiting service
   */
  openEditModal(service: Services) {
    this.dialog.open(AdminEditServiceModalComponent, {
      data: service,
    });
  }

  /**
   * Opens the modal to delete an exisiting service
   */
  openDeleteModal(serviceObjectId: string) {
    this.dialog.open(AdminDeleteServiceModalComponent, {
      data: serviceObjectId,
    });
  }

  ngOnInit(): void {}
}
