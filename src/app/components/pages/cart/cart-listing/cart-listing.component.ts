import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.component.html',
  styleUrls: ['./cart-listing.component.scss'],
})
export class CartListingComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cart!: any[];
  grandTotal: number = 0;

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  ngAfterViewInit(): void {
    setTimeout(
      () => (this.grandTotal = this.cartService.getCartTotal(this.cart)),
      0
    );
  }

  amountChanged(event: any, cItemID: number): void {
    this.cart.find((item) => item.id == cItemID).amount = parseInt(
      event.target.value
    );

    this.cartService.updateCart(this.cart);
    this.grandTotal = this.cartService.getCartTotal(this.cart);
  }

  deleteProduct(product_id: number) {
    this.cartService.updateCart(this.cartService.removeCartItem(product_id));

    this.cart = this.cartService.getCart() ?? [];
    this.grandTotal = this.cartService.getCartTotal(this.cart);
  }
}
