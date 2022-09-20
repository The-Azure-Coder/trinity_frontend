import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Services } from 'src/app/models/service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-admin-edit-service-modal',
  templateUrl: './admin-edit-service-modal.component.html',
  styles: [
    `
      h2 {
        text-align: center;
      }

      form {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
      }

      .col-span-2 {
        grid-column: span 2;
      }

      .w-full {
        width: 100%;
      }

      .image-upload {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class AdminEditServiceModalComponent implements OnInit {
  formData: Services = {
    _id: '',
    title: '',
    price: '',
    description: '',
    image: '',
  };

  plumbingServiceSubscription!: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public service: Services,
    private plumbingService: PlumbingServicesService
  ) {
    this.formData = service;
  }

  onSubmit(): void {
    this.plumbingServiceSubscription = this.plumbingService
      .updateService(this.service._id, this.service)
      .subscribe({
        next: (res: ApiResponse<Services>) => {
          // onError
          if (res.success == false)
            return alert(
              'Error Updating Service!\n' + this.jsonFormat(res.data)
            );

          // onSuccess
          alert('Service Updated!');
          location.reload();
        },
        error: (err) => {
          // onError
          alert('Error Updating Service!\n' + this.jsonFormat(err));
        },
      });
  }

  jsonFormat(content: any): string {
    return JSON.stringify(content, undefined, 3);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
