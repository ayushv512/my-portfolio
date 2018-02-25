import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items: Array<any> = []
  
    constructor() {
      this.items = [
        
        { name:'assets/images/IMG_20170329_171022_376.jpg' },
        { name:'assets/images/IMG_20160825_132849188.jpg'},
        { name:'assets/images/IMG-20161223-WA0011.jpg' },
        { name:'assets/images/IMG-20161111-WA0012.jpg' },
        { name:'assets/images/IMG-20161026-WA0003_1_nocrop.jpeg'},
        { name:'assets/images/IMG_20160718_175744.jpg'},
        { name:'assets/images/2015-07-30 13.26.44.jpg'},
        { name:'assets/images/IMG-20170327-WA0008.jpg'},
        { name:'assets/images/IMG-20160702-WA0042.jpg'},
        { name:'assets/images/IMG_20151009_170033.jpg'},
        { name:'assets/images/1127025147307605_1.jpeg'}

      ]
    }
    
  ngOnInit() {
    
  }

}
