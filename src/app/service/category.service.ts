import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API = `${environment.API}`

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API + `/categories`)
  }
  createSpecies(category: Category): Observable<Category>{
    return this.http.post<Category>(this.API + `/categories`,category)
  }
  updateSpecies(id: number,species : Category): Observable<Category>{
    return this.http.put<Category>(this.API + `/categories` + id,species)
  }
  deleteCategories(id: number): Observable<Category>{
    return this.http.delete<Category>(this.API + `/categories` + id)
  }
  getByIdCategories(id: number): Observable<Category>{
    return this.http.get<Category>(this.API + `/categories` + id)
  }
}
