import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-imgfrag',
  templateUrl: './imgfrag.component.html',
  styleUrls: ['./imgfrag.component.css']
})
export class ImgfragComponent implements OnInit {
  @Input() titlePage: string
  @Input() url: string
  background = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    minHeight: '35rem;',
    padding: '15rem 0',
    background: '',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: ' scroll',
    backgroundSize: 'cover'
  }
  constructor() { }

  ngOnInit(): void {
    this.background.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000000 100%), url("${this.url}")`
  }

}
