import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import { UsuariosService} from'../../usuarios.service';

@Component({
  selector: 'app-my-profile-songs',
  templateUrl: './my-profile-songs.component.html',
  styleUrls: ['../my-profile.component.css']
})
export class MyProfileSongsComponent implements OnInit {

  users 
  nombre

  constructor(
    private user: UserService,
    private usuario: UsuariosService
  ) { }

  ngOnInit() {
    this.nombre = this.user.getSession();
    this.users = this.usuario.getUsers();
    console.log(this.nombre);
  }

}
