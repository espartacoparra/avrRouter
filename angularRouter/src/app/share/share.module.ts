import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgfragComponent } from "../components/imgfrag/imgfrag.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImgfragComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ImgfragComponent, FormsModule]

})
export class ShareModule { }
