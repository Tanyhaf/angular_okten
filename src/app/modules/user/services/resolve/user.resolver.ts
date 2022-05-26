import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import {UserInterface} from "../../interfaces";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserInterface> {
  constructor(private userService: UserService, private router:Router) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface> | Promise<UserInterface> | UserInterface{
    const user = this.router.getCurrentNavigation()?.extras?.state?.['user'] as UserInterface;

    if(user){
      return user
    }

    const { id } = route.params
    return this.userService.getById(id)
  }
}
