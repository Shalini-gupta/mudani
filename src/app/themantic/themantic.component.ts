import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-themantic',
  templateUrl: './themantic.component.html',
  styleUrls: ['./themantic.component.scss']
})
export class ThemanticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).on('click','.freqBlockShow',function(){
        $('.freqBlockHide').slideDown();
        $('.freqBlockShow').hide();
      });
    $(document).on('click','.allIconShow',function(){
        $('.allIconHide').slideDown();
        $('.allIconShow').hide();
    });
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

    
  }

}
