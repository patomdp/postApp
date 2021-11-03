import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainListComponent } from './components/main-list/main-list.component';
import { PostsDisplayComponent } from './post-comments/posts-display.component';

const routes: Routes = [
  { path: 'home', component: MainListComponent },
  { path: 'posts', component: PostsDisplayComponent },
  { path: 'posts/:idPost?', component: PostsDisplayComponent },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
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
