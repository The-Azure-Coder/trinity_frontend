import { Component, Input, OnInit } from '@angular/core';
import { Plumbers } from 'src/app/models/plumber';
import { PlumberService } from 'src/app/services/plumber.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Services } from 'src/app/models/service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';
import { RepairService } from 'src/app/services/repair.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-plumber-detail',
  templateUrl: './plumber-detail.component.html',
  styleUrls: ['./plumber-detail.component.scss']
})
export class PlumberDetailComponent implements OnInit {
  services: Services[] = []
  @Input() plumber!: Plumbers
  plumberSub!: Subscription;
  plumberId!: string;
  routeSub!: Subscription;

  hireForm = new FormGroup({
    'firstName': new FormControl('', [Validators.required]),
    'lastName': new FormControl('', [Validators.required]),
    'telephone': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'service': new FormControl('', [Validators.required]),
    'issue': new FormControl('', [Validators.required]),
    'plumber': new FormControl('', [Validators.required]),

  })

  constructor(private plumService: PlumbingServicesService, private plumberService: PlumberService, private repairService: RepairService, private router: Router, private route: ActivatedRoute) { }


  getPlumberById(id: string): void {
    this.plumberSub = this.plumberService.getPlumberById(id).subscribe(thePlumber => {
      this.plumber = thePlumber.data
    })
  }

  getAllPlumbingService() {
    this.plumService.getServices().subscribe(plumbingService => {
      this.services = plumbingService.data

    })
  }

  hirePlumber() {
    if (this.hireForm.valid) {
      console.log(this.hireForm.value)
      this.repairService.createRepair(this.hireForm.value).subscribe({
        next: (res) => {
          alert('plumber hired')
          this.router.navigate(['/']);
        },
        error() {
          alert('problem hiring a plumber')

        },
      })
    } else {
      alert('invalid form submition')
    }

  }

  ngOnInit(): void {
    this.getAllPlumbingService()
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.plumberId = params['id']
      this.getPlumberById(this.plumberId)
    })
  }

}
