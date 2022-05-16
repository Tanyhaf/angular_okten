import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {IUserDetails} from "../../models/IUserDetails";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj : IUserDetails;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state:{data}} = history;
      this.userDetailsObj = data;
    })

  }

}
