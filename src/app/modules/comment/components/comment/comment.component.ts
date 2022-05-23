import { Component, Input, OnInit } from '@angular/core';
import {CommentInterface} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: CommentInterface;

  constructor(private router :Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetails(): void{
    this.router.navigate([this.comment.id],{relativeTo:this.activatedRoute})
  }

}
