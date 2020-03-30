import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
  }

  loginSuccesful( name ){
    this.user.MySession(name);
    window.alert('HAS ENTRADO A MI TERRENO');
    console.log(this.user.name);
  }
}
