import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.scss']
})
export class Blog1Component implements OnInit {
  customOptionBlog2: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [' <img src="assets/images/arrow-white.png">', '<img src="assets/images/arrow-white.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
    $(document).on('click','.retairmentLeft.blogAll.blogNew ul li a' ,function(){
      $('.retairmentLeft.blogAll.blogNew ul li a').removeClass('active');
      $(this).addClass('active');
    });
  }

}
