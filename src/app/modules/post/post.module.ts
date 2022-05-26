import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostRoutingModule} from './post-routing.module';
import {PostService} from "./services";
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostResolver} from "./services/resolver";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers: [
    PostService,
    PostResolver
  ]
})
export class PostModule {
}
