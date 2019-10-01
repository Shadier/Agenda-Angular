import { HttpHeaders } from "@angular/common/http";

export class Constant {
  public static API = "https://reqres.in/api";

  public static headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
}
