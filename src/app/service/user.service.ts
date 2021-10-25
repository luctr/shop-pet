import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
const API_URL = 'http://localhost:8080/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  findById(id: string): Observable<User> {
    return this.http.get<User>(API_URL + `/${id}`);
  }

  findByName(name: string): Observable<User> {
    return this.http.get<User>(API_URL +"/search/"+ name);
  }
  update(id: string, user: User): Observable<User> {
    return this.http.put<User>(API_URL + `/${id}`, user);
  }
}
