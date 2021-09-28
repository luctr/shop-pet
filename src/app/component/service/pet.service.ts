import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Pet} from "../model/pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private API = `${environment.API}`

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.API + `/pets`)
  }

  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.API + `/pets`, pet)
  }

  deletePet(id: number): Observable<Pet> {
    return this.http.delete<Pet>(this.API + `/pets/` + id)
  }

  updatePet(pet :Pet):Observable<Pet>{
    return this.http.put<Pet>(this.API + `/pets/edit`,pet)
  }

  getByIdPet(id:number):Observable<Pet>{
    return this.http.get<Pet>(this.API +`/pets/`+id)
  }
}
