import { Component, EventEmitter, Output } from '@angular/core';
import { Order } from 'src/app/models/order';
import { RestaurantFavesService } from 'src/app/services/restaurant-faves.service';

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

  constructor(private restaurantFavesService: RestaurantFavesService) {}

  submitOrder() {
    this.restaurantFavesService
      .addOrder(this.newOrder)
      .subscribe((addedOrder: Order | undefined) => {
        this.orderSave.emit(addedOrder);

        this.newOrder = {
          description: '',
          restaurant: '',
          rating: 1,
          orderAgain: false,
          id: 0,
        };
      });
  }
}