import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-self-directed',
  templateUrl: './self-directed.component.html',
  styleUrls: ['./self-directed.component.scss']
})
export class SelfDirectedComponent implements OnInit {

  customOptions55: any = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:30,
    navSpeed: 700,
    navText: [' <img src="assets/images/arrow-blue.png">', '<img src="assets/images/arrow-white.png">'],
    responsive: {
      0: {
        items: 1,
        dots: true,
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

  ngOnInit(){

    // scroll tab 
$(".howWorky").click(function() {
	$('html, body').animate({
	scrollTop: $(".howWork").offset().top
	}, 1000);
	});
// scroll tab end

 // accordian
$(document).ready(function() {
  $(".set > a").on("click", function() {
      if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
              .siblings(".content")
              .slideUp(200);
          $(".set > a i")
              .removeClass("fa-minus")
              .addClass("fa-plus");
      } else {
          $(".set > a i")
              .removeClass("fa-minus")
              .addClass("fa-plus");
          $(this)
              .find("i")
              .removeClass("fa-plus")
              .addClass("fa-minus");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
              .siblings(".content")
              .slideDown(200);
      }
  });
});

// accordian end
  }

  ngAfterViewInit() {
    this.nextEvent();
    this.prevEvent();
  }


  nextEvent() {
    let j = 3;

    const element = document.getElementsByClassName("owl-next")

    element[0].addEventListener('click', function (e) {
      var elements = document.getElementsByClassName("custom-next-click");
      console.log(e)
      if (j !== 5) {
        j++;
      }
      else {
        j = 3;
      }
      console.log(j, elements[4])
      elements[0];
      if (j == 3) {
        elements[0].className = "custom-next-click active"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active none"
        elements[3].className = "custom-next-click"
        elements[4].className = "custom-next-click"
      }
      if (j == 4) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active none"
        elements[4].className = "custom-next-click"
      }
      if (j == 5) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active"
        elements[4].className = "custom-next-click active none"
      }
    })
  }
  prevEvent() {
    let j = 3;

    const element = document.getElementsByClassName("owl-prev")

    element[0].addEventListener('click', function (e) {
      var elements = document.getElementsByClassName("custom-next-click");
      console.log(e)
      if (j !== 3) {
        j--;
      }
      else {
        j = 5;
      }
      console.log(j, elements[4])
      elements[0];
      if (j == 3) {
        elements[0].className = "custom-next-click active"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active none"
        elements[3].className = "custom-next-click"
        elements[4].className = "custom-next-click"
      }
      if (j == 4) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active none"
        elements[4].className = "custom-next-click"
      }
      if (j == 5) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active"
        elements[4].className = "custom-next-click active none"
      }
    })
    //  this.activeDot=j;
    //  console.log(this.activeDot)
  }

}
