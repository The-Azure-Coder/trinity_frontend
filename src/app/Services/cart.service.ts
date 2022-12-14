import { Injectable } from '@angular/core'
import { Products } from '../models/product'
import { ProductService } from './product.service'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private iService: ProductService) { }

    public SALES_TAX = 1.5

    /**
     * Converts the cart in `localStorage` to an array
     * @returns The `cart` item from local storage as an array
     */
    getCart(): Products[] {
        return JSON.parse(localStorage.getItem('cart') as string)
    }

    /**
     * Removes all items from the cart
     */
    clearCart(): void {
        localStorage.setItem('cart', JSON.stringify([]))
    }

    /**
     * Calculates the amount of items in the cart
     * @returns The amount of products in the cart
     */
    getCartCount(): number {
        return this.getCart().length ?? 0
    }

    /**
     * Calculates the grand total of all items in the cart
     * @returns The sum of all products subtotal in the cart
     */
    getCartTotal(): number {
        let subTotals = 0
        const cart = this.getCart()

        // Calculates subtotal for each item in cart
        cart.forEach((product: Products) => {
            subTotals += product.price * (product.quantity as number)
        })

        // Sets the cart total to the calculated value
        return subTotals
    }

    /**
     * Inserts and item to the cart array
     * @param itemId An object that represents a product/cart item
     */

    addCartItem(itemId: string): void {
        this.iService.getProductById(itemId).subscribe((resp) => {
            let currentCart: any[] = []

            // If `cart` is found in localStorage we store it in `currentCart`
            if (!!localStorage.getItem('cart')) {
                currentCart = this.getCart()
            }

            // Search for duplicate cart item
            let duplicateCartItem: any = currentCart.find(
                (cartItem: any) => cartItem.id == itemId
            )

            // If duplicate cart item is found we increment the amount instead of inserting a new product to the cart
            if (duplicateCartItem) {
                let amt = parseInt(duplicateCartItem.amount)
                duplicateCartItem.amount = amt += 1
            } else {
                // Add the product found to the cart with `amount` set to `1` if duplicate not found
                // This needs to be updated to accomodate the side orders
                currentCart.push({
                    _id: resp.data._id,
                    name: resp.data.name,
                    description: resp.data.description,
                    image: resp.data.image,
                    price: resp.data.price,
                    quanity: 1,
                })
            }

            // Updating the cart in localStorage with the new information
            this.updateCart(currentCart)

            // Cart Notification function goes here
        })
    }

    /**
     * Removes and item from the cart using it's id
     * @param itemId The id of the product/cart item to be removed
     * @returns The modified array of `cart` items with the specified product removed.
     */
    removeCartItem(itemId: number): any[] {
        let cart = this.getCart()
        const productId = cart.findIndex((product: any) => product.id == itemId)

        cart.splice(productId, 1)
        this.updateCart(cart)

        return cart
    }

    /**
     * Updates the cart in the `localStorage`
     * @param cart The array of objects you would like to be the new cartin storage
     */
    updateCart(cart: any[]): void {
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}
