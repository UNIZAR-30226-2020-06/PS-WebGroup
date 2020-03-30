import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VisitUserService {

  name;

  MySession(name) {
    this.name =name;
  }
  
  getSession() {
    return this.name;
  }
  
  }
