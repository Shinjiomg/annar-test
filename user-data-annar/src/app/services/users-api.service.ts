import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersAPIService {
  private baseAPI = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.baseAPI);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseAPI}/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.baseAPI, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.baseAPI}/${user.id}`, user);
  }
}
