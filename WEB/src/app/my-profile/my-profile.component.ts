import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  users;
  nombre;

  constructor(
    private user: UserService,
    private usuarios: UsuariosService
  ) { }

  ngOnInit() {
    this.nombre = this.user.getSession();
    this.users = this.usuarios.getUsers();

  }

}
