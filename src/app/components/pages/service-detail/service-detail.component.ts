import { Component, Input, OnInit } from '@angular/core';
import { Plumbers } from 'src/app/models/plumber';
import { PlumberService } from 'src/app/services/plumber.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Services } from 'src/app/models/service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  constructor(private plumService: PlumbingServicesService, private plumberService: PlumberService, private router: Router, private route: ActivatedRoute) { }
  plumbers: Plumbers[] = []
  @Input() service!: Services
  serviceSub!: Subscription;
  serviceId!: string;
  routeSub!: Subscription;

  serviceForm = new FormGroup({
    'first_nm': new FormControl('', [Validators.required]),
    'last_nm': new FormControl('', [Validators.required]),
    'telephone_num': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'serviceID': new FormControl('', [Validators.required, Validators.email]),
    'issues': new FormControl('',),
    'plumberID': new FormControl('', [Validators.required]),

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

  ngOnInit(): void {
    this.geAllPlumbers()

    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.serviceId = params['id']
      this.getServiceById(this.serviceId)
    })

  }

}
