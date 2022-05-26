import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentService} from "./services";
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import {CommentResolver} from "./services/resolver";


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRoutingModule
  ],
  providers: [
    CommentService,
    CommentResolver
  ]
})
export class CommentModule { }
