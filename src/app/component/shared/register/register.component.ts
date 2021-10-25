import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  USER: string = "USER";

  loginForm: FormGroup = new FormGroup({});

  signUpForm: FormGroup = new FormGroup({});

  // @ts-ignore
  signInForm: SignInForm = {}

  // @ts-ignore
  sign: SignUpForm = {}

  message = 'Valid';

  constructor(public authService: AuthService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phoneNumber: new FormControl('',[Validators.required, Validators.pattern(/^\+84\d{9}$/)]),
    })
  }

  signUp() {
    console.log(this.signUpForm)
    if (this.signUpForm != null) {
      this.sign = {
        username: this.signUpForm.value.username,
        password: this.signUpForm.value.password,
        phoneNumber: this.signUpForm.value.phoneNumber,
      }
      this.authService.signUp(this.sign).subscribe(result => {
        alert("Sign Up Success !!")
        this.router.navigateByUrl("/login")
        // window.location.reload()
      }, error1 => alert("lỗi"))
    }

  }
}
