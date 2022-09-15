import { Component, OnInit } from '@angular/core';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';
import { ProductService } from 'src/app/services/product.service';
import { ContactService } from 'src/app/services/contact.service';
import { Products } from 'src/app/models/product';
import { Services } from 'src/app/models/service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services: Services[] = []
  products: Products[] = []

  constructor(private plumServices: PlumbingServicesService, private productService: ProductService, private contactService: ContactService) { }

  getPlumbingServices() {
    this.plumServices.getServices().subscribe(plumbingService => {
      this.services = plumbingService
      console.log(this.services);

    })
  }

  ngOnInit(): void {
    this.getPlumbingServices()
  }

}
