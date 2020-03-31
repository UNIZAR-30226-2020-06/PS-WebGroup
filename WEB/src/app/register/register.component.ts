import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerSuccesful(nombre, email, contraseña){
    window.alert('Conozco tus datos muajaja:');
    console.log(nombre, email, contraseña);

  }

}
