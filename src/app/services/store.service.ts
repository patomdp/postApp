import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public arrayPost: Post[] = [];
  public arrayComment: Comment[] = [];

  constructor() {}
}
