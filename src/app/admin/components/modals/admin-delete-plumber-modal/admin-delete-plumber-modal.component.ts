import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Plumbers } from 'src/app/models/plumber';
import { PlumberService } from 'src/app/services/plumber.service';

@Component({
  selector: 'app-admin-delete-plumber-modal',
  templateUrl: './admin-delete-plumber-modal.component.html',
  styles: [],
})
export class AdminDeletePlumberModalComponent implements OnInit {
  plumbersSubscription!: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public serviceObjectId: string,
    private plumberService: PlumberService
  ) {}

  deletePlumber(): void {
    this.plumbersSubscription = this.plumberService
      .deletePlumber(this.serviceObjectId)
      .subscribe({
        next: (res: ApiResponse<Plumbers>) => {
          if (res.success == true) {
            // onSuccess
            alert('Plumber Deleted!');
            location.reload();
          } else {
            // onError
            alert('Error Deleting Plumber!\n' + this.jsonFormat(res.data));
          }
        },
        error: (err) => {
          // onError
          alert(this.jsonFormat(err));
        },
      });
  }

  jsonFormat(content: any): string {
    return JSON.stringify(content, undefined, 3);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.plumbersSubscription.unsubscribe();
  }
}
