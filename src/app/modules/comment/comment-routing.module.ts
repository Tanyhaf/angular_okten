import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolver} from "./services/resolver";
import {GuardGuard} from "./guards/guard.guard"

const routes: Routes = [
  {
    path: '', component: CommentsComponent, canActivate: [GuardGuard], children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {data: CommentResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
