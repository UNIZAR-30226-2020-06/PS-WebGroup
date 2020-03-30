import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  name;

  MySession(name) {
    this.name =name;
  }

  getSession() {
    return this.name;
  }

}
