import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

import { HomeComponent } from './components/home/home.component';
import { PostsDisplayComponent } from './posts-display/posts-display.component';
import { AddEditPostComponent } from './components/add-edit-post/add-edit-post.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsDisplayComponent },
  { path: 'posts/:id', component: PostsDisplayComponent },
  { path: 'addEdit', component: AddEditPostComponent },

  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
