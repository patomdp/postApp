import { Component, Input, OnInit } from '@angular/core';
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
  @Input() receivedPost: Post = new Post();

  // Ese post que se recibe se pasa como parametro al constructor para recibir la pagina adecuada
  //

  // constructor(private postsService: PostsService) {
  //   //subscribes to getPosts from the service
  //   this.postsService.getComments().subscribe((resp: any) => {
  //     console.log('Get comments subscribe: ', resp);
  //     //store all the comments in the comments array
  //     this.comments = resp;
  //   });

  // }

  public title =
    this.receivedPost.title || 'Selected post with Related comments Page';
  public body =
    this.receivedPost.body ||
    'Comment body - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';

  public postId = this.receivedPost.id || 1;

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
  addComment(): void {
    console.log('INPUT VALUE: ', this.comment_input);
    this.comments.push({
      postId: 1,
      id: this.comments.length + 1,
      name: 'TEST TITLE',
      email: 'TESTEMAIL@gmail.com',
      body: this.comment_input,
    });
    this.comment_input = '';
  }

  deleteComment(commentId: number): void {
    // remove selected element
    this.comments.splice(commentId, 1);

    console.log('DELETE COMMENT: ', commentId);
  }

  editComment(i: number): void {
    this.comments[i].body = 'FUHSUFHUSHFHSH';
  }

  toggleEdit(id: any) {
    const element: any = document.getElementById('content-body-' + id);
    console.log('ELEMENTO BODY: ', element);
    console.log('ELEMENTO EDITABLE: ', element.contentEditable);

    element.contentEditable = 'true';
    element.focus();

    //element.contentEditable = !element.contentEditable;
    // if (element.contentEditable === 'false'){

    //   element.contentEditable = 'true';
    // } else {
    //   element.contentEditable= 'true';
    // }
  }

  showEdit(i: number): void {}
}
