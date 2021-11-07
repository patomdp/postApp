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
import { StoreService } from 'src/app/services/store.service';

// This component contains all the posts
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  public title = 'List of Posts';

  public descriptionValue: string = '';
  public labelValue: string = '';

  // to control the pagination
  public page: number = 1;
  public pageSize: number = 10;

  // injects PostsService and router
  constructor(
    private postsService: PostsService,
    public storeService: StoreService
  ) {}

  ngOnInit(): void {
    // subscribes to .getPosts() method from the service and get all the posts from the API
    if (this.storeService.arrayPost.length === 0) {
      this.postsService.getPosts().subscribe((resp: any) => {
        this.storeService.arrayPost = resp; // asign the response to the array posts
      });
    }
  }

  deletePost(PostId: number): void {
    // remove selected element
    this.storeService.arrayPost.splice(PostId, 1);
  }

  toggleEdit(id: any) {
    const element: any = document.getElementById('post-body-' + id);
    element.contentEditable = 'true';
    element.focus();
  }
}
