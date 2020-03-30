import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { users } from '../../users';
import { VisitUserService } from 'src/app/visit-user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['../profile.component.css']
})
export class ProfileInfoComponent implements OnInit {

  users = users;
  minombre;
  nombre

  constructor(
    private user: UserService,
    private visit: VisitUserService
  ) { }

  ngOnInit() {
    this.minombre = this.user.getSession();
    this.nombre = this.visit.getSession();
    console.log(this.minombre);
  }

}
