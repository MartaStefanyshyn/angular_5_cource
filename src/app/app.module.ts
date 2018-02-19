import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ModalModule } from "ngx-modal";

import { UsersService } from './users/users.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { TableComponent } from './users/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
