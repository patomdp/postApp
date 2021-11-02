import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsDisplayComponent } from './posts-display/posts-display.component';

const routes: Routes = [
  { path: 'selector:id', component: PostsDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
