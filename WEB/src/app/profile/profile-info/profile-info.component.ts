import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { UsuariosService} from'../../usuarios.service';
import { VisitUserService } from 'src/app/visit-user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['../profile.component.css']
})
export class ProfileInfoComponent implements OnInit {

  users
  minombre;
  nombre

  constructor(
    private user: UserService,
    private visit: VisitUserService,
    private usuario: UsuariosService
  ) { }

  ngOnInit() {
    this.minombre = this.user.getSession();
    this.nombre = this.visit.getSession();
    this.users = this.usuario.getUsers();
    console.log(this.minombre);
  }

}
