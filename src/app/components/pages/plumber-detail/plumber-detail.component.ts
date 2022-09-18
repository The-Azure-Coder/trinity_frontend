import { Component, Input, OnInit } from '@angular/core';
import { Plumbers } from 'src/app/models/plumber';
import { PlumberService } from 'src/app/services/plumber.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Services } from 'src/app/models/service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';
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
    'first_nm': new FormControl('', [Validators.required]),
    'last_nm': new FormControl('', [Validators.required]),
    'telephone_num': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'serviceID': new FormControl('', [Validators.required, Validators.email]),
    'issues': new FormControl('',),
    'plumberID': new FormControl('', [Validators.required]),

  })

  constructor(private plumService: PlumbingServicesService, private plumberService: PlumberService, private router: Router, private route: ActivatedRoute) { }


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

  ngOnInit(): void {
    this.getAllPlumbingService()
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.plumberId = params['id']
      this.getPlumberById(this.plumberId)
    })
  }

}
