import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  qtyValue: number = 1;
  selectedItem: string;
  planType: string = 'Self Directed Basic';
  feeCharge: number = 0;
  fee: number;
  constructor() { }

  ngOnInit() {
    this.calculateFee()
    $(document).ready(function () {
      $(".set5 > a.setb").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content5")
            .slideUp(200);

        } else {
          $(".set5 > a.setb i")

          $(this)
          $(".set5 > a.setb").removeClass("active");
          $(this).addClass("active");
          $(".content5").slideUp(200);
          $(this)
            .siblings(".content5")
            .slideDown(200);
        }
      });
    });

    $(document).on('click', '.selfDirect', function () {
      $('.cardsLeft.cardsLeftF').addClass('active');
      $('.cardsLeft.cardsLeftNew').removeClass('active');
    });
    $(document).on('click', '.selfManag', function () {
      $('.cardsLeft.cardsLeftNew').addClass('active');
      $('.cardsLeft.cardsLeftF').removeClass('active');
    });
    $(document).on('click', '.pickCard li a', function () {
      $('.pickCard li a').removeClass('active');
      $(this).addClass('active');
    });

    $(document).on('click', '.cardInner ul li', function () {
      $('.cardInner ul li').removeClass('active');
      $(this).addClass('active');
    });

    $(document).ready(function () {
      $(".setnew > a.setb").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".contentnew")
            .slideUp(200);
          $(".setnew > a.setb i")

        } else {
          $(".setnew > a.setb i")

          $(this)
            .find("i")

          $(".setnew > a.setb").removeClass("active");
          $(this).addClass("active");
          $(".contentnew").slideUp(200);
          $(this)
            .siblings(".contentnew")
            .slideDown(200);
        }
      });
    });







  }

  listClick(feeType) {
    this.selectedItem = feeType;
    if (feeType == 'selfBasic') {
      this.planType = 'Self Directed Basic'
    } else if (feeType == 'selfPremium') {
      this.planType = 'Self Directed Premium'
    }
    this.calculateFee()
  }

  counter(val) {
    if (val == 'plus') {
      this.qtyValue = Number(this.qtyValue) + 1
    } else {
      this.qtyValue = Number(this.qtyValue) - 1
    }
    this.calculateFee()
  }

  calculateFee() {
    this.fee = this.feeCharge + 5 + this.qtyValue
  }

}
