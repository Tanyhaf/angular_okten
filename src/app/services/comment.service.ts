import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/IComments";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = "https://jsonplaceholder.typicode.com/comments"

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this
      .http
      .get<IComment[]>(this.url);
  }

  getComment(id: number): Observable<IComment> {
    return this
      .http
      .get<IComment>(this.url + '/' + id);
  }
}


