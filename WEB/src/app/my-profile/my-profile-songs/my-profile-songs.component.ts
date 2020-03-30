import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {users} from '../../users';

@Component({
  selector: 'app-my-profile-songs',
  templateUrl: './my-profile-songs.component.html',
  styleUrls: ['../my-profile.component.css']
})
export class MyProfileSongsComponent implements OnInit {

  users = users;
  nombre

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
    this.nombre = this.user.getSession();
    console.log(this.nombre);
  }

}
