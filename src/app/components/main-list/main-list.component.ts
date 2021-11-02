import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

// Model
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  public title = 'List of Posts';
  public posts: Array<Post> = [];
  public postsAPI: Array<any> = [];

  // injects PostsService
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    //subscribes to getPosts from the service
    this.postsService.getPosts().subscribe((resp: any) => {
      console.log(resp);
      this.posts = resp;
    });
    // complete posts
    this.posts = [
      { id: 1, title: 'testeo title' },
      { id: 2, title: 'testeo title body' },
      { id: 3, title: 'testeo body locoooo' },
    ];
  }
}
