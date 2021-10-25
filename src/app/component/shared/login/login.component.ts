import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {SignInForm} from "../../../model/signInForm";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  USER: string = "USER";

  loginForm: FormGroup = new FormGroup({});


  // @ts-ignore
  signInForm: SignInForm = {}

  // @ts-ignore
  sign: SignUpForm = {}

  message = 'Valid';


  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  login() {console.log(this.loginForm)
    if (this.loginForm != null) {
      console.log(this.loginForm)
      this.signInForm = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
      this.authService.signIn(this.signInForm).subscribe(result => {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result));
        this.router.navigateByUrl('/');
      }, error => this.message = 'Wrong username or password!')

    }
  }

}
