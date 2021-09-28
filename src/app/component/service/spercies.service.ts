import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Species} from "../model/species";
import {Observable} from "rxjs";
import {Pet} from "../model/pet";

@Injectable({
  providedIn: 'root'
})
export class SperciesService {

  API = `${environment.API}`

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Species[]> {
    return this.http.get<Species[]>(this.API + `/species`)
  }
  createSpecies(species: Species): Observable<Species>{
    return this.http.post<Species>(this.API + `/species`,species)
  }
  updateSpecies(id: number,species : Species): Observable<Species>{
    return this.http.put<Species>(this.API + `/species` + id,species)
  }
  deleteSpecies(id: number): Observable<Species>{
    return this.http.delete<Species>(this.API + `/species` + id)
  }
  getByIdSpecies(id: number): Observable<Species>{
    return this.http.get<Species>(this.API + `/species` + id)
  }
}
