import { Component, Input, OnInit } from '@angular/core';
import { Plumbers } from 'src/app/models/plumber';
import { PlumberService } from 'src/app/services/plumber.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Services } from 'src/app/models/service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';
import { Subscription } from 'rxjs';
import { RepairService } from 'src/app/services/repair.service';


@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  constructor(private plumService: PlumbingServicesService, private plumberService: PlumberService, private repairService: RepairService, private router: Router, private route: ActivatedRoute) { }
  plumbers: Plumbers[] = []
  @Input() service!: Services
  serviceSub!: Subscription;
  serviceId!: string;
  routeSub!: Subscription;

  serviceForm = new FormGroup({
    'firstName': new FormControl('', [Validators.required]),
    'lastName': new FormControl('', [Validators.required]),
    'telephone': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'service': new FormControl('', [Validators.required]),
    'issue': new FormControl('', [Validators.required]),
    'plumber': new FormControl('', [Validators.required]),

  })

  getServiceById(id: string): void {
    this.plumService.getServicesById(id).subscribe(thisService => {
      this.service = thisService.data

    })
  }

  geAllPlumbers() {
    this.plumberService.getAllPlumbers().subscribe(plumberlist => {
      this.plumbers = plumberlist.data
    })
  }

  bookService() {
    if (this.serviceForm.valid) {
      console.log(this.serviceForm.value)
      this.repairService.createRepair(this.serviceForm.value).subscribe({
        next: (res) => {
          alert('service Booked')
          this.router.navigate(['/']);
        },
        error() {
          alert('problem booking service')

        },
      })
    } else {
      alert('invalid form submition')
    }

  }
  ngOnInit(): void {
    this.geAllPlumbers()

    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.serviceId = params['id']
      this.getServiceById(this.serviceId)
    })

  }

}
