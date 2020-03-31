import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../user.service';
import { VisitUserService } from '../visit-user.service';
import { UsuariosService} from'../usuarios.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users ;
  minombre;
  @Input() nombre: string
  constructor(
    private user: UserService,
    private visit: VisitUserService,
    private usuario: UsuariosService
  ) { }

  ngOnInit() {
    this.minombre = this.user.getSession();
    this.visit.MySession(this.nombre);
    this.users = this.usuario.getUsers();
    console.log(this.user.getSession());
    console.log(this.visit.getSession());

  }


}


