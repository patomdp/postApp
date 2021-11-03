import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private _url = 'https://jsonplaceholder.typicode.com/';
  // injects an http client
  constructor(private http: HttpClient) {
    console.log('Post Service successfully inyected');
  }

  // get some posts, filtered
  public getPosts(): Observable<any> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url + 'posts?userId=1', { headers: header });
  }
  // get nested comments, just an example
  public getComments(): Observable<any> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url + 'posts/1/comments/', { headers: header });
  }
}

// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/posts
