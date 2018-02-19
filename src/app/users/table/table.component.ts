import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [UsersService]
})
export class TableComponent implements OnInit {

  @Input() users;
  @Input() deleteUser;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

}
