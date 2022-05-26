import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable} from 'rxjs';

import {CommentInterface} from "../../interfaces";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<CommentInterface> {
  constructor(private commentService: CommentService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentInterface> | Promise<CommentInterface> | CommentInterface {
    const comment = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as CommentInterface;

    if (comment) {
      return comment
    }

    const {id} = route.params
    return this.commentService.getById(id);
  }
}
