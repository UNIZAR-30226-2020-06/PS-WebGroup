import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { VisitUserService } from '../../visit-user.service';
import { users } from '../../users';

@Component({
  selector: 'app-profile-songs',
  templateUrl: './profile-songs.component.html',
  styleUrls: ['../profile.component.css']
})
export class ProfileSongsComponent implements OnInit {

  users = users;
  minombre;
  nombre;
  constructor(
    private user: UserService,
    private visit: VisitUserService
  ) { }

  ngOnInit() {
    this.minombre = this.user.getSession();
    this.nombre= this.visit.getSession();
    console.log(this.user.getSession());
    console.log(this.visit.getSession());
  }
}
