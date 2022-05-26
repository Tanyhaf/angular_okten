import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserInterface} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: UserInterface;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.user = data)
  }

}
