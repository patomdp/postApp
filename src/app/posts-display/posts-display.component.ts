import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

// Components and models
import { PostsService } from '../services/posts.service';
import { Comment } from '../models/comment';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts-display',
  templateUrl: './posts-display.component.html',
  styleUrls: ['./posts-display.component.css'],
})
export class PostsDisplayComponent implements OnInit {
  // TODO: tiene que recibir por @input el TITLE, POSTID, BODY del post para poder usarlo
  // @Input() postTitle: string = '';
  // @Input() postBody: string = '';
  // @Input() receivedPost: Post = new Post();

  // Ese post que se recibe se pasa como parametro al constructor para recibir la pagina adecuada

  public receivedPost: Post = new Post();

  // // this.receivedPost.title ||
  // public body: string =
  //   'Comment body - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';
  // // this.receivedPost.body ||
  // public postId = this.receivedPost.id;
  // // || '1'

  public comment_input: string;

  //inits empty array to store the comments
  public comments: Comment[] = [];
  public title = this.receivedPost.title as string;
  public body = this.receivedPost.body as string;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
    //subscribes to getPosts from the service
    this.postsService
      .getCommentsById(this.route.snapshot.paramMap.get('id'))
      .subscribe((resp: any) => {
        console.log('Get comments subscribe: ', resp);
        //store all the comments in the comments array
        this.comments = resp;
      });

    // subscribes from the service to get ONE posts from the API
    this.postsService
      .getOnePost(this.route.snapshot.paramMap.get('id'))
      .subscribe((resp: any) => {
        console.log('GET ONE POST response: ', resp);
        this.receivedPost = resp; // asign the response to the array posts
      });

    // comment input starts empty
    this.comment_input = '';
  }

  ngOnInit(): void {
    this.title = this.receivedPost.title as string;
    this.body = this.receivedPost.body as string;
  }

  // method to add new comments to the post.
  addComment(): void {
    console.log('INPUT VALUE: ', this.comment_input);
    this.comments.push({
      postId: 1, // TODO: tiene que ser igual al ID del post que llega
      id: this.comments.length + 1,
      name: 'TEST TITLE',
      email: 'TESTEMAIL@gmail.com',
      body: this.comment_input,
    });
    this.comment_input = '';
  }

  // remove selected element
  deleteComment(commentId: number): void {
    this.comments.splice(commentId, 1);
    console.log('DELETE COMMENT ID: ', commentId);
  }

  // editComment(i: number): void {
  //   this.comments[i].body = 'FUHSUFHUSHFHSH';
  // }

  toggleEdit(id: any) {
    const element: any = document.getElementById('content-body-' + id);
    element.contentEditable = 'true';
    element.focus();
  }
}
