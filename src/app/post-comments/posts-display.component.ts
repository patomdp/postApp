import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Comment } from '../models/comment';

// TODO: Angular material interface
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-posts-display',
  templateUrl: './posts-display.component.html',
  styleUrls: ['./posts-display.component.css'],
})
export class PostsDisplayComponent implements OnInit {
  public title = 'Comments Page';

  // ANGULAR Material DEMO TABLE
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  public comments: Comment[] = [
    {
      postId: 1,
      name: 'TITULO DE PRUEBA',
      email: 'pablorago@gmail.com',
      body: 'ESPERO QUE ESTO FUNCIONE LOREN IPSUM WACHO',
    },
  ];

  constructor(private postsService: PostsService) {
    //subscribes to getPosts from the service
    this.postsService.getComments().subscribe((resp: any) => {
      console.log('Get comments subscribe: ', resp);
      this.comments = resp;
    });
  }

  ngOnInit(): void {}

  addComment() {
    this.comments.push({
      postId: 1,
      name: 'TITULO DE PRUEBA',
      email: 'pablorago@gmail.com',
      body: 'ESPERO QUE ESTO FUNCIONE LOREN IPSUM WACHO',
    });
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
];
