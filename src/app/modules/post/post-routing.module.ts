import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostsComponent} from "./components/posts/posts.component";
import {PostResolver} from "./services/resolver";
import {PostGuardGuard} from "./guards/post-guard.guard";

const routes: Routes = [
  {
    path: '', component: PostsComponent, canDeactivate: [PostGuardGuard], canActivate: [PostGuardGuard], children: [
      {path: ':id', component: PostDetailsComponent, resolve: {data: PostResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
