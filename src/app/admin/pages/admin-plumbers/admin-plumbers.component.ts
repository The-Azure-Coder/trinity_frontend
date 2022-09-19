import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Plumbers } from 'src/app/models/plumber';
import { PlumberService } from 'src/app/services/plumber.service';
import { AdminCreatePlumberModalComponent } from '../../components/modals/admin-create-plumber-modal/admin-create-plumber-modal.component';
import { AdminDeletePlumberModalComponent } from '../../components/modals/admin-delete-plumber-modal/admin-delete-plumber-modal.component';
import { AdminEditPlumberModalComponent } from '../../components/modals/admin-edit-plumber-modal/admin-edit-plumber-modal.component';

@Component({
  selector: 'app-admin-plumbers',
  templateUrl: './admin-plumbers.component.html',
  styleUrls: ['./admin-plumbers.component.scss'],
})
export class AdminPlumbersComponent implements OnInit {
  plumbers$!: Observable<Plumbers[]>;

  constructor(
    private plumberService: PlumberService,
    private dialog: MatDialog
  ) {
    this.plumbers$ = this.plumberService
      .getAllPlumbers()
      .pipe(map((res: ApiResponse<Plumbers[]>) => res.data));
  }

  /**
   * Opens the modal to create a new service
   */
  openCreateModal() {
    this.dialog.open(AdminCreatePlumberModalComponent);
  }

  /**
   * Opens the modal to edit an exisiting service
   */
  openEditModal(plumber: Plumbers) {
    this.dialog.open(AdminEditPlumberModalComponent, {
      data: plumber,
    });
  }

  /**
   * Opens the modal to delete an exisiting service
   */
  openDeleteModal(serviceObjectId: string) {
    this.dialog.open(AdminDeletePlumberModalComponent, {
      data: serviceObjectId,
    });
  }

  ngOnInit(): void {}
}
