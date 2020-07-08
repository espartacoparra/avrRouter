import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-gallery',
  animations: [
    fadeInOnEnterAnimation({ duration: 2000 }),
    fadeOutOnLeaveAnimation()
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photoList = [
    'https://mdbootstrap.com/img/Photos/Others/image02.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image002.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image06.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image008.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image005.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image010.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image18.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image17.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image02.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image002.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image06.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image008.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image005.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image010.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image18.jpg',
    'https://mdbootstrap.com/img/Photos/Others/image17.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
