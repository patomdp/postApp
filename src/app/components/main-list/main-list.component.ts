import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// Components
import { Post } from 'src/app/models/post';
import { PostsDisplayComponent } from 'src/app/posts-display/posts-display.component';
import { PostsService } from 'src/app/services/posts.service';

// This component contains all the posts
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  //  @Input() registerNewPost = '';
  @ViewChild(PostsDisplayComponent) child: any;

  public title = 'List of Posts';
  public posts: Array<Post> = [];

  public descriptionValue: string = '';
  public labelValue: string = '';

  // to control the pagination
  public page: number = 1;
  public pageSize: number = 5;

  // injects PostsService and router
  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit(): void {
    // subscribes to .getPosts() method from the service and get all the posts from the API
    this.postsService.getPosts().subscribe((resp: any) => {
      console.log('Get post response: ', resp);
      this.posts = resp; // asign the response to the array posts
    });
  }

  addPost(): void {
    this.posts.push({
      id: this.posts.length + 1, // provisional Post ID
      title: this.labelValue,
      body: this.descriptionValue,
    });
  }

  // Method to navigate to the selected post page and open the comments
  onSelectPost(post: Post): void {
    this.router.navigate(['/posts/', { idPost: post.id }]);
    console.log('POST ID: /posts/' + post.id);
  }

  deletePost(PostId: number): void {
    // remove selected element
    this.posts.splice(PostId, 1); // remove last element
    // console.log('DELETED POST INDEX: ', PostId);
  }

  toggleEdit(id: any) {
    const element: any = document.getElementById('post-body-' + id);
    // console.log('POST BODY: ', element);
    // console.log('POST EDITABLE: ', element.contentEditable);

    element.contentEditable = 'true';
    element.focus();
  }
}
