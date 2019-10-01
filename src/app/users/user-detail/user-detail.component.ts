import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from "../../shared/services/users/users.service";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId : number = 1
  user : object = []
  loaded: boolean = false
  constructor(
    private activatedRoute: ActivatedRoute,
    private _userService: UsersService,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(extras => {
      console.log(extras);
      this.userId = extras.id;
    });
    
    this.getUser()
  }

  getUser(){
    this._userService.getUser(this.userId).subscribe(response => {
      this.user = response.data;
      this.loaded = true;
    });
  }

}
