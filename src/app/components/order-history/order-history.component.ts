import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { RestaurantFavesService } from 'src/app/services/restaurant-faves.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})

export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];

  constructor(private restaurantFavesService: RestaurantFavesService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.restaurantFavesService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  deleteOrder(orderId: number): void {
    this.restaurantFavesService.deleteOrder(orderId).subscribe(() => {
      
      this.loadOrders();
    });
  }

  addOrder(order: Order): void {
    this.restaurantFavesService.addOrder(order).subscribe(() => {
      
      this.loadOrders();
    });
  }
}
