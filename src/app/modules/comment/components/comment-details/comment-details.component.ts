import { Component, OnInit } from '@angular/core';
import {CommentInterface} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: CommentInterface;

  constructor(private activatedRoute:ActivatedRoute, private commentService:CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.commentService.getById(id).subscribe(value => {
        this.comment = value
      })
    })
  }

}
