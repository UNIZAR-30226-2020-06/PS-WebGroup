import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: Array<string> = ['Hola','Adios'];

  constructor() { }

  addComment(com){
    this.comments.push(com);
    console.log(this.comments);
  }

  getComments() {
    return this.comments;
  }
}
