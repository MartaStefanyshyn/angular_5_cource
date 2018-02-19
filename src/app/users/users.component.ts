import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user.model'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  users;
  user = new User();
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  saveUser() {
    this.usersService.add(this.user);
    this.user = new User();
  }

  getUsers() {
    this.usersService.get().then(users => this.users = users)
  }

  deleteUser(id) {
    this.usersService.delete(id);
  }
}
