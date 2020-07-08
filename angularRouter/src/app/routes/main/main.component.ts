import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-main',
  animations: [
    fadeInOnEnterAnimation({ duration: 2000 }),
    fadeOutOnLeaveAnimation()
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
