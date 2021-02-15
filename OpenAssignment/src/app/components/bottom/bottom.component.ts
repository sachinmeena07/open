import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {
  toggle: false;
  image: string;
  togolpos: BigInteger;
  image1: string;
  constructor() {
    this.image = '../../../assets/images/rectangle.png';
    this.image1 = '../../../assets/images/rectangle-dot.png';
  }

  ngOnInit(): void {
  }

  onMouseHover(togolpos) {
    document.getElementsByClassName('toggle')[togolpos].setAttribute('src', this.image);
    console.log('image', this.image);
  }

  onMouseOut(togolpos) {
    document.getElementsByClassName('toggle')[togolpos].setAttribute('src', this.image1);
    
  }
}
