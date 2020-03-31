import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { VisitUserService } from '../../visit-user.service';
import { UsuariosService} from'../../usuarios.service';

@Component({
  selector: 'app-profile-songs',
  templateUrl: './profile-songs.component.html',
  styleUrls: ['../profile.component.css']
})
export class ProfileSongsComponent implements OnInit {

  users ;
  minombre;
  nombre;
  constructor(
    private user: UserService,
    private visit: VisitUserService,
    private usuario: UsuariosService
  ) { }

  ngOnInit() {
    this.minombre = this.user.getSession();
    this.nombre= this.visit.getSession();
    this.users = this.usuario.getUsers();
    console.log(this.user.getSession());
    console.log(this.visit.getSession());
  }
}
