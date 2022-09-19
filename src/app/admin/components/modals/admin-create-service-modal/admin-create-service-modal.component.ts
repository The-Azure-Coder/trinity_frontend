import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Services } from 'src/app/models/service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin-create-service-modal',
  templateUrl: './admin-create-service-modal.component.html',
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
export class AdminCreateServiceModalComponent implements OnInit, OnDestroy {
  formData = {
    title: null,
    price: null,
    description: null,
    image: '/assets/images/plumber-svg.jpg',
  };

  plumbingServiceSubscription!: Subscription;

  constructor(private plumbingServicesService: PlumbingServicesService) {}

  onSubmit(formData: Exclude<Services, '_id'>): void {
    this.plumbingServiceSubscription = this.plumbingServicesService
      .createService(formData)
      .subscribe({
        next: (res: ApiResponse<Services>) => {
          // onError
          if (res.success == false)
            return alert(
              'Error Creating Service!\n' + this.jsonFormat(res.data)
            );

          // onSuccess
          alert('Service Created!');
          location.reload();
        },
        error: (err) => {
          // onError
          alert('Error Creating Service!\n' + this.jsonFormat(err));
        },
      });
  }

  jsonFormat(content: any): string {
    return JSON.stringify(content, undefined, 3);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.plumbingServiceSubscription?.unsubscribe();
  }
}
