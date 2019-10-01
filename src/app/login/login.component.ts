import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Login } from "../shared/models/login";
import { TokenService } from "../shared/services/token/token.service";
import { UsersService } from "../shared/services/users/users.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userValid: boolean = true;
  passwordValid: boolean = true;
  responseError: boolean = false;
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UsersService,
    private _tokenService: TokenService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ["eve.holt@reqres.in", [Validators.required, Validators.minLength(5), Validators.email]],
      password: ["cityslicka", [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userValid = true;
      this.passwordValid = true;
      const loginObject: Login = {
        email: this.loginForm.get("email").value,
        password: this.loginForm.get("password").value
      };
      this._userService.login(loginObject)
        .subscribe(response => {
          this._tokenService.setActiveToken(response.token);
          this._router.navigateByUrl("users");
        },() => {
          this.responseError = true
        }
      );
    } else {
      this.userValid = (this.loginForm.controls.email.status != "VALID")? false : true;
      this.passwordValid = (this.loginForm.controls.password.status != "VALID")? false : true;
    }
  }
}
