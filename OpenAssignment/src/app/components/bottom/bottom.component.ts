import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {

image: string ;
image1: string ;
  constructor() {
    this.image = '../../../assets/images/rectangle.png';
    this.image1 = '../../../assets/images/rectangle-dot.png';
   }

  ngOnInit(): void {
  }

  onMouseHover(){
    this.image = this.image1;
    console.log('image', this.image);
  }
  onMouseOut(){
    this.image = this.image;
  }
}
