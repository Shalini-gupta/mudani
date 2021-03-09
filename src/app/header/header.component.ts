import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
      } else {
        $('.header').removeClass('fixedHeader');
      }
    });

    $(document).on('click', '.loginPart li a', function () {
      $('.loginPart li a').removeClass('active');
      $(this).addClass('active');
    });

    $(document).ready(function () {
      $("#Opensidenav").click(function () {
        $(".SideNav").css("transform", "translateX(-20px)");
      });
      $("#CloseNav").click(function () {
        $(".SideNav").css("transform", "translateX(-200%)");
      });
    });

  }

}
