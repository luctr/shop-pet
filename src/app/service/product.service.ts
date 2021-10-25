import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API = `${environment.API}`

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API + `/products`)
  }

  createPet(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API + `/products`, product)
  }

  deletePet(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API + `/products/` + id)
  }

  updatePet(product :Product):Observable<Product>{
    return this.http.put<Product>(this.API + `/products/edit`,product)
  }

  getByIdPet(id:number):Observable<Product>{
    return this.http.get<Product>(this.API +`/products/`+id)
  }
  getByNamePet(name:string):Observable<Product>{
    return this.http.get<Product>(this.API +`/products/search/`+name)
  }
}
