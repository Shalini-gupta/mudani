import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/js/canvasjs.min';
declare var $: any;

@Component({
  selector: 'app-stock-back',
  templateUrl: './stock-back.component.html',
  styleUrls: ['./stock-back.component.scss']
})
export class StockBackComponent implements OnInit {
  roundValue: number = 20
  customOptions56: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 30,
    autoplay: true,
    slideTransition: 'linear',
    // autoplayTimeout: 0,
    autoplaySpeed: 2000,
    autoplayHoverPause: false,
    // autoplayTimeout:3000,
    navSpeed: 700,
    navText: false,
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
        items: 5,
        // slideBy: 3
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {

    $(document).on('click', '.freqBlockShow', function () {
      $('.freqBlockHide').slideDown();
      $('.freqBlockShow').hide();
    });
    // accordian
    $(document).ready(function () {
      $(".set > a").on("click", function () {

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

    function bhau() {
      var range = $("#range").attr("value");
      $("#demo").html(range);
      $(".slide").css("width", "50%");
      $(document).on('input change', '#range', function () {
        var slideWidth = $(this).val() * 100 / 50000;

        $(".slide").css("width", slideWidth + "%");
      });
    }
    bhau();

    $(document).on('click', '.AddSpan .form-control ,.arrowas', function () {
      $('.AddSpan ul').toggle();
    });
    $(document).on('click', '.AddSpan ul li', function () {
      var x = $(this).text();
      $('.AddSpan .form-control').attr('value', x);
      $('.AddSpan ul').slideUp();
    });


    window.onload = function () {

      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        axisY: {
          // title: "Revenue in USD",
          valueFormatString: "#0,,.",
          suffix: "mn",
          prefix: "$"
        },
        data: [{
          type: "splineArea",
          color: "#0091da",
          markerSize: 5,
          xValueFormatString: "YYYY",
          yValueFormatString: "$#,##0.##",
          dataPoints: [
            { x: new Date(2000, 0), y: 3289000 },
            { x: new Date(2001, 0), y: 3830000 },
            { x: new Date(2002, 0), y: 2009000 },
            { x: new Date(2003, 0), y: 2840000 },
            { x: new Date(2004, 0), y: 2396000 },
            { x: new Date(2005, 0), y: 1613000 },
            { x: new Date(2006, 0), y: 2821000 },
            { x: new Date(2007, 0), y: 2000000 },
            { x: new Date(2008, 0), y: 1397000 },
            { x: new Date(2009, 0), y: 2506000 },
            { x: new Date(2010, 0), y: 2798000 },
            { x: new Date(2011, 0), y: 3386000 },
            { x: new Date(2012, 0), y: 6704000 },
            { x: new Date(2013, 0), y: 6026000 },
            { x: new Date(2014, 0), y: 2394000 },
            { x: new Date(2015, 0), y: 1872000 },
            { x: new Date(2016, 0), y: 2140000 }
          ]
        }]
      });
      chart.render();

    }
  }

  spend(event) {
    this.roundValue = Math.round(event.target.value)
  }

  roundUp(event) {
    this.roundValue = 2 * event.target.value
  }

}
