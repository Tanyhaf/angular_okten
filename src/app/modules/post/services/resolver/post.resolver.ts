import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable} from 'rxjs';

import {PostInterface} from "../../interfaces";
import {PostService} from "../post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<PostInterface> {
  constructor(private postService: PostService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface> | Promise<PostInterface> | PostInterface {
    const post = this.router.getCurrentNavigation()?.extras?.state?.['post'] as PostInterface;

    if (post) {
      return post;
    }

    const {id} = route.params
    return this.postService.getById(id);
  }
}
