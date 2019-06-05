import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Awesome} from './awesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  private readonly API_URL = 'http://localhost:3000/awesomes';
  constructor(private http: HttpClient) { }
  getAwesomes(): Observable<Awesome[]> {
    return this.http.get<Awesome[]>(this.API_URL);
  }
  getAwesomeById(id: number): Observable<Awesome> {
    return this.http.get<Awesome>(`${this.API_URL}/${id}`);
  }
  update(awe: Awesome): Observable<Awesome> {
    return this.http.put<Awesome>(`${this.API_URL}/${awe.id}`, awe);
  }
}
