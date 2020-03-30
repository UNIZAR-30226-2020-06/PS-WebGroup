import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { users } from '../users';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  users = users;
  nombre;

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
    this.nombre = this.user.getSession();
    console.log(this.nombre);
    console.log(this.users[0].canciones[0]);
  }

}
