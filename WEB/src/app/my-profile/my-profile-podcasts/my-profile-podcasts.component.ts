import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {users} from'../../users';

@Component({
  selector: 'app-my-profile-podcasts',
  templateUrl: './my-profile-podcasts.component.html',
  styleUrls: ['../my-profile.component.css']
})
export class MyProfilePodcastsComponent implements OnInit {

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
