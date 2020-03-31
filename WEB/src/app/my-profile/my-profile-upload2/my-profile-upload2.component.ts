import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import { UsuariosService} from'../../usuarios.service';

@Component({
  selector: 'app-my-profile-upload2',
  templateUrl: './my-profile-upload2.component.html',
  styleUrls: ['../my-profile.component.css']
})
export class MyProfileUpload2Component implements OnInit {

  users 
  nombre
  categories

  constructor(
    private user: UserService,
    private usuario: UsuariosService
  ) { }

  ngOnInit() {
    this.nombre = this.user.getSession();
    this.users = this.usuario.getUsers();
    this.categories = this.usuario.getCategories();
    console.log(this.nombre);
  }

  addSong(cancion){
    this.users[0].canciones.push(cancion);
    console.log(cancion)

  }

}
