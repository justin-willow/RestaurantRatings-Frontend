import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {
  apiUrl = `${environment.apiUrl}/orders`;

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
