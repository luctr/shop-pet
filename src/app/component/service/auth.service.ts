import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../shoppet/src/environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {UserToken} from "../../../../../../shoppet/src/app/model/user-token";
import {map} from "rxjs/operators";
import {Pet} from "../model/pet";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject:BehaviorSubject<UserToken>;
  public currentUser:Observable<UserToken>;


  //API
  private API = environment.API


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(<string>localStorage.getItem('user')));
    this.currentUser  = this.currentUserSubject.asObservable();
  }

  login(username:string, password:string){
    return this.http.post<any>(this.API+ 'signin',{username,password}).pipe(map(user=>{
      localStorage.setItem('user',JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }))
  }

  logout(){
    localStorage.removeItem('user');
    // this.currentUserSubject.next();
  }
}
