import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-posts-display',
  templateUrl: './posts-display.component.html',
  styleUrls: ['./posts-display.component.css'],
})
export class PostsDisplayComponent implements OnInit {
  // TODO: tiene que recibir por @input el TITLE del post que se esta recibiendo y almacenarlo en la variable title
  @Input() postTitle: string = '';
  @Input() postBody: string = '';

  public title = this.postTitle || 'Selected post with Related comments Page';
  public body =
    this.postBody ||
    'Comment body - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';

  public comment_input: string;

  //inits empty array to store the comments
  public comments: Comment[] = [];

  constructor(private postsService: PostsService) {
    //subscribes to getPosts from the service
    this.postsService.getComments().subscribe((resp: any) => {
      console.log('Get comments subscribe: ', resp);
      //store all the comments in the comments array
      this.comments = resp;
    });

    // comment input starts empty
    this.comment_input = '';
  }

  ngOnInit(): void {}

  // method to add new comments to the post.
  addComment() {
    console.log('INPUT VALUE: ', this.comment_input);
    this.comments.push({
      postId: 1,
      name: 'TEST TITLE',
      email: 'TESTEMAIL@gmail.com',
      body: this.comment_input,
    });
  }
}
