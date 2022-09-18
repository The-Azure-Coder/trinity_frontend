import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from 'src/app/models/api-response';
import { Contact } from 'src/app/models/contact-us';
import { ContactService } from 'src/app/services/contact.service';
import { PlumbingServicesService } from 'src/app/services/plumbing-services.service';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/models/product';
import { Services } from 'src/app/models/service';
import { Plumbers } from 'src/app/models/plumber';
import { PlumberService } from 'src/app/services/plumber.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  services: Services[] = []
  products: Products[] = []
  plumbers: Plumbers[] = []

  pageEvent!: PageEvent;
  pageSizeOptions = [4, 16, 32, 100];
  pageSize = 4;
  length = 100;

  pageEvent2!: PageEvent;
  pageSizeOptions2 = [3, 18, 36, 100];
  pageSize2 = 3;
  length2 = 100;
  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', []),
    email: new FormControl('', [
      Validators.email,
      Validators.minLength(8),
      Validators.required,
    ]),
    phoneNumber: new FormControl(1876_000_0000, [Validators.minLength(7)]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private plumServices: PlumbingServicesService, private productService: ProductService, private contactService: ContactService, private plumberService: PlumberService) { }

  getPlumbingServices() {
    this.plumServices.getServices().subscribe(plumbingService => {
      this.services = plumbingService.data
      this.services = plumbingService.data.slice(0, 4);
      console.log(this.services);

    })
  }


  getPlumbingSupplies() {
    this.productService.getProducts().subscribe(supplies => {
      this.products = supplies.data.slice(0, 3);
    })
  }

  getAllPlumbers() {
    this.plumberService.getAllPlumbers().subscribe(staff => {
      this.plumbers = staff.data.slice(0, 3);
    })
  }

  getPageWithIndex(event: PageEvent) {
    let pageEvent = event;
    this.plumServices
      .getLimitedServices(++pageEvent.pageIndex, pageEvent.pageSize)
      .subscribe((results) => {
        let start = 0;
        let end = pageEvent.pageSize;

        if (pageEvent.pageIndex > 0) {
          start = this.pageSize * --pageEvent.pageIndex;
          end = this.pageSize * ++pageEvent.pageIndex;
          console.log(start);
          console.log(end);
        }
        this.services = results.data.slice(start, end);
      });
  }

  getPageWithIndex2(event: PageEvent) {
    let pageEvent2 = event;
    this.plumberService.getLimitedPlumbers(++pageEvent2.pageIndex, pageEvent2.pageSize)
      .subscribe((results) => {
        let start = 0;
        let end = pageEvent2.pageSize;
        if (pageEvent2.pageIndex > 0) {
          start = this.pageSize * --pageEvent2.pageIndex;
          end = this.pageSize * ++pageEvent2.pageIndex;
          console.log(start);
          console.log(end);
        }
        this.plumbers = results.data.slice(start, end);
      });
  }





  /**
   * Handles the submission of the contact us form
   * @param formData The information captured in the form.
   */
  onContactFormSubmit<T extends Contact>(formData: T): void {
    let _formData = formData;
    _formData.phoneNumber = parseInt(
      _formData.phoneNumber.toString().replace(/[^0-9_?]+/g, '')
    );





    this.contactService.createMessage(_formData).subscribe({
      next: (resp: ApiResponse<Contact>) => {
        if (resp.success == false) {
          // do message not sent error display here
          alert('Error Sending Your Message\n' + JSON.stringify(resp.data));
          return;
        }

        // do message sent successfull stuff here
        alert('Message Sent Successful');
      },
      error: (error: HttpErrorResponse) => {
        // do message not sent error display here
        alert('Error Sending Your Message\n' + JSON.stringify(error.error));
        console.error(error);
      },
    });
  }
  ngOnInit(): void {
    this.getPlumbingServices()
    this.getPlumbingSupplies()
    this.getAllPlumbers()
  }
}


