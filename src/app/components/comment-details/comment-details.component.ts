import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../models/IComments";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetailsObj: IComment;

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getComment(id).subscribe(value => this.commentDetailsObj = value);
    });

  }
}
