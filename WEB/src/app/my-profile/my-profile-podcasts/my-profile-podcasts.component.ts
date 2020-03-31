import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { UsuariosService} from'../../usuarios.service';

@Component({
  selector: 'app-my-profile-podcasts',
  templateUrl: './my-profile-podcasts.component.html',
  styleUrls: ['../my-profile.component.css']
})
export class MyProfilePodcastsComponent implements OnInit {

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
