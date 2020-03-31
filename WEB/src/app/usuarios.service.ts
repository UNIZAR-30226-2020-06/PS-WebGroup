import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  users = [
    {
      name: 'Angel',
      canciones: ['Tra-Tra','25/8', 'FCK'],
      podcasts: ['La vaca lechera','Buenafuente','La Resistencia']
    },
    {
      name: 'JEFE SUPREMO',
      canciones: ['La Gozadera', 'Despacito 2', 'Pajaritos en el aire'],
      podcasts: ['SI SI O SI NO', 'COMO GOBERNAR EL MUNDO', 'NO TENGAS PIEDAD']
    }
  ];


categories = ['Rock','Pop','Latino','EDM','Dubstep'];

  AddSong(song,id){
    this.users[id].canciones.push(song);
    console.log(this.users[id].canciones[3]);
  }

  getUsers(){
    return this.users;
  }

  getCategories(){
    return this.categories;
  }

}
