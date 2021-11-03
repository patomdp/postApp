import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  public title = 'List of Posts';
  public posts: Array<Post> = [];
  public isNewPostVisible: boolean = false;

  public descriptionValue: string = '';
  public labelValue: string = '';

  //public postsAPI: Array<any> = [];

  // injects PostsService
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    //subscribes to getPosts from the service
    this.postsService.getPosts().subscribe((resp: any) => {
      console.log('Get post response: ', resp);
      this.posts = resp;
    });
  }

  toggleShowPost() {
    this.isNewPostVisible = !this.isNewPostVisible;
  }

  addPost() {
    //InputDescription
    //InputTitle

    this.posts.push({
      userId: 1,
      id: this.posts.length + 1,
      title: this.labelValue,
      body: this.descriptionValue,
    });
  }
}
