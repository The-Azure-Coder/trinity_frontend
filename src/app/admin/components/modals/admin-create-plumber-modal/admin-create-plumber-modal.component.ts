import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Plumbers } from 'src/app/models/plumber';
import { PlumberService } from 'src/app/services/plumber.service';

@Component({
  selector: 'app-admin-create-plumber-modal',
  templateUrl: './admin-create-plumber-modal.component.html',
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
export class AdminCreatePlumberModalComponent implements OnInit {
  formData = {
    name: null,
    email: null,
    telephone: null,
    rating: null,
    description: null,
    image: null,
  };

  plumbingServiceSubscription!: Subscription;

  constructor(private plumberService: PlumberService) {}

  onSubmit(formData: Exclude<Plumbers, '_id'>): void {
    this.plumbingServiceSubscription = this.plumberService
      .addPlumber(formData)
      .subscribe({
        next: (res: ApiResponse<Plumbers>) => {
          if (res.success == true) {
            // onSuccess
            alert('Plumber Created!');
            location.reload();
          } else {
            // onError
            alert(this.jsonFormat(res.data));
          }
        },
        error: (err) => {
          // onError
          alert('Error Creating Plumber!\n' + this.jsonFormat(err));
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
