import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentListingComponent } from './comment-listing/comment-listing.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';


const routes: Routes = [
  {
    path: 'comment-listing',
    component: CommentListingComponent
  },
  {
    path: 'comment-detail',
    component: CommentDetailComponent
  },
  {
    path: '**',
    redirectTo: 'comment-listing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
