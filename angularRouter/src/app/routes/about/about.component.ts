import { Component, OnInit } from '@angular/core';
import queries from "../../queries/queries";
import { RequestService } from "../../services/request.service";
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-about',
  animations: [
    fadeInOnEnterAnimation({ duration: 2000 }),
    fadeOutOnLeaveAnimation()
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  userList = []

  constructor(private request: RequestService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.request.getUsers(queries.allUsers).subscribe(users => {
      this.userList = users.data.allUsers
    });
  }



}
