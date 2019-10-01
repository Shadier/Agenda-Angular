import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Constant } from "../../classes/Constant";
import { Login } from "../../models/login";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  public login(body: Login): Observable<any> {
    return this._http.post(Constant.API + "/login", body, Constant.headers);
  }

  public getPagedUsers(page: number): Observable<any> {
    return this._http.get(Constant.API + "/users?page=" + page, Constant.headers);
  }
  public getUsers(): Observable<any> {
    return this._http.get(Constant.API + "/users/", Constant.headers);
  }

  public getUser(id): Observable<any> {
    return this._http.get(Constant.API + "/users/" + id, Constant.headers);
  }

  public addUser(user): Observable<any> {
    return this._http.post(Constant.API + "/users/", user, Constant.headers);
  }

}