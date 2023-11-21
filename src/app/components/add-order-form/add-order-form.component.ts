import { Component, EventEmitter, Output } from '@angular/core';
import { Order } from 'src/app/models/order';
//import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css'],
})
export class AddOrderFormComponent {
  @Output() orderSave: EventEmitter<Order> = new EventEmitter<Order>();

  newOrder: Order = {
    description: '',
    restaurant: '',
    rating: 1,
    orderAgain: false,
    id: 0,
  };

  //constructor(private orderService: OrderService) {}

  submitOrder() {
    // this.orderService.addOrder(this.newOrder).subscribe((addedOrder: Order | undefined) => {
    //   this.orderSave.emit(addedOrder);

    //   this.newOrder = {
    //     description: '',
    //     restaurant: '',
    //     rating: 1,
    //     orderAgain: false,
    //     id: 0,
    //   };
    // });
  }
}