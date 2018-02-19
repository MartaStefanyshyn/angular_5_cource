import { Component, OnInit, Input } from '@angular/core';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent extends UsersComponent {

}
