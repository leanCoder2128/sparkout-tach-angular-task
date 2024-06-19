import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MyCartService } from '../../../service/myCart.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: 'cart.dialog.component.html',
  styleUrl: 'cart.dialog.component.scss',
})
export class CartDialogComponent implements OnInit {
  myCartList: any[];
  total: number = 0;
  constructor(private myCartSvc: MyCartService , private dialogRef : MatDialogRef<CartDialogComponent>) {}

  ngOnInit(): void {
    this.getMyCartDetails();
  }

  getMyCartDetails() {
    this.myCartSvc.getMyCartDetail().subscribe((res) => {
      this.myCartList = res;
      this.calculateTotal();
    });
  }

  increaseAndUpdateQty(myCartItemId: string) {
    this.myCartList.forEach((myItem) => {
        if(myItem.id == myCartItemId){
            myItem.qty = myItem.qty + 1
        }
    });

   

    this.myCartSvc.updateItemsInCart(this.myCartList ).subscribe((res) => {
        this.getMyCartDetails();
    });
  }

  reduceAndupdateQty(myCartItemId: string) {
    this.myCartList.forEach((myItem) => {
        if(myItem.id == myCartItemId && myItem.qty > 1){
            myItem.qty = myItem.qty - 1
        }
    });

   

    this.myCartSvc.updateItemsInCart(this.myCartList ).subscribe((res) => {
        this.getMyCartDetails();
    });
  }

  removeItemFromMyCart(myCartItemId : string){
    this.myCartSvc.deleteItemFromCart(myCartItemId).subscribe((res) => {
      this.getMyCartDetails();
    })
  }

  calculateTotal(): void {
    this.total = this.myCartList.reduce((acc, item) => {
      return acc + (this.getDiscountedPrice(item) * item.qty);
    }, 0);
  }

  getDiscountedPrice(item: any): number {
    const price = parseFloat(item.price.replace(/,/g, ''));
    return price - (price * item.discount / 100);
  }

  close(){
    this.dialogRef.close();
  }
}
