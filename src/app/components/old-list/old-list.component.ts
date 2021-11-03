import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

import { Comment } from '../../models/comment';

@Component({
  selector: 'app-old-list',
  templateUrl: './old-list.component.html',
  styleUrls: ['./old-list.component.css'],
})
export class OldListComponent implements OnInit {
  title = 'PostApp';
  public posts: Array<any> = [];

  commentArray: Comment[] = [
    { id: 1, body: 'testeo body', postId: 3 },
    { id: 2, body: 'testeo body', postId: 3 },
    { id: 3, body: 'testeo body locoooo', postId: 3 },
  ]; //Inicializa el array vacio
  // public commentArray: Comment[] = [{id:1, body:"testeo body", postId: 3}]; //Inicializa el array con un elemento

  selectedComment: Comment = new Comment();

  addOrEdit() {
    if (this.selectedComment.body) {
      this.selectedComment.id = this.commentArray.length + 1;
      this.commentArray.push(this.selectedComment);
      this.selectedComment = new Comment();
    }
  }

  //Para inyectar el servicio
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((resp: any) => {
      console.log(resp);
      this.posts = resp;
    });
  }

  addComment(comment: string) {
    this.posts.push(comment);
    //document.getElementById('comment-input').innerHTML = comentario;
  }
}
