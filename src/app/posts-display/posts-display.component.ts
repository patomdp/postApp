import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-posts-display',
  templateUrl: './posts-display.component.html',
  styleUrls: ['./posts-display.component.css'],
})
export class PostsDisplayComponent implements OnInit {
  public title = 'Comments Page';
  public input_value: string = '';

  public comments: Comment[] = [
    {
      postId: 1,
      name: 'TITULO DE PRUEBA',
      email: 'pablorago@gmail.com',
      body: 'ESPERO QUE ESTO FUNCIONE LOREN IPSUM WACHO',
    },
  ];

  constructor(private postsService: PostsService) {
    //subscribes to getPosts from the service
    this.postsService.getComments().subscribe((resp: any) => {
      console.log('Get comments subscribe: ', resp);
      this.comments = resp;
    });
  }

  ngOnInit(): void {}

  addComment() {
    console.log('INPUT VALUE: ', this.input_value);
    this.comments.push({
      postId: 1,
      name: 'TITULO DE PRUEBA',
      email: 'pablorago@gmail.com',
      body: this.input_value,
    });
  }
}
