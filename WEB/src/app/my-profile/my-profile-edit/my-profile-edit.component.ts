import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-my-profile-edit',
  templateUrl: './my-profile-edit.component.html',
  styleUrls: ['../my-profile.component.css']
})
export class MyProfileEditComponent implements OnInit {

  nombre;

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
    this.nombre = this.user.getSession();
    console.log(this.nombre);
  }

  UpdateUser(name){
    this.nombre = name;
    this.user.MySession(name);
    console.log(this.nombre);
  }

}

