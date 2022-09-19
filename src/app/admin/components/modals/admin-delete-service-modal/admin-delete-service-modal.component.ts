import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Services } from 'src/app/models/service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';

@Component({
  selector: 'app-admin-delete-service-modal',
  templateUrl: './admin-delete-service-modal.component.html',
  styles: [],
})
export class AdminDeleteServiceModalComponent implements OnInit {
  plumbingServiceSubscription!: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public serviceObjectId: string,
    private plumbingService: PlumbingServicesService
  ) {}

  deleteService(): void {
    this.plumbingServiceSubscription = this.plumbingService
      .deletedService(this.serviceObjectId)
      .subscribe({
        next: (res: ApiResponse<Services>) => {
          // onError
          if (res.success == false)
            return alert(
              'Error Deleting Service!\n' + this.jsonFormat(res.data)
            );

          // onSuccess
          alert('Service Deleted!');
          location.reload();
        },
        error: (err) => {
          // onError
          alert('Error Deleting Service!\n' + this.jsonFormat(err));
        },
      });
  }

  jsonFormat(content: any): string {
    return JSON.stringify(content, undefined, 3);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
