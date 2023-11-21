import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {
  apiUrl = 'http://localhost:8080/orders';

  constructor(private client: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.client.get<Order[]>(this.apiUrl);
  }

  addOrder(order: Order): Observable<Order> {
    return this.client.post<Order>(this.apiUrl, order);
  }

  deleteOrder(orderId: number) {
    return this.client.delete(`${this.apiUrl}/${orderId}`)
  }
}
