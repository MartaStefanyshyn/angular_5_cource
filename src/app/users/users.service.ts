import { Injectable } from '@angular/core';

let users = [
  {firstName: 'name1', lastName: 'lastname1', email: 'user1@e-mail.com', age: '1', id: 1},
  {firstName: 'name2', lastName: 'lastname2', email: 'user2@e-mail.com', age: '2', id: 2}
];

let lastId = 2;
@Injectable()
export class UsersService {
  constructor() {}
  get() {
    return new Promise(resolve => resolve(users));
  }

  add(user) {
    return new Promise(resolve => {
      lastId++;
      user.id = lastId;
      users.push(user);
      resolve(user);
    })
  }

  delete(id) {
    return new Promise(resolve => {
      const user = users.find(item => { return item.id === id; });
      users.splice(users.indexOf(user),1);
      resolve(users);
    })
  }
}
