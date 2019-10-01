import { Component, OnInit } from '@angular/core';
import { UsersService } from "../shared/services/users/users.service";
import { Router } from "@angular/router";
import { TokenService } from "../shared/services/token/token.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  page: number = 1
  users: Array<any> = []
  pages: number 
  totalItems: number = 10

  constructor(
    private _userService: UsersService,
    private _router: Router,
    private _tokenService: TokenService) { }

  ngOnInit() {
    this.getUsers()
  }

  goToUser(event: any){
    console.log(event)
  }

  getUsers(){
    this._userService.getUsers().subscribe(response => {
      this.users = response.data;
      this.page = 1;
      this.totalItems = response.total;
      this.pages = response.total_pages;
      console.log(this.pages)
      console.log(this.users)
    });
  }
  
  getPagedUsers(page){
    this._userService.getPagedUsers(page).subscribe(response => {
      this.users = response.data;
      console.log(this.users)
    });
  }

  refreshList(event: any): void {
    this.getPagedUsers(event.page);
  }

  

}
