import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _postsService: PostsService) {}

  ngOnInit(): void {}

  newPost(post: any): void {
    console.log('PARENT COMPONENT');
    console.log('POST RECIBIDO: ', post);
    // TODO: ahora tiene que hacer un push al array
    this._postsService.getOnePost(post.id).subscribe((data) => {
      console.log(data);
    });
  }
}
