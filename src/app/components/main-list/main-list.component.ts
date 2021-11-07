import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  @Input() createdModel = new EventEmitter<Post>();

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
      this.posts = resp; // asign the response to the array posts
    });
    if (this.createdModel) {
      let model = this.createdModel;
      this.addNewPost();
    }
  }

  addPost(): void {
    this.posts.push({
      id: this.posts.length + 1, // provisional Post ID
      title: this.labelValue,
      body: this.descriptionValue,
    });
  }

  addNewPost(): void {
    this.posts.push({
      id: this.posts.length + 1, // provisional Post ID
      title: this.createdModel.name as string,
      body: ' this.createdModel',
    });
  }

  deletePost(PostId: number): void {
    // remove selected element
    this.posts.splice(PostId, 1);
  }

  toggleEdit(id: any) {
    const element: any = document.getElementById('post-body-' + id);
    element.contentEditable = 'true';
    element.focus();
  }
}
