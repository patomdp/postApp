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

  // get all posts
  public getPosts(): Observable<any> {
    const header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url + 'posts', { headers: header });
  }
  // TODO: get one posts filtered by postId
  public getOnePost(postID: any): Observable<any> {
    const header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url + 'posts/' + postID, { headers: header });
  }
  // get nested comments in posts 1 as an example
  public getComments(): Observable<any> {
    const header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url + 'posts/1/comments/', { headers: header });
  }
  // TODO: get nested comments in posts 1 as an example
  public getCommentsById(createdModel: any): Observable<any> {
    const header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url + 'posts/1?comments=' + createdModel.id, {
      headers: header,
    });
  }
}

// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/posts
