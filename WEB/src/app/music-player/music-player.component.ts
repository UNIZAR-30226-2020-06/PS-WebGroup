import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommentsService } from '../comments.service';
import { users} from '../users';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  
  users = users;
  minombre;
  a: string;
  coms: CommentsService = new CommentsService();

  constructor(
    private user: UserService,
    
  ) { }

  ngOnInit() {
    this.minombre = this.user.getSession();
    console.log(this.minombre);
  }

  CommentSong(newCom){
    this.coms.addComment(newCom)
  }

  showComment(){
    return this.coms;
  }

}

