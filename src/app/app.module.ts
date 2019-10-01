import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AddUserComponent } from "./users/add-user/add-user.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";
import { UsersComponent } from "./users/users.component";

import { TokenService } from './shared/services/token/token.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { UsersService } from './shared/services/users/users.service';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    AddUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
