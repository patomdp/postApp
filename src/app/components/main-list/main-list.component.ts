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

public page: number = 1;
public pageSize: number = 10;


  // public postsAPI: Array<any> = [];

  // injects PostsService
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    // subscribes to .getPosts() method from the service
    this.postsService.getPosts().subscribe((resp: any) => {
      console.log('Get post response: ', resp);
      this.posts = resp; // asign the response to the array posts
    });
  }

  // method to toggle visibility of the component create or edit
  toggleShowPost(): void {
    this.isNewPostVisible = !this.isNewPostVisible;
  }

  addPost(): void {
    // InputDescription
    // InputTitle

    this.posts.push({
      userId: 1,
      id: this.posts.length + 1,
      title: this.labelValue,
      body: this.descriptionValue,
    });
  }
}
