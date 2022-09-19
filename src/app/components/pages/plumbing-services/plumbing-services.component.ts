import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Services } from 'src/app/models/service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';

@Component({
  selector: 'app-plumbing-services',
  templateUrl: './plumbing-services.component.html',
  styleUrls: ['./plumbing-services.component.scss']
})
export class PlumbingServicesComponent implements OnInit {
  services: Services[] = []
  pageEvent!: PageEvent;
  pageSizeOptions = [4, 16, 32, 100];
  pageSize = 4;
  length = 100;


  constructor(private plumServices: PlumbingServicesService) { }
  getPlumbingServices() {
    this.plumServices.getServices().subscribe(plumbingService => {
      this.services = plumbingService.data
      this.services = plumbingService.data.slice(0, 4);
      console.log(this.services);

    })
  }

  getPageWithIndex(event: PageEvent) {
    let pageEvent = event;
    this.plumServices
      .getLimitedServices(++pageEvent.pageIndex, pageEvent.pageSize)
      .subscribe((results) => {
        let start = 0;
        let end = pageEvent.pageSize;
        this.services = results.data.slice(start, end);
      });
  }

  ngOnInit(): void {
    this.getPlumbingServices()
  }

}
