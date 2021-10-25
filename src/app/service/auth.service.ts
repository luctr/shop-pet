import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {SignUpForm} from "../model/signUpForm";
import {SignInForm} from "../model/signInForm";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOGIN + '/signup';
  private API_SIGNIN = environment.API_LOGIN + '/signin';



  //API
  private API = environment.API


  constructor(private http: HttpClient) {

  }

  signUp(signUp: SignUpForm):Observable<any>{
    return this.http.post(this.API_SIGNUP,signUp)
  }
  signIn(user: SignInForm): Observable<any>{

    const header = {
      Authorization: localStorage.getItem("token")

    }
    // @ts-ignore
    return this.http.post(this.API_SIGNIN, user, header);
  }
}
