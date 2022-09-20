import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../models/product';
import { PageEvent } from '@angular/material/paginator';
import { FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {

  pageEvent!: PageEvent;
  pageSizeOptions = [6, 36, 72, 100];
  pageSize = 6;
  length = 100;

  searchQuery = new FormControl('');



  products:Products[]=[];
  product!:Products;

  constructor(private productService:ProductService) { }

  getPlumbingSupplies() {
    this.productService.getProducts().subscribe(supplies => {
      this.products = supplies.data;
      this.products = supplies.data.slice(0,6);
    })
  }
  searchbyid(name: string) {
    this.productService.getProductByName(name).subscribe(product => {
      this.product = product.data;
  })
}


  getPageWithIndex(event: PageEvent) {
    let pageEvent = event;
    this.productService
      .getLimitedProducts(++pageEvent.pageIndex, pageEvent.pageSize)
      .subscribe((results) => {
        let start = 0;
        let end = pageEvent.pageSize;

        // if (pageEvent.pageIndex > 0) {
        //   start = this.pageSize * --pageEvent.pageIndex;
        //   end = this.pageSize * ++pageEvent.pageIndex;
        //   console.log(start);
        //   console.log(end);
        // }
        this.products = results.data.slice(start, end);
      });
  }

  getPageWithIndex2(event: PageEvent) {
    let pageEvent2 = event;
    this.productService.getLimitedProducts(++pageEvent2.pageIndex, pageEvent2.pageSize)
      .subscribe((results) => {
        let start = 0;
        let end = pageEvent2.pageSize;
        if (pageEvent2.pageIndex > 0) {
          start = this.pageSize * --pageEvent2.pageIndex;
          end = this.pageSize * ++pageEvent2.pageIndex;
          console.log(start);
          console.log(end);
        }
        this.products = results.data.slice(start, end);
      });
  }

  ngOnInit(): void {
    this.getPlumbingSupplies();
  }

}
