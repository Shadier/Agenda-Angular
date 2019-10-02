import { Component, OnInit, TemplateRef } from "@angular/core";
import { UsersService } from "../../shared/services/users/users.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  nameValid: boolean = true;
  lastnameValid: boolean = true;
  emailValid: boolean = true;
  passValid: boolean = true;
  users = []

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UsersService,
    private _router: Router,) {}

  ngOnInit() {
    this.addUserForm = this._formBuilder.group({
      last_name: ["", [Validators.required, Validators.minLength(3)]],
      first_name: ["", [Validators.required, Validators.minLength(3)]],
      pass: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.minLength(10),Validators.email]]
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      this.nameValid = true;
      this.lastnameValid = true;
      this.emailValid = true;
      this.passValid = true;
      //Store data in local storage, if we need it in a future we'll have it
      if(localStorage.getItem('users')){
        this.users = JSON.parse(localStorage.getItem('users'))
      }
      let user  = {
        name: this.addUserForm.controls.first_name.value,
        lastname: this.addUserForm.controls.last_name.value,
        email: this.addUserForm.controls.email.value,
        password: this.addUserForm.controls.pass.value
      }
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users) )
      //end local storage 
      this._userService.addUser(user).subscribe(response => {
        this.openModal()
        this._router.navigateByUrl("/users");
      });
    }else{
      this.nameValid = (this.addUserForm.controls.first_name.status != "VALID")? false : true;
      this.lastnameValid = (this.addUserForm.controls.last_name.status != "VALID")? false : true;
      this.emailValid = (this.addUserForm.controls.email.status != "VALID")? false : true;
      this.passValid = (this.addUserForm.controls.pass.status != "VALID")? false : true;
    }
  }
  openModal() {
    alert("user added successfully!")
  }
}
