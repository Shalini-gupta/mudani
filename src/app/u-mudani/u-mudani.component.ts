import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-u-mudani',
  templateUrl: './u-mudani.component.html',
  styleUrls: ['./u-mudani.component.scss']
})
export class UMudaniComponent implements OnInit {
  customOptionU: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [' <img src="assets/images/arrow-left.png">', '<img src="assets/images/arrow-right.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {

//     $(document).on('click' ,'.ourMain a' ,function(){
//       $('.accondinClick a').siblings('.mainContent').slideUp();
// $(this).siblings('.mainContent').slideToggle();
//     });

    $(document).on('click','.ourMain a' ,function(){
    $('.mainContent ').slideUp();
    $(this).siblings('.mainContent').slideDown();
    });

  }

}
